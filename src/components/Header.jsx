import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import BusquedasEd from './BusquedasEd'
import Profile from './Profile'
import Creadores from './Creadores'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className='text-decoration-none fs-1 sombra nav-link'>Inicio</Link>
                                </li>
                                <li>
                                    <Link to="/busqueda" className='text-decoration-none fs-1 sombra nav-link'>Busqueda</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/creadores" className='text-decoration-none fs-1 sombra nav-link'>Desarrolladores</Link>
                                </li>
                                <li>
                                    <Profile />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>            
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/busqueda' element={<BusquedasEd />}/>          
                <Route path='/creadores' element={<Creadores />}/>          

            </Routes>
        </BrowserRouter>
    )
}

