import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Personajes from './Personajes'
import BusquedasEd from './BusquedasEd'



export default function Header_celeste() {
  return (
    <BrowserRouter>
        <header className='bg-dark'>
            <nav >
                <ul>
                    <li>
                        <Link to="/" className='link'>Personajes</Link>
                    </li>  
                    <li>
                        <Link to="/busqueda" className='link'>Busqueda</Link>
                    </li>                  
                </ul>
            </nav>
        </header>
        <Routes>
            <Route path='/' element={<Personajes />}/>    
            <Route path='/busqueda' element={<BusquedasEd />}/>          
        </Routes>
    </BrowserRouter>
  )
}
