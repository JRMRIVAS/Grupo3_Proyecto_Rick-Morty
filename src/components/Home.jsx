import React from 'react'
import op1 from '../assets/img/op1.jpg'
import op2 from '../assets/img/op2.jpg'
import op3 from '../assets/img/op3.jpg'
import music from '../assets/audio/music.mp3'
import ControlAudio from './ControlAudio'


export default function Home() {
    return (
        <>
        <ControlAudio/>
        <main className='container-fluid'>
            <div className='diapositivas'>
                <div id='carouselExampleAutoplaying' className='carousel slide carousel-fade'>
                    <div className='carousel-inner ' >
                        <div className='carousel-item active' >
                            <img src={op1} className='d-block w-100  rounded' alt='rick1'/>
                        </div>
                        <div className='carousel-item' >
                            <img src={op2} className=' w-100 rounded' alt='rick2'/>
                        </div>
                        <div className='carousel-item' >
                            <img src={op3} className='d-block w-100 rounded' alt='rick3'/>
                        </div>
                    </div>
                    <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>
            <div className=' text-center text-light px-4 '>
                <h1 className='titulo '>NOTICIAS</h1>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quis? Iste assumenda doloribus rerum architecto ex quod error voluptatum voluptate quis, cum deserunt quaerat, quae dolores sapiente et expedita vel!</p>
            </div>
        </main>
        
        </>
    )
}


