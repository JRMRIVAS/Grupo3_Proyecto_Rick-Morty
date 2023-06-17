import React from 'react'
import './Landing.css'
import rickMorty from './assets/rick_morty.webp'
import LoginButton from './Login.jsx'

export default function Landing() {
    return (
    <div id='landing'>
        <section className='container d-flex flex-row-reverse flex-lg-nowrap flex-wrap align-items-center justify-content-center'>
            <img id='landingImage' src={rickMorty} alt="Rick & Morty" />
            <div className='d-flex flex-column align-items-center'>
                <h1 id='landingHeading'>¡Descubre y explora a tus personajes favoritos de Rick & Morty aquí!</h1>
                <LoginButton />
            </div>
        </section>
        
    </div>
    )
}
