import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav className='container'>
                    <ul className=''>
                        <li>
                            <Link to="/" className='text-decoration-none fs-1 sombra'>Home</Link>
                        </li>
                        <li>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
