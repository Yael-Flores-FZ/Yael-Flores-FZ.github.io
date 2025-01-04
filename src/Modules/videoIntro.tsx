import React from "react";

const videoURL = '/videos/videoIntro.mp4';

const VideoIntro: React.FC = () => {
    return (
        <div className='w-full h-full'>
            <video
                controls
                autoPlay
                style={{ width: "100%", height: "100%" }} 
            >
                <source src={videoURL} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos mp4.
            </video>
        </div>
    );
}

export default VideoIntro;