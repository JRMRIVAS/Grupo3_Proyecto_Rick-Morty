import React, { useState} from 'react';
import wuba from '../assets/audio/wuba.mp3'



export default function HoverAudio() {
    const [hoverWubba, setHoverWubba] = useState(false);

    const cursorEncima = () => {
        setHoverWubba(true);
    };

    const cursorFuera = () => {
        setHoverWubba(false);
    };

    return (
        <div>
            <p  onMouseEnter={cursorEncima} onMouseLeave={cursorFuera}>
            ¡ WUBBA LUBBA DUB DUB !
            </p>
            {hoverWubba && <audio src={wuba} autoPlay />}
        </div>
    );
}



