import React from 'react'
import image1 from "../assets/tc1.webp"
import image2 from "../assets/p1.webp"
import image3 from "../assets/wix.webp"
import image4 from "../assets/sho.webp"
import image5 from "../assets/man.webp"
import image6 from "../assets/squ.webp"
import Slider from "react-slick";
import w1 from "../assets/w1.webp"
import w2 from "../assets/w2.webp"
import w3 from "../assets/w3.webp"
import w4 from "../assets/w4.webp"
import Quote from './Quote/Quote'
import Footer from './Footer/Footer'
import Copywrite from './Copywrite/Copywrite'
import ContactForm from './ContactForm/ContactForm'
import Clients from './Clients/Clients'
import Development from './Development/Development'
import Nav from './Nav/Nav'
import Navbar from './Navbar/Navbar'




const First = ({ para, headings, image }) => {
    return (
        <div className="bcontainer tw-mx-auto tw-py-8">
            <div className="row tw-flex tw-flex-wrap tw-items-center">
                <div className="col-lg-6 tw-flex tw-flex-col">
                    <h1 className='tw-text-GlobalColor05b8906 tw-font-bold tw-text-2xl tw-text-center md:tw-text-left lg:tw-text-4xl tw-py-4'>{headings}</h1>
                    <p className='tw-py-4 tw-text-lg lg:tw-text-xl md:tw-text-left tw-text-center '>{para}</p>
                    <div className='tw-flex tw-justify-center tw-space-x-3 tw-mt-6'>
                        <button className='btn btn-outline tw-border-t-cyan-400 tw-border-r-GlobalColoraccent tw-border-b-GlobalColor05b8906 tw-border-l-cyan-800 tw-text-lg lg:tw-text-xl hover:tw-bg-GlobalColorc85df0c'>
                            Free Consultation
                        </button>
                        <button className='btn btn-outline tw-border-t-cyan-400 tw-border-r-GlobalColoraccent tw-border-b-GlobalColor05b8906 tw-border-l-cyan-800 tw-text-lg lg:tw-text-xl hover:tw-bg-GlobalColorc85df0c'>
                            Portfolio
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 tw-mt-8 lg:tw-mt-0">
                    <img src={image} className='tw-w-full lg:tw-w-5/6 tw-ml-0 lg:tw-ml-8' alt="" />
                </div>
            </div>
        </div>
    );
}


const Trusted = ({ para1 }) => {
    return (
        <>
            <div className="tw-bg-GlobalColorc85df0c">
                <div className="bcontainer tw-py-10">
                    <h1 className='tw-text-black tw-text-3xl lg:tw-text-4xl tw-text-center tw-px-4 lg:tw-px-10 tw-py-8'>
                        {para1}
                    </h1>
                    <div className="tw-mt-8">
                        <AutoPlay w11={w1} w12={w2} w13={w3} w14={w4} />
                    </div>
                </div>
            </div>
        </>
    );
}



function AutoPlay({w11,w12,w13,w14}) {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <h3><img src={w11} alt="" /></h3>
          </div>
          <div>
            <h3><img src={w12} alt="" /></h3>
          </div>
          <div>
            <h3><img src={w13} alt="" /></h3>
          </div>
          <div>
            <h3><img src={w14} alt="" /></h3>
          </div>
          
        </Slider>
      </div>
    );
  }


const  Press =({wordpress,para3,para4, className})=>{
    return(
        <>
    <div className={`classes ${className}`}>
           <div className={`bcontainer  tw-mx-auto tw-flex tw-flex-col tw-items-center tw-py-8`}>
        <div className="tw-flex tw-justify-center">
            <img src={wordpress} className="lg:tw-w-96 tw-w-72  tw-items-center" alt="" />
        </div>
        <p className="lg:tw-text-xl tw-text-FSm  tw-text-left tw-text-wrap tw-ml-2 tw-py-5">{para3}</p>
        <p className="lg:tw-text-xl tw-text-FSm  tw-text-left tw-text-wrap tw-ml-2 tw-py-5">{para4}</p>
        <div className="tw-space-x-3 tw-flex tw-justify-center">
            <button className="btn btn-outline tw-border-t-cyan-400 tw-border-r-GlobalColoraccent tw-border-b-GlobalColor05b8906 tw-border-l-cyan-800 tw-text-xl md:tw-text-2xl hover:tw-bg-GlobalColorc85df0c tw-mt-6">
                Free Consultation
            </button>
            <button className="btn btn-outline tw-border-t-cyan-400 tw-border-r-GlobalColoraccent tw-border-b-GlobalColor05b8906 tw-border-l-cyan-800 tw-text-xl md:tw-text-2xl hover:tw-bg-GlobalColorc85df0c tw-mt-6">
                Portfolio
            </button>
        </div>
    </div>
    
      </div>
        
        </>
    )
}


const Website = () => {
    return (
        <>
            <Nav />
            <Navbar />
            <First para="Coding Souls crafts stunning, user-friendly websites that propel global businesses forward with cutting-edge design, development, and digital solutions"
                headings="Expert Website Design & Development For WorldWide"
                image={image1}
                />
                <Trusted para1="Trusted by 100+ International Companies" 
                />
                <Press wordpress={image2} para3="Our expert WordPress developers has over 5 years of experience in crafting custom WordPress solutions, themes, and plugins. With a deep understanding of WordPress core, themes, plugins, and customization, we deliver high-performance websites that meet our clients’ specific business needs." 
                para4="With a quality reviews of successful WordPress projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your WordPress needs."
                />
                <Press  wordpress={image3} className="tw-bg-GlobalColorc85df0c  tw-rounded-br-full " para="Our expert Wix developers have over 5 years of experience in crafting custom Wix solutions, templates, and applications. With a deep understanding of Wix ADI, Wix Editor, and Wix Code, we deliver high-performance websites that meet our clients’ specific business needs." 
                para4="With a quality portfolio of successful Wix projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Wix needs."
                />
                <Press wordpress={image4} para3="Our expert Shopify developers have over 5 years of experience in crafting custom Shopify solutions, themes, and apps. With a deep understanding of Shopify Liquid, Shopify Plus, and Shopify API, we deliver high-performance ecommerce websites that meet our clients’ specific business needs."
                para4="With a quality portfolio of successful Shopify projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Shopify needs."
                />
                <Press wordpress={image5} className="tw-bg-GlobalColorc85df0c  tw-rounded-br-full " para3="Our expert Magento developers have over 5 years of experience in crafting custom Magento solutions, themes, and extensions. With a deep understanding of Magento Commerce, Magento Open Source, and Magento Cloud, we deliver high-performance ecommerce websites that meet our clients’ specific business needs."
                para4="With a quality portfolio of successful Magento projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Magento needs."
                />
                <Press wordpress={image6} para3="Our expert Squarespace designers and developers have over 5 years of experience in crafting custom Squarespace solutions, templates, and websites. With a deep understanding of Squarespace UX/UI, Squarespace commerce, and Squarespace development, we deliver high-performance websites that meet our clients’ specific business needs."
                para4="With a quality portfolio of successful Squarespace projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Squarespace needs."
                />
                <ContactForm/>

                <Clients/>
                <Quote/>
                <Footer/>
                <Copywrite/>
        </>
    )
}

export default Website