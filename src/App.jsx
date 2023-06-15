
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Maincomponents/Footer/Footer'
import Header from './Maincomponents/Header/Header'
import Mainpage from './Pages/Mainpage/Mainpage'
import Landing from './Pages/Landing Page/Landing'
import 'animate.css'
import SatellitePage from './Pages/SatellitePage/SatellitePage'
function App() {

  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route element={<Mainpage/>} path='/main'></Route>
      <Route element={<SatellitePage/>} path='/satellite'></Route>
      <Route element={<Landing/>} path='/'></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
