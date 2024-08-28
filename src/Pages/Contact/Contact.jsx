import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Navbar from '../../Components/Navbar/Navbar'
import Hero2 from "../../Components/Hero2/Hero2"
import Tech from '../../Components/Tech/Tech'
import PlatForms from '../../Components/PlatForms/PlatForms'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Clients from '../../Components/Clients/Clients'
import Quote from '../../Components/Quote/Quote'
import Footer from '../../Components/Footer/Footer'
import Copywrite from '../../Components/Copywrite/Copywrite'

const Contact = () => {
  return (
    <div>
      <Nav/>
      <Navbar/>
      <Hero2 heading="Contact Us"/>
      <Tech/>
      <PlatForms/>
      <ContactForm/>
      <Clients/>
      <Quote/>
      <Footer/>
      <Copywrite/>
    </div>
  )
}

export default Contact