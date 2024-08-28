import React from 'react'
import Nav from '../Nav/Nav'
import Navbar from '../Navbar/Navbar'
import Slider from "react-slick";
import image1 from "../../assets/tag.webp"
import image2 from "../../assets/pp.webp"
import image3 from "../../assets/n.webp"
import image4 from "../../assets/r.webp"
import image5 from "../../assets/j.webp"
import w1 from "../../assets/w1.webp"
import w2 from "../../assets/w2.webp"
import w3 from "../../assets/w3.webp"
import w4 from "../../assets/w4.webp"
import ContactForm from '../ContactForm/ContactForm';
import Clients from '../Clients/Clients';
import Quote from '../Quote/Quote';
import Footer from '../Footer/Footer';
import Copywrite from '../Copywrite/Copywrite';
import Coding from '../Coding/Coding';
const Custom = () => {
    return (
        <>
            <Nav />
            <Navbar />
            <First para="Our custom website development services craft unique, user-friendly, and responsive online experiences that capture your brand’s essence, drive engagement, and convert visitors into loyal customers." headings="Custom Website development Services" image={image1} />
            <Trusted para1="Trusted by 100+ International Companies" />
            
            
            <Press
                wordpress={image2}
                para3="Our expert PHP developers have over 5 years of experience in building robust, scalable, and secure web applications using PHP frameworks like Laravel, CodeIgniter, and CakePHP. With a deep understanding of PHP’s ecosystem, tools, and best practices, we deliver high-performance solutions that meet our clients’ specific business needs. From web development to enterprise-level applications, our team has expertise in a wide range of PHP domains."
                para4="With a quality record of successful PHP projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your PHP needs. We stay up-to-date with the latest advancements in PHP, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success."
                className="tw-bg-GlobalColorprimary tw-rounded-tl-full tw-rounded-br-full "
            />
            <Press
            wordpress={image3}
            para3="Our expert Node JS developers have over 5 years of experience in building scalable, fast, and secure Node JS applications. With a deep understanding of Node JS frameworks, tools, and best practices, we deliver high-performance solutions that meet our clients’ specific business needs. From real-time data analytics to cloud-native architectures, our team has expertise in a wide range of Node JS domains."
            para4="With a quality record of successful Node JS projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Node JS needs. We stay up-to-date with the latest advancements in Node JS, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success."
            />
            <Press
            wordpress={image4}
            para3="Our expert React Native developers have over 5 years of experience in building fast, scalable, and seamless mobile applications for iOS and Android. With a deep understanding of React Native frameworks, tools, and best practices, we deliver high-performance solutions that meet our clients’ specific business needs. From Expo to Redux, our team has expertise in a wide range of React Native domains."
            para4="With a quality record of successful React Native projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your React Native needs. We stay up-to-date with the latest advancements in React Native, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success.Free Consultation"
            className="tw-bg-GlobalColorc85df0c tw-rounded-tl-full tw-rounded-br-full "
            />
            <Press 
            wordpress={image5}
            para3="Our expert Java developers have over 5 years of experience in building robust, scalable, and secure Java applications for enterprise and startup clients. With a deep understanding of Java frameworks, tools, and best practices, we deliver high-performance solutions that meet our clients’ specific business needs. From Spring Boot to Hibernate, our team has expertise in a wide range of Java domains."
            para4="With a quality record of successful Java projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Java needs. We stay up-to-date with the latest advancements in Java, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success."

            />

            <ContactForm/>
            <Clients/>
            <Quote/>
            <Footer/>
            <Copywrite/>
        </>
    )
}

export default Custom

const First = ({ para, headings, image }) => {
    return (
        <div className="bcontainer tw-mx-auto tw-py-8">
            <div className="row tw-flex tw-flex-wrap tw-items-center">
                <div className="col-lg-6 tw-flex tw-flex-col">
                    <h1 className='tw-text-GlobalColor05b8906 tw-font-bold tw-text-2xl tw-text-center lg:tw-text-4xl tw-py-4'>{headings}</h1>
                    <p className='tw-py-4 tw-text-lg lg:tw-text-xl tw-text-center '>{para}</p>
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
                        <img src={wordpress} className="lg:tw-w-96 tw-w-72  tw-items-center" alt="" />
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


