import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Navbar from '../../Components/Navbar/Navbar'
import Hero2 from '../../Components/Hero2/Hero2'
import Footer from '../../Components/Footer/Footer'
import Copywrite from '../../Components/Copywrite/Copywrite'
import Quote from '../../Components/Quote/Quote'
import ProjectAll from '../../Components/ProjectAll//ProjectAll'

const Projects = () => {
  return (
    <>
    <Nav/>
    <Navbar/>
    <Hero2 heading="Our Completed Projects"/>
    <ProjectAll/>
    <Quote/>
    <Footer/>
    <Copywrite/>


    </>
  )
}

export default Projects