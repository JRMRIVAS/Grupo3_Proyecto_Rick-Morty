import React, {useState, useEffect} from 'react'
import axios from 'axios'
import craneo from '../assets/img/craneo.png'
import amor from '../assets/img/amor.png'
import pregunta from '../assets/img/pregunta.png'
import aright from '../assets/img/aright.png'
import aleft from '../assets/img/aleft.png'
import '../assets/css/estilos.css'


function NavPage({ page, setPage }) {
  return (
    <div className="d-flex justify-content-center gap-4 my-5">
      {page > 0 && (
          <button
              className="btn btn-warning btn-sm fw-bold"
              onClick={() => setPage(page - 1)}>
              <img src={aleft} className="img-fluid arow" alt="aleft"/> 
              PAGINA: {page}
          </button>
      )}

      {page < 42 && (
          <button
              className="btn btn-warning btn-sm fw-bold"
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
  const [page, setPage] = useState(1);
  let [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  let { info, results } = character;
  const url =  `https://rickandmortyapi.com/api/character/?page=${page}`;
  

  const fetchCharacters = () => {
    axios
      .get(url)
      .then((response) => {
        setCharacters(response.data.results);       
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters();
  }, [page]);

    return (
   
    <div className='container'>    
        <h1>Rick y Morty Api</h1> 
        <NavPage page={page} setPage={setPage} />
            <div className='row my-5'>
              {
                  character.map((character, indice) => {
                  return (
                          
                    <div className='col-lg-3 col-md-6 col-sm-12 my-4' key={indice}>
                        <div className="card-per">
                              <img src={character.image} className="img-fluid im-card" alt="character"/>    
                                             
                            <div className="detaill">
                                  <h5>{character.name}</h5>
                                  <p>Id: {character.id}</p> 
                                  <p>Estado: {character.status}</p> 
                                  <p>Especie: {character.species}</p>                        
                                  <p>Género: {character.gender}</p>
                                  <p>origen: {character.origin.name}</p>
                                  <p>Ubicación: {character.location.name}</p>                                                                            
                              </div>
                        </div>   
                          
                  {(() => {
                    if (character.status === "Dead") {
                      return <div className="estatus">
                                <img src={craneo} alt="api_rick_and_morty" className='img-fluid' />
                            </div>;
                      } else if (character.status === "Alive") {
                      return <div className=" estatus">
                                <img src={amor} alt="api_rick_and_morty" className='img-fluid' />
                            </div>;
                    } else if (character.status === "unknown"){
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

    
  
  );
}

