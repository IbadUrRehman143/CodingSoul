import React from 'react'
import Nav from '../Nav/Nav'
import Navbar from '../Navbar/Navbar'
import Slider from "react-slick";
import image1 from "../../assets/m.webp"
import image2 from "../../assets/X10.webp"
import image3 from "../../assets/X9.webp"
import image4 from "../../assets/X12.png"
import image5 from "../../assets/mm.webp"
import w1 from "../../assets/w1.webp"
import w2 from "../../assets/w2.webp"
import w3 from "../../assets/w3.webp"
import w4 from "../../assets/w4.webp"
import ContactForm from '../ContactForm/ContactForm';
import Clients from '../Clients/Clients';
import Quote from '../Quote/Quote';
import Footer from '../Footer/Footer';
import Copywrite from '../Copywrite/Copywrite';
import CodingTwo from '../CodingTwo/CodingTwo';
import imag11 from "../../assets/X26.png";
import imag13 from "../../assets/X28.jpg";
import imag19 from "../../assets/X23.png";
import imag12 from "../../assets/X13.webp";
const AppD = () => {
    return (
        <>
            <div className="">
                <Nav />
                <Navbar />
                <First para="Transform your ideas into stunning apps with our expert app development and launching services, delivering seamless user experiences and successful market debuts." headings="Expert APP Development & Launching Services" image={image1} />
                <Trusted para1="Trusted by 100+ International Companies" />
                <CodingTwo title="We can help you via our Coding Services" perra="We can help you bring your vision to life with our expert coding services. Our team of skilled developers can architect, design, and build custom software solutions that meet your specific needs. From backend development to frontend design, we’ve got you covered. Our coding services ensure scalability, security, and efficiency, giving you a competitive edge. Let us help you harness the power of code to drive your business forward."
            one={imag11}
            two={imag13}
            three={imag19}
            four={imag12}
            />
                <Press
                    wordpress={image2}
                    para3="Our expert Android app developers have over 5 years of experience in crafting custom Android apps, with a deep understanding of Java, Kotlin, and Android SDK. We deliver high-performance Android apps that meet our clients’ specific business needs, with expertise in Android UI/UX design, app security, and optimization."
                    para4="With a quality portfolio of successful Android app projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Android app development needs."
                    className="tw-bg-GlobalColorprimary tw-rounded-tl-full tw-rounded-br-full "
                />
                <Press
                    wordpress={image3}
                    para3="Our expert iOS app developers have over 5 years of experience in crafting custom iOS apps, with a deep understanding of Swift, Objective-C, and iOS SDK. We deliver high-performance iOS apps that meet our clients’ specific business needs, with expertise in iOS UI/UX design, app security, and optimization."
                    para4="With a quality portfolio of successful iOS app projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your iOS app development needs."
                />
                <Press
                    wordpress={image4}
                    para3="Our expert Windows app developers have over 5 years of experience in crafting custom Windows apps, with a deep understanding of C#, .NET, and Windows SDK. We deliver high-performance Windows apps that meet our clients’ specific business needs, with expertise in Windows UI/UX design, app security, and optimization."
                    para4="With a quality portfolio of successful Windows app projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Windows app development needs."
                    className="tw-bg-GlobalColorc85df0c tw-rounded-tl-full tw-rounded-br-full "
                />
                <Press
                    wordpress={image5}
                    para3="Our expert macOS app developers have over 5 years of experience in crafting custom macOS apps, with a deep understanding of Swift, Objective-C, and macOS SDK. We deliver high-performance macOS apps that meet our clients’ specific business needs, with expertise in macOS UI/UX design, app security, and optimization."
                    para4="With a quality portfolio of successful macOS app projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your macOS app development needs."

                />

                <ContactForm />
                <Clients />
                <Quote />
                <Footer />
                <Copywrite />
            </div>


        </>
    )
}

export default AppD


const First = ({ para, headings, image }) => {
    return (
        <div className="bcontainer tw-mx-auto tw-py-8">
            <div className="row tw-flex tw-flex-wrap tw-items-center">
                <div className="col-lg-6 tw-flex tw-flex-col">
                    <h1 className='tw-text-GlobalColor05b8906 tw-font-bold tw-text-2xl tw-text-center md:tw-text-left lg:tw-text-4xl tw-py-4'>{headings}</h1>
                    <p className='tw-py-4 tw-text-lg lg:tw-text-xl tw-text-center md:tw-text-left '>{para}</p>
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
            <div className="tw-bg-GlobalColorc85df0c tw-rounded-tl-full tw-rounded-br-full ">
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



function AutoPlay({ w11, w12, w13, w14 }) {
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


const Press = ({ wordpress, para3, para4, className }) => {
    return (
        <>
            <div className={`classes ${className}`}>
                <div className={`bcontainer  tw-mx-auto tw-flex tw-flex-col tw-items-center tw-py-8`}>
                    <div className="tw-flex tw-justify-center">
                        <img src={wordpress} className="lg:tw-w-96 tw-w-52  tw-items-center" alt="" />
                    </div>
                    <p className="lg:tw-text-xl tw-text-FSm  tw-text-center tw-py-5">{para3}</p>
                    <p className="lg:tw-text-xl tw-text-FSm  tw-text-center tw-py-5">{para4}</p>
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
