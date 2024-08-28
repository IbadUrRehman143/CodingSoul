import React from 'react';
import image1 from "../../assets/gf.jpg";
import { IoManOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

const Choose = () => {
    return (
        <>
            <div className="bcontainer tw-mt-10">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h1 className='tw-text-GlobalColor05b8906 tw-text-2xl tw-md:text-3xl tw-font-bold'>Choose The Best IT Service Company</h1>
                        <p className='tw-text-lg tw-py-4'>We are passionate ​about translating ​innovative ideas into ​digital reality. ​With our headquarters ​nestled in ​the vibrant tech ​landscape of ​Pakistan, we extend ​our expertise ​worldwide, collaborating with ​multinational companies ​to build cutting-edge software solutions.</p>
                        <div className='tw-flex tw-flex-wrap tw-text-center tw-gap-4'>
                            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-font-bold tw-text-xl tw-py-4">
                                <IoManOutline className="tw-w-12 tw-h-12" />
                                <span>10,000+</span>
                                <span>Customers Globally</span>
                            </div>
                            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-font-bold tw-text-xl tw-py-4">
                                <FaRegStar className='tw-w-12 tw-h-12' />
                                <span>10,000+</span>
                                <span>Awards Won</span>
                            </div>
                            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-font-bold tw-text-xl tw-py-4">
                                <TfiWorld className="tw-w-12 tw-h-12" />
                                <span>10,000+</span>
                                <span>Global Partners</span>
                            </div>
                            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-font-bold tw-text-xl tw-py-4">
                                <MdOutlineDateRange className="tw-w-12 tw-h-12" />
                                <span>10+ Years</span>
                                <span>In Business</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 tw-flex tw-justify-center tw-items-center">
                        <img src={image1} alt="IT Service" className="tw-w-full tw-h-auto tw-rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Choose;
