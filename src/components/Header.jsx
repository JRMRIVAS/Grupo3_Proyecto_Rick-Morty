import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='text-white fs-3'>Home</Link>
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
