import React, { useState, useEffect } from 'react';
import music from '../assets/audio/music.mp3'

export default function ControlAudio() {
    const [reproduciendo, setReproduciendo] = useState(false);
    const volumen = 0.1;

    useEffect(() => {
        const sonido = document.getElementById('Opening');
        sonido.volume = volumen;

        if (reproduciendo) {
            sonido.play();
        } else {
            sonido.pause();
        }
    }, [reproduciendo]);

    const AlternarReproduccion = () => {
        setReproduciendo(!reproduciendo);
    };

    return (
        <div className='container-fluid form-check form-switch d-flex flex-row-reverse pt-4 pe-4 text-white'>
            <audio id='Opening' src={music}  loop  />
            <label className='form-check-label' htmlFor='flexSwitchCheckChecked'>Sonido Encendido</label>
            <input className='form-check-input  mx-4 interruptor' type='checkbox'  role='switch' id='flexSwitchCheckChecked' onChange={AlternarReproduccion} checked={reproduciendo} autoPlay/>
            <label className='form-check-label' htmlFor='flexSwitchCheckChecked'>Sonido Apagado</label>
        </div>
    )
}
