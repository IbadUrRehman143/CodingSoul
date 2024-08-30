import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { FaPhone, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Nav = () => {
    const iconBg = 'tw-text-GlobalColorc85df0c   tw-bg-white hover:tw-bg-GlobalColortext tw-box-content tw-py-2 tw-px-2 tw-rounded-full tw-shadow-lg tw-shadow-black/30 tw-cursor-pointer hover:tw-shadow-inner hover:tw-shadow-black/30 tw-duration-500 hover tw-text-Sm';

    return (
        <>
            <div className="tw-bg-GlobalColor05b8906   tw-py-3 tw-align-middle tw-text-white">
                <div className="container">
                    <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between">
                        <div className="tw-text-center md:tw-text-left tw-mb-3 md:tw-mb-0">
                            <h6 className='md:tw-text-FMd tw-text-xs'>Your Trusted Coding Partner Since 2020</h6>
                        </div>
                        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center md:tw-gap-5 tw-gap-3">
                            <div className="tw-flex tw-gap-3 tw-items-center tw-justify-center md:tw-justify-start">
                                <span className={`tw-hidden xl:tw-inline ${iconBg}`}><FaPhone /></span>
                                <span className='tw-text-FMd tw-hidden xl:tw-inline'>+92 347 9899980</span>
                                <span className={`tw-hidden md:tw-inline ${iconBg}`}><MdEmail /></span>
                                <span className='tw-text-FMd tw-hidden md:tw-inline'>info@codingsouls.com</span>
                            </div>
                            <div className="tw-flex tw-gap-3 tw-items-center animate__animated animate__slideInDown tw-justify-center">
                                <Link to="https://www.facebook.com/codingsouls07" className={iconBg}><FaFacebook /></Link>
                                <Link to="https://www.youtube.com/channel/UCsN4I23a45w2fUAUfM6orHg" className={iconBg}><FaYoutube /></Link>
                                <Link to="https://www.instagram.com/coding_souls/" className={iconBg}><FaInstagram /></Link>
                                <Link to="https://www.linkedin.com/in/maaz-ur-rahman1/?originalSubdomain=pk" className={iconBg}><FaLinkedinIn /></Link>
                                <Link to="https://www.pinterest.com/codingsouls/" className={iconBg}><FaPinterest /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
