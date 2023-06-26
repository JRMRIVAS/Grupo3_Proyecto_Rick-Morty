import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Creadores from './Creadores'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='link text-white fs-3'>Home</Link>
                        </li>
                        <li>
                            <Link to="/Creadores" className='link text-white fs-3'>Creadores</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Creadores' element={<Creadores />} />

            </Routes>
        </BrowserRouter>
    )
}
