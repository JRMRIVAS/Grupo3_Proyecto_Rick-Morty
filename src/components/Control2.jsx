import React, { useState, useRef } from 'react';
import music from '../assets/audio/music.mp3'
import video1 from '../assets/video/rickvideo1.mp4'
import video2 from '../assets/video/video2.mp4'

const MiComponente = () => {
  const [musicaReproduciendo, setMusicaReproduciendo] = useState(true);
  const videoRefs = useRef([]);

  const reproducirMusica = () => {
    setMusicaReproduciendo(true);
  };

  const pausarMusica = () => {
    setMusicaReproduciendo(false);
  };

  const manejarFinVideo = () => {
    setMusicaReproduciendo(true);
  };

  const agregarVideoRef = (ref) => {
    if (ref && !videoRefs.current.includes(ref)) {
      videoRefs.current.push(ref);
    }
  };


  return (
    <div>
      {musicaReproduciendo && <audio src={music} autoPlay />}
      <video ref={agregarVideoRef}  src={video1} onPlay={pausarMusica} onPause={reproducirMusica} onEnded={manejarFinVideo} controls/>
      <video ref={agregarVideoRef}  src={video2} onPlay={pausarMusica} onPause={reproducirMusica} onEnded={manejarFinVideo} controls/>

    </div>
  );
};

export default MiComponente;