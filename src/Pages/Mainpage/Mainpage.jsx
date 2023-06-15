import React from 'react'
import Earth from '../../Maincomponents/Earth/Earth'
import './Mainpage.css'
import Satellite from '../../Maincomponents/3D Objects/Satellite/Satellite'
import SatelliteDish from '../../Maincomponents/3D Objects/Satellitedish/Satellitedish'
const Mainpage = () => {
  return (
    <div>

    <Earth/>
    <div className="container md:mx-auto text-white flex flex-col mb-20 lg:w-screen lg:grid lg:grid-flow-col">
      <div className='ml-10'>
      <h1 className="text-6xl mb-5">Our Team</h1>
      <p className='text-2xl mb-10'>
      We are an undergraduate students who are <br></br>
      interested in creating something new which includes<br></br> 
      the major domains essentiel in real world work-field <br></br>
      such as Communications, Embedded Systems, Web <br></br> 
      development  and also Space!
      </p>
      <img className='OurTeam' src='/src/Images/OurTeam.jpg' loading='lazy' alt='unloaded Img'/>
      </div>
      <div>
      <Satellite/>
      </div>
    </div>
    <div className='container md:mx-auto text-white flex flex-col lg:w-screen lg:grid lg:grid-flow-col'>
    <div className='ml-10'>
      <h1 className="text-6xl mb-5">Earth Satellite Station (ESS)</h1>
      <p className='text-2xl mb-10 lg:w-3/6'>
      • An Earth Satellite Station (ESS) is a ground station that is used to <br></br>
      communicate with and control satellites orbiting the Earth. <br></br>
      • ESSs are an essential part of satellite operations, as they allow satellite <br></br> 
      operators to monitor the health of their satellites, upload new software, and <br></br>
      download data collected by the satellites. <br></br>
      • ESSs are typically located in areas with low radio frequency interference,<br></br> 
      such as remote areas or deserts. <br></br>
      They are equipped with large antennas that can send and receive signals to and <br></br> 
      from satellites in orbit. ESSs are also equipped with powerful computers and <br></br>
      software that allow operators to analyze satellite data and control the satellite's movements. <br></br>
      • There are many types of Earth Satellite Stations, including those operated by <br></br> 
      government agencies, universities, and private companies. <br></br>
      • ESSs can be used for a variety of purposes, such as weather forecasting,<br></br> 
      remote sensing, and satellite communication.
      </p>
      </div>
      <div className='lg:mt-32 lg:absolute' id='EarthStation'>
      <SatelliteDish/>
      </div>
    </div>
    </div>
  )
}

export default Mainpage