import React from 'react';
import imag1 from "../../assets/X26.png";
import imag3 from "../../assets/X28.jpg";
import imag9 from "../../assets/X23.png";
import imag12 from "../../assets/X13.webp";
import imag16 from "../../assets/X14.png";
import imag17 from "../../assets/12.png";

// CodingText Component
const CodingText = () => {
    return (
        <div className="col-lg-6">
            <h1 className='tw-py-4 tw-text-2xl lg:tw-text-5xl tw-ml-4 md:tw-ml-0 tw-font-bold'>
                We can help you via our Coding Services
            </h1>
            <p className='tw-py-4 tw-text-base tw-ml-6 tw-text-wrap lg:tw-text-lg'>
                We can help you bring your vision to life with our expert coding services. Our team of skilled developers can architect, design, and build custom software solutions that meet your specific needs. From backend development to frontend design, we’ve got you covered. Our coding services ensure scalability, security, and efficiency, giving you a competitive edge. Let us help you harness the power of code to drive your business forward.
            </p>
        </div>
    );
}

// CodingGrid Component
const CodingGrid = () => {
    return (
        <div className="col-lg-6 tw-mt-8 lg:tw-mt-0">
            <div className='tw-grid tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4'>
                <Name image1={imag1} Name1="React Js" />
                <Name image1={imag3} Name1="Laravel" />
                <Name image1={imag9} Name1="NodeJs" />
                <Name image1={imag12} Name1="Flutter" />
                <Name image1={imag16} Name1="Hybrid" />
                <Name image1={imag17} Name1="Java" />
            </div>
        </div>
    );
}

// Name Component (used inside CodingGrid)
const Name = ({ image1, Name1 }) => {
    return (
        <div className='tw-flex tw-flex-col tw-items-center'>
            <img src={image1} alt={Name1} className='tw-w-20 lg:tw-w-24 tw-h-20 lg:tw-h-24 tw-bg-cover tw-bg-center' />
            <p className='tw-text-center tw-mt-2 tw-text-sm lg:tw-text-base'>{Name1}</p>
        </div>
    );
}

// Main Coding Component
const Coding = () => {
    return (
        <div className="bcontainer tw-py-6">
            <div className="row tw-flex tw-flex-wrap tw-items-center">
                <CodingText />
                <CodingGrid />
            </div>
        </div>
    );
}

export default Coding;
