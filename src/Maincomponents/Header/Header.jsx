import React, { useState } from 'react'
import './Header.css'
const Header = () => {
  //Using useState hook for enable/disable the hamburger menu
  const [isActive, setIsActive] = useState(true);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  
  return (
    // Initializing the navbar with hamburger menu which only appears on phone screens
    <header className="mt-10 pb-10 md:mt-5 mb:pb-0 flex flex-wrap md:justify-center md:flex-nowrap z-50 w-full text-sm">
      <nav className="relative max-w-7xl w-full border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-transparent dark:border-gray-100" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold dark:text-white" style={{ pointerEvents:'none' }} aria-label="Brand">IAET Satellite Project</a>
          <div className="md:hidden">
            <button type="button" onClick={()=>handleClick()} className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-transparent text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-500 dark:border-gray-100 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        </div>
     {/* The hidden menu which shows after clicking the hamburger menu button */}
     {/* Also it will be the main nav links which leads to different pages */}
    <div id="navbar-collapse-with-animation" className={`hs-collapse  overflow-hidden transition-all duration-300 basis-full grow md:flex md:ml-[20vw] ${isActive? 'hidden' : ''}`}>
      <div className="relative p-3 md:p-0 md:ml-96 Navbar_body items-center flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-10 md:mr-10 md:pl-7">
        <a className="w-fit font-medium md:py-6 dark:text-white dark:hover:text-gray-500" href="/" aria-current="page">Home</a>
        <a className="w-fit font-medium md:py-6 dark:text-white dark:hover:text-gray-500" href="/Satellite">Satellite</a>
        <a className="w-fit font-medium md:py-6 dark:text-white dark:hover:text-gray-500" href="/Temp">Temperature</a>
      </div>
    </div>

  </nav>
</header>
  )
}

export default Header