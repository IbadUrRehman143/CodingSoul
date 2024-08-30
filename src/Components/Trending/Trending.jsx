import React from 'react'
import Nav from '../Nav/Nav'
import Navbar from '../Navbar/Navbar'
import Slider from "react-slick";
import image1 from "../../assets/dm.webp"
import image9 from "../../assets/n.webp"
import image2 from "../../assets/af.webp"
import image5 from "../../assets/X14.png"
import image6 from "../../assets/ml.webp"
import image7 from "../../assets/ang.webp"
import w1 from "../../assets/w1.webp"
import w2 from "../../assets/w2.webp"
import w3 from "../../assets/w3.webp"
import w4 from "../../assets/w4.webp"
import ContactForm from '../ContactForm/ContactForm';
import Clients from '../Clients/Clients';
import Quote from '../Quote/Quote';
import Footer from '../Footer/Footer';
import Copywrite from '../Copywrite/Copywrite';
import PlatForms from '../PlatForms/PlatForms';
import CodingTwo from '../CodingTwo/CodingTwo';
import imag11 from "../../assets/11.png";
import imag13 from "../../assets/af.webp";
import imag19 from "../../assets/ml.webp";
import imag12 from "../../assets/js.webp";
const Trending = () => {
    return (
        <div className=''>

            <Nav />
            <Navbar />
            <First para="We stay ahead of the curve, offering cutting-edge solutions that align with the latest market trends and demands, ensuring our clients remain competitive and ahead of the game" headings="We offer Trending Solution as Per Market Demands" image={image1} />
            <Trusted para1="Trusted by 100+ International Companies" />
            <CodingTwo title="Trending Solutions in 2024" perra="In 2024, we’re at the forefront of coding innovation, delivering trending solutions in AI-powered development, blockchain integration, and cloud-native architecture. Our expertise in cutting-edge technologies enables businesses to stay ahead of the curve and achieve unparalleled success."
            one={imag11}
            two={imag13}
            three={imag19}
            four={imag12}
            />
            <PlatForms />
            <Press
                wordpress={image7}
                para3="Our expert AngularJS developers have over 5 years of experience in crafting custom AngularJS solutions, applications, and modules. With a deep understanding of AngularJS framework, components, services, and customization, we deliver high-performance applications that meet our clients’ specific business needs."
                para4="With a quality portfolio of successful AngularJS projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your AngularJS needs. "

            />
            <Press
                wordpress={image6}
                para3="Our expert machine learning engineers have over 5 years of experience in developing custom machine learning models, algorithms, and solutions. With a deep understanding of machine learning frameworks, tools, and techniques, we deliver high-performance solutions that meet our clients’ specific business needs. From natural language processing to computer vision, our team has expertise in a wide range of machine learning domains.."
                para4="With a quality record of successful machine learning projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your machine learning needs. We stay up-to-date with the latest advancements in machine learning, ensuring our solutions are always innovative, efficient, and effective.."
                className="tw-bg-GlobalColorprimary tw-rounded-tl-full tw-rounded-br-full "
            />
            <Press
                wordpress={image9}
                para3="Our expert Node JS developers have over 5 years of experience in building scalable, fast, and secure Node JS applications. With a deep understanding of Node JS frameworks, tools, and best practices, we deliver high-performance solutions that meet our clients’ specific business needs. From real-time data analytics to cloud-native architectures, our team has expertise in a wide range of Node JS domains."
                para4="With a quality record of successful Node JS projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Node JS needs. We stay up-to-date with the latest advancements in Node JS, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success.Free Consultation."

            />
            <Press
                wordpress={image2}
                para3="Our expert Artificial Intelligence engineers have over 5 years of experience in developing innovative AI solutions, from machine learning to natural language processing. With a deep understanding of AI frameworks, tools, and techniques, we deliver high-performance solutions that meet our clients’ specific business needs. From predictive analytics to computer vision, our team has expertise in a wide range of AI domains."
                para4="With a quality record of successful AI projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your AI needs. We stay up-to-date with the latest advancements in AI, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success."
                className="tw-bg-GlobalColor05b8906 -tw-mb-20  tw-text-white "

            />
            <ContactForm />
            <Clients />
            <Quote />
            <Footer />
            <Copywrite />
        </div>
    )
}

export default Trending



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
            <div className="tw-bg-GlobalColorc85df0c  ">
                <div className="bcontainer tw-py-10">
                    <h1 className='tw-text-black tw-text-xl lg:tw-text-4xl tw-text-center tw-px-4 lg:tw-px-10 tw-py-8'>
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
                    <p className="lg:tw-text-xl tw-text-FSm  md:tw-text-center tw-text-left tw-ml-4  tw-py-5">{para3}</p>
                    <p className="lg:tw-text-xl tw-text-FSm  md:tw-text-center tw-text-left tw-ml-4  tw-py-5">{para4}</p>
                    <div className="tw-space-x-3 tw-flex tw-justify-center">
                        <button className="btn btn-outline tw-border-t-cyan-400 tw-border-r-GlobalColoraccent tw-border-b-GlobalColor05b8906 tw-border-l-cyan-800 tw-text-xl md:tw-text-2xl hover:tw-bg-GlobalColorc85df0c tw-mt-6">
                            Free Consultation
                        </button>

                    </div>
                </div>

            </div>

        </>
    )
}
