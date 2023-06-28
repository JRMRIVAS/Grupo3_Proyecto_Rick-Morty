import React, { useState} from 'react';
import portalgun from '../assets/audio/portalgun.mp3'
import fusion2 from '../assets/img/fusion2.png'

export default function HoverImg() {
    const [hoverImg, setHoverImg] = useState(false);

    const cursorEncima = () => {
        setHoverImg(true);
    };

    const cursorFuera = () => {
        setHoverImg(false);
    };

    return (
        <div className='' >
            <img src={fusion2} className='buscador mx-auto  img-fluid text-center ' alt="imgBuscador"  onMouseEnter={cursorEncima} onMouseLeave={cursorFuera}/>
            {hoverImg && <audio src={portalgun} autoPlay  />}
        </div>
    );
}

