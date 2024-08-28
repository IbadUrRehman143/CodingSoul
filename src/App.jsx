import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import AboutUs from "./Pages/AboutUs/AboutUs"
import Projects from "./Pages/Projects/Projects"
import Contact from "./Pages/Contact/Contact"
import Website from "./Components/Website"
import Custom from "./Components/Custom/Custom"
import AppD from "./Components/AppD/AppD"
import CustomCoding from "./Components/CustomCoding/CustomCoding"
import DigitalMark from "./Components/DigitalMark/DigitalMark"
import Trending from "./Components/Trending/Trending"
import Hosting from "./Components/Hosting/Hosting"
import BlogC from "./Pages/BlogC/BlogC"


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/website" element={<Website/>}/>
        <Route path="/custom" element={<Custom/>}/>
        <Route path="/appd" element={<AppD/>}/>
        <Route path="/customcoding" element={<CustomCoding/>}/>
        <Route path="/digitalmark" element={<DigitalMark/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/hosting" element={<Hosting/>}/>
        <Route path="/blogc" element={<BlogC/>}/>



      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
