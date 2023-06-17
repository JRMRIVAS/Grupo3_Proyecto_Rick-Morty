import React from 'react'
import loguito from '../assets/img/loguito_cortado.jpg'
import portal2 from '../assets/img/portal2.gif'
import { Link } from 'react-router-dom'



export default function Footer() {
    return (
        <footer className='footer bg-black text-white'>
            <div className='container  justify-content-between '>
                <div className='row '>
                    <div className='col-md-2 align-self-center'>
                        <img src={loguito} className=' img-fluid cara' alt='loguito' />
                    </div>
                    <div className=' col-md-3 align-self-center'>
                        <p >¡ WUBBA LUBBA DUB DUB !</p>
                    </div>
                    <div className='col-md-4 align-self-center'>
                        <ul className=''>
                            <li>
                                <Link></Link> INICIO</li>
                            <li>PERSONAJES</li>
                            <li>CREADORES</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <img src={portal2} loop className=' img-fluid' />
                    </div>
                </div>
            </div>
        </footer>
    )
}
