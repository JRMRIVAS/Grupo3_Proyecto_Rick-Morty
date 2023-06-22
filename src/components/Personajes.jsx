import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filtros from './Filtros'
import craneo from '../assets/img/craneo.png'
import amor from '../assets/img/amor.png'
import pregunta from '../assets/img/pregunta.png'
import aright from '../assets/img/aright.png'
import aleft from '../assets/img/aleft.png'

function NavPage({ page, setPage }) {
  return (
    <div className="d-flex justify-content-center gap-4 my-5">
      {page > 0 && (
          <button
              className="btn btn-primary btn-sm"
              onClick={() => setPage(page - 1)}>
              <img src={aleft} className="img-fluid arow" alt="aleft"/> 
              PAGINA: {page}
          </button>
      )}

      {page < 42 && (
          <button
              className="btn btn-primary btn-sm"
              onClick={() => setPage(page + 1)}>
              PAGINA: {page + 1}
              <img src={aright} className="img-fluid arow" alt="aright"/> 
          </button>
      )}
      
    </div>
  );
}

export default function Personajes() {
  const [character, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const url =  `https://rickandmortyapi.com/api/character?page=${page}`
  
  const obtenerCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    obtenerCharacters(url);
  }, [page]);
 
    //console.log(character)
    return (
      <div className='container'>    
          <h1>Rick y Morty Api</h1> 
           
                            
            <div className='row my-5'>
                {
                  character.map((item, indice) => {
                  
                  return (
                      
                      <div className='col-lg-3 col-md-6 col-sm-12 my-4' key={indice}>
                          <div className="card">
                                <img src={item.image} className="img-fluid" alt="character"/>    
                                                    
                              <div className="detaill">
                                    <h5>{item.name}</h5> 
                                    <p>Estado: {item.status}</p> 
                                    <p>Especie: {item.species}</p>                        
                                    <p>Género: {item.gender}</p>
                                    <p>origen: {item.origin.name}</p>
                                    <p>Ubicación: {item.location.name}</p>                                                                            
                                </div>
                          </div>   
                        
                          {(() => {
                                if (item.status === "Dead") {
                                  return <div className="estatus">
                                            <img src={craneo} alt="api_rick_and_morty" className='img-fluid' />
                                         </div>;
                                  } else if (item.status === "Alive") {
                                  return <div className=" estatus">
                                            <img src={amor} alt="api_rick_and_morty" className='img-fluid' />
                                        </div>;
                                } else if (item.status === "unknown"){
                                  return <div className="estatus">
                                           <img src={pregunta} alt="api_rick_and_morty" className='img-fluid' />
                                         </div>;
                                }
                              })()}
                                                   
                      </div>    
                  )  
                  }) 
                }
              </div>

              <NavPage page={page} setPage={setPage} />
             
              

      </div>
    )


}