import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Navbar from '../Navbar/Navbar'
import ContactForm from "../../Components/ContactForm/ContactForm"
import Clients from "../../Components/Clients/Clients"
import Quote from '../Quote/Quote'
import Footer from '../Footer/Footer'
import Copywrite from '../Copywrite/Copywrite'

const Hosting = () => {
    return (
        <>
            <Nav />
            <Navbar />
            <Host Header="WP Hosting"
                para1="We understand the importance of reliable and fast WordPress hosting for your website’s success. That’s why we’re offering top-notch WP hosting services at an unbeatable price of just $2.48/month for 1 year! Our hosting plans come with lightning-fast speeds, robust security, and expert support to ensure your website runs smoothly and efficiently."
                para2="With our WP hosting, you can enjoy a seamless and stress-free experience, focusing on what matters most – growing your online presence. Our hosting infrastructure is optimized for WordPress, ensuring optimal performance, scalability, and security for your website. Plus, our expert support team is available 24/7 to assist you with any queries or issues. Don’t miss out on this incredible offer! Sign up now and experience the best-in-class WP hosting at an affordable price."
                month="2.48$ / Month"
                year="For 1 year" />
            <Host Header=".com + Hosting"
                para1="We’re guiding it easier than ever to establish a professional online presence. For just $2.68/month for 1 year, you can get started with our WP hosting services, plus a FREE .com domain! This incredible offer includes everything you need to launch and grow your website, from lightning-fast speeds and robust security to expert support and a free domain to match your brand."
                para2="With our WP hosting and free .com domain, you can create a strong online identity and reach a wider audience. Our hosting infrastructure is optimized for WordPress, ensuring optimal performance, scalability, and security for your website. Plus, our expert support team is available 24/7 to assist you with any queries or issues. Don’t miss out on this amazing deal! Sign up now and get your website up and running with a professional .com domain and top-notch WP hosting at an unbeatable price.2.68$ / Month"
                month="2.68$ / Month"
                year="For 1 year" />
            <Host Header=".pk + Hosting"
                para1="At Coding Souls, we’re bringing affordable and reliable WordPress hosting to Pakistan! For just $2.85/month for 1 year, you can get started with our WP hosting services, plus a FREE .pk domain! This incredible offer includes everything you need to launch and grow your website, from lightning-fast speeds and robust security to expert support and a free domain that targets the Pakistani audience."
                para2="With our WP hosting and free .pk domain, you can establish a strong online presence in Pakistan and reach a local audience. Our hosting infrastructure is optimized for WordPress, ensuring optimal performance, scalability, and security for your website. Plus, our expert support team is available 24/7 to assist you with any queries or issues. Don’t miss out on this amazing deal! Sign up now and get your website up and running with a professional .pk domain and top-notch WP hosting at an unbeatable price."
                month="2.85$ / Month"
                year="For 1 year" />

            <ContactForm />
            <Clients />
            <Quote />
            <Footer />
            <Copywrite />


        </>
    )
}

export default Hosting


const Host = ({ Header, year, month, para1, para2 }) => {
    return (
        <>

            <div className="bcontainer tw-py-10 ">
                <div className="tw-text-center">
                    <h1 className='tw-text-2xl md:tw-text-3xl tw-text-GlobalColor05b8906 lg:tw-text-4xl tw-font-bold tw-py-4'>
                        {Header}
                    </h1>
                    <p className='tw-text-base md:tw-text-lg lg:tw-text-xl tw-px-4 lg:tw-px-12 tw-text-left md:tw-text-center'>
                        {para1}
                    </p>
                    <p className='tw-text-base md:tw-text-lg lg:tw-text-xl tw-px-4 lg:tw-px-12 tw-text-left md:tw-text-center tw-mt-4'>
                        {para2}
                    </p>
                    <div className='tw-mt-6'>
                        <Link className='tw-btn tw-btn-outline tw-btn-success tw-text-lg md:tw-text-xl lg:tw-text-2xl'>
                            {month}
                        </Link>
                        <p className='tw-text-base md:tw-text-lg lg:tw-text-xl tw-mt-2'>
                            {year}
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}