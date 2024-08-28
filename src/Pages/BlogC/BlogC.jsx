import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Navbar from '../../Components/Navbar/Navbar';
import image12 from "../../assets/lab.webp";
import image13 from "../../assets/mb.webp";
import image14 from "../../assets/lh.webp";

import { Link } from 'react-router-dom';
import Quote from '../../Components/Quote/Quote';
import Footer from '../../Components/Footer/Footer';
import Copywrite from '../../Components/Copywrite/Copywrite';

const BlogC = () => {
  return (
    <>
      <Nav />
      <Navbar />
      <div className="bcontainer">
        <h1 className='tw-text-5xl tw-py-8 tw-ml-2 '>APP Development</h1>
        <div className="tw-flex tw-flex-wrap tw-justify-between">
          <Cards image1={image12} head="How much Coding is Required in ITC Courses" paragra="Since the students goal is to attain quality education and a chance to secure a job in today’s technological world, […]" />
          <Cards image1={image13} head="Marketplace App Development: Your Guide to Mobile App Success" paragra="Marketplace apps: Nowadays, applications play the role of permanent companions in the life of every consumer and business. They unlock […]" />
          <Cards image1={image14} head="The Secret Ingredient to Successful App Development: Condiments" paragra="To the casual observer, apps are simple, useful items installed by millions of users around the globe Every year thousands […]" />
        </div>
      </div>
      <Quote />
      <Footer />
      <Copywrite />
    </>
  );
};

export default BlogC;

const Cards = ({ image1, paragra, head }) => {
  return (
    <div className="tw-w-full lg:tw-w-80">
      <div className="card tw-shadow-lg tw-rounded-lg tw-overflow-hidden">
        <div
          style={{ backgroundImage: `url('${image1}')` }}
          className="card-img-top tw-bg-cover tw-h-48 tw-transition-transform tw-duration-500 hover:tw-scale-105 tw-rounded-t-lg"
          alt="..."
        ></div>
        <div className="card-body tw-p-4">
          <h5 className="card-title tw-font-semibold tw-text-xl">
            <Link to="" className="tw-block tw-text-blue-500 hover:tw-underline">
              {head}
            </Link>
            <Link to="" className="tw-text-sm tw-text-gray-600 hover:tw-underline">
              Leave a comment / App Development / muruhman2020
            </Link>
          </h5>
          <p className="card-text tw-mt-3 tw-text-gray-700">{paragra}</p>
          <Link to="" className="tw-text-blue-500 hover:tw-underline">Read more</Link>
        </div>
      </div>
    </div>
  );
};
