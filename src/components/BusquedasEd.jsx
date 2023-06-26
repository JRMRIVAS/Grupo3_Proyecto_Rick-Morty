import axios from 'axios'
import React, { useState } from 'react'
import craneo from '../assets/img/craneo.png'
import amor from '../assets/img/amor.png'
import pregunta from '../assets/img/pregunta.png'

  

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
                <h1 className='text-center my-5'>Encuentra a tu personaje favorito!</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="" className='text-warning'>Ingresa el nombre del personaje</label>
                    <input type="text" className='form-control' onChange={handleName}/>
                    <button className='btn btn-primary mt-3' type='submit'>Ver Personaje</button>
                    <h2 className='text-center'>Puedes tambien usar los filtros</h2>
                    <div className='my-3 gap-5 d-flex justify-content-center'>                   
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
                    </div>
                    <div className='tip text-center my-4'>
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
                                        <div className='col-lg-3 col-md-6 col-sm-12 my-4' key={indice}>
                                                <div className="card">
                                                    <img src={personaje.image} className="img-fluid imgbusqueda" alt="character" />

                                                    <div className="detaill">
                                                        <h5>{personaje.name}</h5>
                                                        <p>Id: {personaje.id}</p>
                                                        <p>Estado: {personaje.status}</p>
                                                        <p>Especie: {personaje.species}</p>
                                                        <p>Género: {personaje.gender}</p>
                                                        <p>origen: {personaje.origin.name}</p>
                                                        <p>Ubicación: {personaje.location.name}</p>
                                                    </div>
                                                </div>  
                                            {(() => {
                                                if (personaje.status === "Dead") {
                                                    return <div className="estatus">
                                                        <img src={craneo} alt="api_rick_and_morty" className='img-fluid' />
                                                    </div>;
                                                } else if (personaje.status === "Alive") {
                                                    return <div className=" estatus">
                                                        <img src={amor} alt="api_rick_and_morty" className='img-fluid' />
                                                    </div>;
                                                } else if (personaje.status === "unknown") {
                                                    return <div className="estatus">
                                                        <img src={pregunta} alt="api_rick_and_morty" className='img-fluid' />
                                                    </div>;
                                                }
                                            })()}
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
