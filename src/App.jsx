
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Maincomponents/Footer/Footer'
import Header from './Maincomponents/Header/Header'
import Mainpage from './Pages/Mainpage/Mainpage'
import Landing from './Pages/Landing Page/Landing'
import 'animate.css'
import SatellitePage from './Pages/SatellitePage/SatellitePage'
import { useEffect } from 'react'
function App() {
  //UseEffect for rendering the loader while the content is being loaded.
  useEffect(() => {
     
    const content = document.querySelector(".content");
    content.classList.add("content-hidden");
    setTimeout(() => {
      content.classList.remove("content-hidden");
    }, 500);
    const loader = document.querySelector(".loader");
      //Adding delay if the content is loaded already (just so user can notice the loader since the content is light already.)
    setTimeout(() => {
      loader.classList.add("loader-hidden");
    }, 500)
    
   
    //Removing the loader code to provide performance.
    loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
    })

  }, []);
  return (
    <>
    <div className='loader'>
    <div data-js="astro" className="astronaut">
    <div className="head"></div>
    <div className="arm arm-left"></div>
    <div className="arm arm-right"></div>
    <div className="body">
      <div className="panel"></div>
    </div>
    <div className="leg leg-left"></div>
    <div className="leg leg-right"></div>
    <div className="schoolbag"></div>
  </div>
    </div>
    <div className='content'>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route element={<Mainpage/>} path='/main'></Route>
      <Route element={<SatellitePage/>} path='/satellite'></Route>
      <Route element={<Landing/>} path='/'></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    </>
  )
}

export default App
