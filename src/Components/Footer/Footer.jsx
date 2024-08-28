import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../assets/lok.webp"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { FaPhone, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaArrowsTurnRight } from "react-icons/fa6";
const Footer = () => {
  const iconBg = 'tw-text-GlobalColorc85df0c tw-border tw-bg-white hover:tw-bg-GlobalColortext tw-box-content tw-py-2 tw-px-2 tw-rounded-full tw-shadow-lg tw-shadow-black/30 tw-cursor-pointer hover:tw-shadow-inner hover:tw-shadow-black/30 tw-duration-500 hover tw-text-Sm';

  return (
    <div className='tw-bg-neutral tw-rounded-tl-full tw-rounded-br-full '>
      <div className="container">
        <footer className="tw-footer   tw-text-neutral-content  tw-grid-rows-2 tw-p-10">

          <nav className='tw-bg-GlobalColorc85df0c tw-rounded-2xl  tw-p-5 tw-text-black' >
            <img src={img1} alt="" className='tw-bg-GlobalColorc85df0c tw-w-36' />
            <h1>Coding Souls</h1>
            <p>Your Trusted Coding Partner Since 2020</p>
          </nav>
          <nav>
            <div className="tw-flex tw-gap-3 tw-items-center tw-justify-center">
              <Link to="https://www.facebook.com/codingsouls07" className={iconBg}><FaFacebook /></Link>
              <Link to="https://www.youtube.com/channel/UCsN4I23a45w2fUAUfM6orHg" className={iconBg}><FaYoutube /></Link>
              <Link to="https://www.instagram.com/coding_souls/" className={iconBg}><FaInstagram /></Link>
              <Link to="https://www.linkedin.com/in/maaz-ur-rahman1/?originalSubdomain=pk" className={iconBg}><FaLinkedinIn /></Link>
              <Link to="https://www.pinterest.com/codingsouls/" className={iconBg}><FaPinterest /></Link> <br />

            </div>
              <div className=" tw-flex tw-flex-col tw-mt-3 tw-gap-3 ">
                               <div className='tw-flex tw-gap-5'>
                                  <span className={`${iconBg}`}><FaPhone /></span>
                                  <span className=''>+92 347 9899980</span>
                               </div>
                                <div className='tw-flex tw-gap-5'>
                                  <span className={` ${iconBg}`}><MdEmail /></span>
                                  <span className="">info@codingsouls.com</span>
                                </div>
                            </div>
          </nav>
          <nav>
            <h6 className="tw-footer-title tw-text-white">Company</h6>
            <Link className="tw-link tw-no-underline tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-link-hover"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>About</Link>
            <Link className="tw-link tw-no-underline tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-link-hover"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Why CodingSouls</Link>
            <Link className="tw-link tw-no-underline tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-link-hover"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Portfolio</Link>
            <Link className="tw-link tw-no-underline tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-link-hover"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Contact</Link>
            <Link className="tw-link tw-no-underline tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-link-hover"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Blog</Link>
          </nav>
          <nav>
            <h6 className="tw-footer-title tw-text-white">App Development</h6>
            <Link className="tw-link tw-no-underline tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-link-hover"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Android App </Link>
            <Link className="tw-link tw-no-underline tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-link-hover"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>iOS App</Link>
            <Link className="tw-link tw-no-underline tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-link-hover"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Windows App</Link>
            <Link className="tw-link tw-no-underline tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-link-hover"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>MacOS App</Link>
          </nav>
          <nav>
            <h6 className="tw-footer-title tw-text-white">Website Design</h6>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Wordpress</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>WIX</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Shopify</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>SquareSpace</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Magento</Link>
          </nav>
          <nav>
            <h6 className="tw-footer-title tw-text-white">Custom Website</h6>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>PHP</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>JAVA</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>NodeJS</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>React Native</Link>
          </nav>
          <nav>
            <h6 className="tw-footer-title tw-text-white">Coding Services</h6>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Flutter</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Java</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>React Native</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Laravel</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Hybrid</Link>
          </nav>
          <nav>
            <h6 className="tw-footer-title tw-text-white">Hosting</h6>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Wp Hosting</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>.pk + Hostiong</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>.com + Hosting</Link>
          </nav>
          <nav>
            <h6 className="tw-footer-title tw-text-white">Digital Marketing</h6>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>PPC</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>SEO</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>E-mail Marketing</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Content Marketing</Link>
          </nav>
          <nav>
            <h6 className="tw-footer-title tw-text-white">Trending Solution</h6>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>AngularJs</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Artificail Intelligence</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Machine Learning</Link>
            <Link className="tw-link tw-link-hover tw-text-white tw-text-lg hover:tw-text-GlobalColorc85df0c tw-no-underline"><span className="tw-inline-block tw-pe-3 tw-translate-y-0.5"><FaArrowsTurnRight /></span>Python</Link>
          </nav>

        </footer>
      </div>


    </div>
  )
}

export default Footer