import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Nav from '../../Components/Nav/Nav'
import Hero2 from '../../Components/Hero2/Hero2'
import AboutDigi from '../../Components/AboutDigi/AboutDigi'
import Award from '../../Components/Award/Award'
import Choose from '../../Components/Choose/Choose'
import TeamSoul from '../../Components/TeamSoul/TeamSoul'
import Meat from '../../Components/Meat/Meat'
import Footer from '../../Components/Footer/Footer'
import Copywrite from '../../Components/Copywrite/Copywrite'
import Quote from '../../Components/Quote/Quote'

const AboutUs = () => {
  return (
    <>
    <Nav/>
    <Navbar/>
    <Hero2 heading="About Us"/>
    <AboutDigi/>
    <Award/>
    <Choose/>
    <TeamSoul/>
    <Meat/>
    <Quote/>
    <Footer/>
    <Copywrite/>


    </>
  )
}

export default AboutUs