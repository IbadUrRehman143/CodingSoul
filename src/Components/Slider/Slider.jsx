import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import spa from "../../assets/spa.png";
import can from "../../assets/can.png";
import uni from "../../assets/uni.png";
import { BiDislike, BiLike } from "react-icons/bi";

const SliderCard = ({name, image, city, peragraph}) => {
    return (
        <div className="tw-px-9">
            <div className='tw-flex tw-gap-3 tw-items-start tw-bg-white tw-rounded-xl  tw-p-5'>
                <h1 className='tw-border tw-bg-GlobalColord4b0483 tw-rounded-tl-full tw-rounded-br-full  tw-text-xl tw-px-1 tw-w-12 tw-rounded-full tw-text-center'>M</h1>
                <div className='tw-flex tw-flex-col'>
                    <p className='tw-text-xs tw-font-bold'>{name}</p>
                    <div className='tw-flex tw-items-center tw-gap-1'>
                        <img src={image} className='tw-w-6' alt="" />
                        <p className='tw-text-xs'>{city}</p>
                    </div>
                    <span className='tw-text-black tw-text-xs'>✬✬✬✬✬ | 5 months </span>
                    <p className='tw-text-xs'>
                        {peragraph}<a href="">See less</a>
                    </p>
                    <div className='tw-flex tw-gap-1'>Helpful? <BiLike className='tw-text-sm' /><span>Yes</span> <BiDislike className='tw-text-sm' /><span>No </span></div>
                </div>
            </div>
        </div>
    )
}

const SliderCards = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024, // screens below 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768, // screens below 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            }
        ]
    };

    return (
        <>
            <div className="tw-bg-GlobalColorc85df0c tw-py-8">
                <div className="container">
                    <div>
                        <h1 className='md:tw-text-Fxxlg tw-text-Fxlg tw-font-bold tw-text-center tw-py-7'>
                            Trusted by 100+ International Companies
                        </h1>
                        <Slider {...settings}>
                            <SliderCard name="ibad" city="Swabi" image={spa} peragraph="Maaz Ur Rahman was commended for his competence in delivering a website development project, though the feedback suggests there is room for improvement, particularly in attention to detail. Despite these suggestions for improvement, the overall project was deemed satisfactory by the client. "/>
                            <SliderCard name="pixeei" city="spain" image={uni} peragraph="Maaz Ur Rahman was commended for his competence in delivering a website development project, though the feedback suggests there is room for improvement, particularly in attention to detail. Despite these suggestions for improvement, the overall project was deemed satisfactory by the client. " />
                            <SliderCard name="mixica" city="Canada" image={uni} peragraph="Maaz Ur Rahman was commended for his competence in delivering a website development project, though the feedback suggests there is room for improvement, particularly in attention to detail. Despite these suggestions for improvement, the overall project was deemed satisfactory by the client. " />
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SliderCards;
