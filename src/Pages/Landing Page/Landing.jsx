import React from 'react'
import './Landing.css'
import Eye from '../../Maincomponents/Eyes/Eye'
const Landing = () => {
  return (
    <>
    <div className='text-center h-screen'>
        <h1 className='text-3xl p-10 text-white'>Welcome to our Website!</h1>
        <div className='flex items-center justify-center'>
        <Eye/>
        <Eye/>
        </div> 
        <div className='p-10'></div>
        <a href='/main' className='Button cursor-pointer'><span>Jump in !!</span></a>
    </div>
    </>
  )
}

export default Landing