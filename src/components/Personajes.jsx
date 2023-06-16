import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pagination from './Pagination'



export default function Personajes() {
  const [character, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

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

  const handleNextPage = () => {
    obtenerCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    obtenerCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    obtenerCharacters(url);
  }, []);

    //console.log(character)
    return (
      <div className='container'>    
          <h1>Rick y Morty Api</h1> 
          <div>
              <nav>
                <ul className="pagination justify-content-center">
                  {info.prev ? (
                    <li className="page-item">
                      <button className="btn btn-primary text-white" onClick={handlePreviousPage}>Previous</button>
                    </li>
                  ) : null}
                  {info.next ? (
                    <li className="page-item">
                      <button className="btn btn-primary text-white" onClick={handleNextPage}>Next</button>
                    </li>
                  ) : null}
                </ul>
              </nav>
            </div>

            <div className='row my-5'>
                {
                  character.map((item, indice) => {
                  
                  return (
                      
                      <div className='col-lg-3 col-md-6 col-sm-12 my-4' key={indice}>
                          <div className="card">
                                <img src={item.image} className="img-fluid" alt="character"/>    
                                                    
                              <div className="detaill  balanced">
                                    <h5>{item.name}</h5> 
                                    <p>Estado: {item.status}</p>                             
                                    <p>Especie: {item.species}</p>                        
                                    <p>Género: {item.gender}</p>
                                    <p>origen: {item.origin.name}</p>
                                    <p>Ubicación: {item.location.name}</p>                                                                            
                                </div>
                          </div>                                 
                      </div>    
                  )  
                  }) 
                }
              </div>

          <div>
              <nav>
                <ul className="pagination justify-content-center">
                  {info.prev ? (
                    <li className="page-item">
                      <button className="btn btn-primary text-white" onClick={handlePreviousPage}>Previous</button>
                    </li>
                  ) : null}
                  {info.next ? (
                    <li className="page-item">
                      <button className="btn btn-primary text-white" onClick={handleNextPage}>Next</button>
                    </li>
                  ) : null}
                </ul>
              </nav>
            </div>
      </div>
    )


}