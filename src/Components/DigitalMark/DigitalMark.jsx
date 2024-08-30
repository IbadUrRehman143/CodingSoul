import React from 'react'
import Nav from '../Nav/Nav'
import Navbar from '../Navbar/Navbar'
import Slider from "react-slick";
import image1 from "../../assets/dm.webp"
import image9 from "../../assets/cw.webp"
import image2 from "../../assets/em.webp"
import image5 from "../../assets/X14.png"
import image6 from "../../assets/ppc.webp"
import image7 from "../../assets/ss.webp"
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
import imag11 from "../../assets/ppc.webp";
import imag13 from "../../assets/seo.webp";
import imag19 from "../../assets/em.webp";
import imag12 from "../../assets/cw.webp";
const DigitalMark = () => {
    return (
        <div className=''>

            <Nav />
            <Navbar />
            <First para="Reach new heights with our expert digital marketing services, strategically crafted to showcase your brand, drive website traffic, and convert leads into loyal customers.." headings="Expert Digital Marketing Services to Present Your Business" image={image1} />
            <Trusted para1="Trusted by 100+ International Companies" />
            <CodingTwo title="What D.M can do for your business" perra="Our digital marketing services can increase your online visibility, boost brand awareness, and drive website traffic, leading to more leads, sales, and revenue. By leveraging the power of DM, we can help you outshine the competition, expand your customer base, and achieve long-term business success"
            one={imag11}
            two={imag13}
            three={imag19}
            four={imag12}
            />
            <PlatForms />
            <Press
                wordpress={image7}
                para3="Our expert SEO specialists have over 5 years of experience in crafting effective search engine optimization strategies that drive real results. With a deep understanding of Google’s algorithms, keyword research, and on-page optimization techniques, we deliver high-impact solutions that meet our clients’ specific business needs. From technical SEO to link building, our team has expertise in a wide range of SEO domains.."
                para4="With a quality record of successful SEO projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your SEO needs. We stay up-to-date with the latest advancements in SEO, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success.."

            />
            <Press
                wordpress={image6}
                para3="Our expert PPC specialists have over 5 years of experience in creating and managing high-performing pay-per-click campaigns that drive real conversions. With a deep understanding of Google Ads, Facebook Ads, and other PPC platforms, we deliver high-ROI solutions that meet our clients’ specific business needs. From keyword research to ad copy optimization, our team has expertise in a wide range of PPC domains."
                para4="With a quality record of successful Java projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your Java needs. We stay up-to-date with the latest advancements in Java, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success."
                className="tw-bg-GlobalColorprimary tw-rounded-tl-full tw-rounded-br-full "
            />
            <Press
                wordpress={image9}
                para3="Our expert Content Marketers have over 5 years of experience in crafting compelling content strategies that drive engagement, conversions, and growth. With a deep understanding of content creation, distribution, and measurement, we deliver high-impact solutions that meet our clients’ specific business needs. From blog posts to video scripts, our team has expertise in a wide range of content formats and channels."
                para4="With a quality record of successful content marketing projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your content marketing needs. We stay up-to-date with the latest advancements in content marketing, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success.."

            />
            <Press
                wordpress={image2}
                para3="Our expert Email Marketers have over 5 years of experience in building and executing effective email marketing campaigns that drive conversions, nurture leads, and build brand loyalty. With a deep understanding of email marketing automation, segmentation, and personalization, we deliver high-performance solutions that meet our clients’ specific business needs. From newsletter creation to email funnel development, our team has expertise in a wide range of email marketing domains.."
                para4=" With a quality record of successful email marketing projects across various industries, we bring a personalized approach to each project, ensuring timely delivery and ongoing support. Our expertise and experience make us the perfect partner for your email marketing needs. We stay up-to-date with the latest advancements in email marketing, ensuring our solutions are always innovative, efficient, and effective, helping startups like yours achieve rapid growth and success.."
                className=" -tw-mb-6"

            />
            <ContactForm />
            <Clients />
            <Quote />
            <Footer />
            <Copywrite />
        </div>
    )
}

export default DigitalMark



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
                    <p className="lg:tw-text-xl tw-text-FSm  md:tw-text-center tw-text-left tw-ml-4 tw-py-5">{para3}</p>
                    <p className="lg:tw-text-xl tw-text-FSm  md:tw-text-center tw-text-left tw-ml-4 tw-py-5">{para4}</p>
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

