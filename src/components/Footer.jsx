import React from 'react'
import loguito from '../assets/img/loguito_cortado.jpg'
import portal2 from '../assets/img/portal3.gif'
import HoverAudio from './ControlAudio'
import './assets/css/rodristyles.css'




export default function Footer() {
    return (
        <footer className='footer bg-black text-white'>
            <div className='container  justify-content-between  text-center text-sm-left'>
                <div className='row gap-3'>
                    <div className='col-md-3 col-sm-6 align-self-center text-center text-sm-left'>
                        <img src={loguito} className=' img-fluid carita' alt='loguito' />
                    </div>
                    <div className='col-md-2 col-sm-6 align-self-center wubba'>
                        <HoverAudio />
                    </div>
                    <div className='col-md-3 align-self-center  '>
                        <ul className='list-unstyled' >
                            <li className='minimenu '>INICIO</li>
                            <li className='minimenu'>PERSONAJES</li>
                            <li className='minimenu'>CREADORES</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6 text-center text-sm-left'>
                        <img src={portal2} loop className=' img-fluid mx-auto rotacion' />
                    </div>
                </div>
            </div>
        </footer>
    )
}
