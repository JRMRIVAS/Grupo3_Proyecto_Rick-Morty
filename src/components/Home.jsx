import React from 'react'
import op1 from '../assets/img/op1.jpg'
import op2 from '../assets/img/op2.jpg'
import op3 from '../assets/img/op3.jpg'
import op4 from '../assets/img/op4.jpg'
import video1 from '../assets/video/rickvideo1.mp4'
import video3 from '../assets/video/rickvideo3.mp4'
import video2 from '../assets/video/rickvideo2.mp4'
import fusion2 from '../assets/img/fusion2.png'
import {Link} from 'react-router-dom' 
import HoverImg from './HoverImg'

export default function Home() {
    return (
        <>
        <main className='container'>
            <div className='diapositivas'>
                <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="4000">
                        <img src={op1} className="d-block w-100" alt="imgCarrousel1" />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                        <img src={op2} className="d-block w-100" alt="imgCarrousel2" />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                        <img src={op3} className="d-block w-100" alt="imgCarrousel3" />
                        </div>
                        <div className="carousel-item">
                        <img src={op4} className="d-block w-100" alt="imgCarrousel4" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className=' text-center px-4'>
                <h1 className='titulo'>NOTICIAS</h1>
            </div>

            <div className='row gap-5 align-items-center justify-content-center '>
                <div className='col-md-2' >
                    <video src={video2} className='videos  ' controls></video>
                </div>
                <div className='col-md-6'>
                    <video src={video1} className='videos ' controls ></video>
                </div>
                <div className='col-md-2' >
                    <video src={video3} className='videos' controls></video>
                </div>
            </div>
                <Link to="/" className=' text-center col-md-4 '>
                    <HoverImg />
                </Link>
        </main>
        </>
    )
}

