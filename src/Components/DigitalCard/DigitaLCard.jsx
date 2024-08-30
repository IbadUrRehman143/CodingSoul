import React from 'react';
import image1 from "../../assets/op-1299-x-1280-px-6.png";
import { Link } from 'react-router-dom';

const Digital = ({ image, heading, buttn }) => {
  return (
    <div className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/4 tw-mb-6">
      <div className="maincontainer">
        <div className="thecard">
          <div className="thefront tw-rounded-3xl tw-cursor-pointer tw-flex tw-flex-col tw-items-center tw-text-center tw-p-10">
            <img src={image} className='tw-w-28' alt={heading} />
            <h3 className='tw-text-lg tw-font-bold tw-py-2'>{heading}</h3>
            <p className='tw-text-base tw-font-semibold'>Best Price Web Designing Services In All over the World</p>
            <Link to="#" className='bttn btn tw-py-2 tw-mt-4 tw-px-6 tw-bg-info tw-text-white tw-rounded'>{buttn}</Link>
          </div>
          <div className="theback tw-rounded-3xl tw-cursor-pointer tw-flex tw-flex-col tw-items-center tw-text-center tw-p-10">
            <img src={image} className='tw-w-28' alt={heading} />
            <h3 className='tw-text-lg tw-font-bold tw-py-2'>{heading}</h3>
            <p className='tw-text-base tw-font-semibold'>Best Price Web Designing Services In All over the World</p>
            <Link to="#" className='bttn btn tw-py-2 tw-mt-4 tw-px-6 tw-bg-info tw-text-white tw-rounded'>{buttn}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DigitaLCard = () => {
  return (
    <div className="container tw-mt-16">
      <h1 className='tw-text-2xl lg:tw-text-3xl tw-font-bold tw-text-center tw-mb-6 tw-text-GlobalColor05b8906'>Express Your Digital Presence</h1>
      <p className='tw-text-lg tw-font-medium tw-text-center tw-mb-12'>Express Your Digital Presence with CodingSouls, transforming your online identity into a powerful business tool.</p>
      <div className='tw-flex tw-flex-wrap tw-justify-center tw-gap-4'>
        <Digital image={image1} heading="Website Designing" buttn="Learn More" />
        <Digital image={image1} heading="Custom Web Design" buttn="Learn More" />
        <Digital image={image1} heading="Custom App Development" buttn="Learn More" />
        <Digital image={image1} heading="Custom Coding Services" buttn="Learn More" />
        <Digital image={image1} heading="Graphic Designing" buttn="Learn More" />
        <Digital image={image1} heading="Digital Marketing Media" buttn="Learn More" />
        <Digital image={image1} heading="Custom API Integrations" buttn="Learn More" />
        <Digital image={image1} heading="Hire Expert Developers" buttn="Learn More" />
      </div>
    </div>
  );
};

export default DigitaLCard;
