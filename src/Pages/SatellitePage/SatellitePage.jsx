import React from 'react'


const SatellitePage = () => {
  return (
    // This page is for displaying the captured live stream video by the Rover with ESP32 Cam.
    // Also for displaying the photo by the ESP32 Cam attached on the Satellite.
    // The code will be updated with the real photo and video (Using the real URLs).
    <div className='container mx-auto h-full text-white flex flex-col items-center text-center'>
        <div className='content-center justify-center'>
        <h1>Captured Image : </h1>
        <img className='mt-10'  width='400px' src='https://www.researchgate.net/publication/266969216/figure/fig2/AS:295605382467585@1447489223252/Satellite-view-from-Google-Earth-of-the-area-showing-the-instrumented-site-locations.png'></img>
        </div>
        <div className='mt-12'>
        <h1>Captured Video : </h1>
        
        <video className='mt-10' autoPlay muted loop width='400px'>
        <source 
        src="https://st2.depositphotos.com/1417530/10062/v/600/depositphotos_100620744-stock-video-satellite-view-of-the-earth.mp4" 
        type="video/mp4"/> 
        </video>
        </div>
    </div>
  )
}

export default SatellitePage