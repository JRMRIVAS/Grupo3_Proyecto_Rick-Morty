import React from 'react'
import loguito from '../assets/img/loguito_cortado.jpg'
import portal2 from '../assets/img/portal2.gif'
import HoverAudio from './ControlAudio'



export default function Footer() {
    return (
        <footer className='footer bg-black text-white'>
            <div className='container  justify-content-between '>
                <div className='row gap-3'>
                    <div className='col-md-3 align-self-center'>
                        <img src={loguito} className=' img-fluid carita' alt='loguito' />
                    </div>
                    <div className='col-md-2 align-self-center wubba'>
                        <HoverAudio />
                    </div>
                    <div className='col-md-3 align-self-center'>
                        <ul  >
                            <li className='minimenu '>INICIO</li>
                            <li className='minimenu'>PERSONAJES</li>
                            <li className='minimenu'>CREADORES</li>
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
