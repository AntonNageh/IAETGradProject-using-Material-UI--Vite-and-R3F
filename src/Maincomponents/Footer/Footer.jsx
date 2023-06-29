import React from 'react'

const Footer = () => {
  return (
    <div className='container text-white text-center mt-10'>
      <footer>
        <h1>Made with love by Anton Nageh - IAET Satellite Graduation Project</h1>
        <ul className="social-icon flex justify-center gap-3 p-5">
        <li><a href="https://github.com/AntonNageh" className='rounded-full p-1 hover:bg-black'><i className="fa fa-github"></i></a></li>
        <li><a href="https://www.facebook.com" className='rounded-full p-1 hover:bg-blue-700'><i className="fa fa-facebook"></i></a></li>
        <li><a href="https://www.linkedin.com/in/anton-nageh-772852169/" className='rounded-full p-1  hover:bg-blue-700'><i className="fa fa-linkedin"></i></a></li>
        <li><a href="https://www.instagram.com" className='rounded-full p-1 hover:bg-red-500'><i className="fa fa-instagram"></i></a></li>
        </ul>
        <h1>@Copyright, All rights reserved</h1>
      </footer>
    </div>
  )
}

export default Footer