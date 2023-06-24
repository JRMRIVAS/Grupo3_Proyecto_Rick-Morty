import axios from 'axios'
import React, { useState } from 'react'


export default function BusquedasEd() {
    //asignando 2 estados
    //un estado para todos los personajes y otro estado para un personaje en especifico por su nombre

    const [personajes, setPersonajes] = useState([]);
    const [name, setName] = useState("");
    const [state, setState] = useState("");
    const [specie, setSpecie] = useState("");
    const [gender, setGender] = useState("");

    const obtenerPersonajeByNombre = () => {
        axios.get(`https://rickandmortyapi.com/api/character?name=${name}&status=${state}&species=${specie}&gender=${gender}`).then((response) => {
            console.log(response.data.results);
            setPersonajes(response.data.results);
            setState(response.data.results);
            setSpecie(response.data.results);
            setGender(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
        obtenerPersonajeByNombre();
        //cancelamos el evento submit para que no lo vuelva a renderizar
        e.preventDefault();
    }
    const filterState = (e) => {
        console.log(e.target.value);
        setState(e.target.value);
    }
    const filterSpecie = (e) => {
        console.log(e.target.value);
        setSpecie(e.target.value);
    }
    const filterGender = (e) => {
        console.log(e.target.value);
        setGender(e.target.value);
    }

    
    console.log(personajes)
    return (
        <div className='hero'>
            <div className='contenedor row'>
                <h1 className='text-center pt-4 blanco'>Encuentra a tu personaje favorito!</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Ingresa el nombre del personaje</label>
                    <input type="text" className='form-control' onChange={handleName}/>
                    <button className='btn btn-primary' type='submit'>Ver Personaje</button>
                    <h2>Puedes tambien usar los filtros</h2>
                    <select onChange={filterState} name="" id="">
                        <option value="" selected disabled>Seleccione Estado</option>
                        <option id='alive' value='alive'>Vivo</option>
                        <option id='dead' value='dead'>Muerto</option>
                        <option id='unknown' value='unknown'>Desconocido</option>
                    </select>
                    <select onChange={filterSpecie} name="" id="">
                    <option value="" selected disabled>Seleccione Especie</option>
                        <option id='human' value='human'>Humano</option>
                        <option id='alien' value='alien'>Alien</option>
                        <option id='humanoid' value='humanoid'>humanoide</option>
                    </select>
                    <select onChange={filterGender} name="" id="">
                        <option value="" selected disabled default>Seleccione Genero</option>
                        <option id='male' value='male'>Masculino</option>
                        <option id='female' value='female'>Femenino</option>
                    </select>
                    <div className='tip'>
                    <h3>Consejo 1: recarga la pagina en cada busqueda</h3>
                    <h3>Consejo 2: si no aparece nada es porque no hay resultados con esas especificaciones</h3>
                    </div>
                </form>
                <br />
                 {/* apartado del contenido de cada personaje*/}


                 {
                    personajes.length === 0 ? (
                        <div class="alert alert-danger" role="alert">
                            No se encontraron resultados
                        </div>
                    ) : (
                        <>
                            {
                                personajes.map((personaje, indice) => {
                                    return(
                                        <div className=' col-lg-4 col-md-6 col-xs-12 personaje'>
                                            <div className='margen0 text-center'>
                                                <h2 className=' blanco texto'> {personaje.name}</h2>
                                                <p className='hover '>Estado : {personaje.status} </p>
                                                <p className=' hover '>Especie : {personaje.species}</p>
                                                <img className='imgbusqueda marl' src={personaje.image} alt={personaje.name}/>
                                            </div>
                                             
                                        </div>
                                    )
                                })
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}
