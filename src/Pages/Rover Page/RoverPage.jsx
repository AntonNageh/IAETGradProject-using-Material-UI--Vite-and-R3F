import React from 'react'
import Rover from '../../Maincomponents/3D Objects/Rover/Rover'

const RoverPage = () => {
  return (
    <div className='container md:mx-auto text-white flex flex-col'>
      <div className='mt-10 grid-cols-6 md:mr-[10]'>
       <Rover/> 
      </div>
      <div className='grid-cols-6 ml-[5%] md:ml-[2%] md:mt-[3%] md:mr-20'>
        <h1 className='text-5xl'>Space Rover</h1>
        <h1 className='text-lg mt-5'>
        • A rover (or sometimes planetary rover),
          is a planetary surface exploration device designed 
          to move across the solid surface on a planet or other planetary mass celestial bodies.<br/>
        • Rovers arrive on spacecraft and are used in conditions very distinct <br/> 
          from those on the Earth, which makes some demands on their design. <br/>
        • Our RC car (A simple example as the Rover), is used to stream a live video off the surface of the desired planet with UltraSonic Sensor attached on it. </h1>
      </div>
    </div>
  )
}

export default RoverPage