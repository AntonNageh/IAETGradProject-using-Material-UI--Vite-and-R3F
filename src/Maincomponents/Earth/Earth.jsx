import React from 'react'
import './Earth.css'
const Earth = () => {
  return (
    <div className="h-screen container mx-auto">
  <center>
    <div>
    <h1 className="Earth_Text mt-16 pl-3 md:mt-7 sm:ml-16 xl:ml-96 relative">E<span>ART</span>H</h1>
      <div className="Earth_Img h-80 w-80 lg:w-96 lg:h-96">
        <div className="Earth"></div>
      </div>
    </div>
    <a href='/Cubesat' className='text-white Button'><span>Start Now</span></a>
    <h2 className='text-white mt-10 absolute'>This is a place for all space lovers where everyone will find a hundred things for themselves</h2>
  </center>
  </div>
  )
}

export default Earth