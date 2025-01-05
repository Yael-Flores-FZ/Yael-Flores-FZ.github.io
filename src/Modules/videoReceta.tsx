import React from 'react';

const videoURL = '/videos/receta.mp4';

const VideoReceta = () => {
    return(
        <div className='h-[500px]'>
            <video
                controls
                autoPlay
                style={{ width: '100%', height: '100%' }}
            >
                <source src={videoURL} type='video/mp4' />
                Tu navegador no soporta la reproducción de videos mp4.
            </video>
        </div >
    );
};

export default VideoReceta