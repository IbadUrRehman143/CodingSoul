import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import SliderCard from '../../Components/Slider/Slider'
import DigitaLCard from '../../Components/DigitalCard/DigitaLCard'
import PlatForms from '../../Components/PlatForms/PlatForms'
import Tech from '../../Components/Tech/Tech'
import Award from '../../Components/Award/Award'
import ProjectsA from '../../Components/ProjectsA/ProjectsA'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Clients from '../../Components/Clients/Clients'
import Quote from '../../Components/Quote/Quote'
import Footer from '../../Components/Footer/Footer'
import Copywrite from '../../Components/Copywrite/Copywrite'

const Home = () => {
  return (
    <div className="tw-overflow-x-hidden">
    <Nav/>
    <Navbar/>
    <Hero/>
    <SliderCard/>
    <DigitaLCard/>
    <PlatForms/>
    <Tech/>
    <Award/>
    <ProjectsA/>
    <ContactForm/>
    <Clients/>
    <Quote/>
    <Footer/>
    <Copywrite/>
    </div>
  )
}

export default Home