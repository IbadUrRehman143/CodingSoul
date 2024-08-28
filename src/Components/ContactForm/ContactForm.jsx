import React from 'react';
import { FaPhone, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const iconBg = 'tw-text-GlobalColorc85df0c tw-border tw-bg-white hover:tw-bg-GlobalColortext tw-box-content tw-text-lg md:tw-text-xl tw-py-2 tw-px-2 tw-rounded-full tw-shadow-lg tw-shadow-black/30 tw-cursor-pointer hover:tw-shadow-inner hover:tw-shadow-black/30 tw-duration-500 hover tw-text-Sm';

  return (
    <>
      <div className="tw-bg-GlobalColorc85df0c tw-rounded-tl-full tw-rounded-br-full  tw-flex tw-justify-center tw-py-16 tw-mt-20">
        <div className="container tw-flex tw-flex-wrap tw-gap-8 tw-justify-center">
          <div className="col-lg-4 tw-border tw-rounded-xl tw-p-8 tw-bg-white">
            <h1 className='tw-text-FMdl tw-font-bold tw-text-center tw-mb-6'>For Quick Response</h1>
            <div className='md:tw-p-24 tw-p-4 tw-rounded-xl  tw-bg-GlobalColorc85df0c'>
              <div className="tw-flex tw-flex-col tw-gap-4">
                <div className="tw-flex tw-items-center">
                  <span className={iconBg}><FaPhone /></span>
                  <span className="tw-text-xl md:tw-text-2xl tw-ml-3">+92 347 9899980</span>
                </div>
                <div className="tw-flex tw-items-center">
                  <span className={iconBg}><MdEmail /></span>
                  <span className='tw-text-xl md:tw-text-2xl tw-ml-3 contact-item'>info@codingsouls.com</span>
                </div>
                <div className="tw-flex tw-items-center">
                  <span className={iconBg}><FaFacebook /></span>
                  <Link to="https://www.facebook.com/codingsouls07" className='md:tw-text-2xl tw-text-xl tw-text-black tw-no-underline tw-ml-3 contact-item'>Go To Facebook Id</Link>
                </div>
                <div className="tw-flex tw-items-center">
                  <span className={iconBg}><FaYoutube /></span>
                  <Link to="https://www.youtube.com/channel/UCsN4I23a45w2fUAUfMmd:6orHg" className='tw-text-xl tw-text-black md:tw-text-2xl contact-item tw-no-underline tw-ml-3'>Go To Youtube Channel</Link>
                </div>
                <div className="tw-flex tw-items-center">
                  <span className={iconBg}><FaInstagram /></span>
                  <Link to="https://www.instagram.com/coding_souls/" className='md:tw-text-2xl tw-text-xl tw-text-black tw-no-underline tw-ml-3 contact-item'>Go To Insta Id</Link>
                </div>
                <div className="tw-flex tw-items-center">
                  <span className={iconBg}><FaLinkedinIn /></span>
                  <Link to="https://www.linkedin.com/in/maaz-ur-rahman1/?originmd:alSubdom3inpk" className='tw-text-xl tw-text-black md:tw-text-2xl tw-no-underline tw-ml-3'>Go To Linkedin Id</Link>
                </div>
                <div className="tw-flex tw-items-center">
                  <span className={iconBg}><FaPinterest /></span>
                  <Link to="https://www.pinterest.com/codingsouls/" className='md:tw-text-2xl tw-text-xl tw-text-black tw-no-underline tw-ml-3 contact-item'>Go To Pinterest</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-7 tw-items-start tw-p-4'>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="fullName" className="tw-text-FSm tw-font-bold form-label">Full Name</label>
                <input type="text" className="form-control tw-text-FSm tw-p-4 " id="fullName" placeholder="Full Name" />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="companyName" className="form-label tw-text-FSm tw-font-bold">Company Name (Optional)</label>
                <input type="text" className="tw-text-FSm  tw-p-4 form-control" id="companyName" placeholder="Enter Your Company Name" />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="whatsappNumber" className="tw-text-FSm tw-font-bold form-label">Whatsapp Number</label>
                <input type="tel" className="form-control tw-text-FSm  tw-p-4" id="whatsappNumber" placeholder="Enter Your Whatsapp Number" />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="email" className="form-label tw-text-FSm tw-font-bold ">Email</label>
                <input type="email" className="tw-text-FSm  tw-p-4 form-control" id="email" placeholder="Enter Your Email Id" />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="projectName" className="tw-text-FSm tw-font-bold form-label">Project Name</label>
                <input type="text" className="form-control tw-text-FSm  tw-p-4" id="projectName" placeholder="Enter Your Project Name" />
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="budget" className="form-label tw-text-FSm tw-font-bold">Budget (Optional)</label>
                <input type="number" className="tw-text-FSm  tw-p-4 form-control" id="budget" placeholder="Enter Your Budget" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="projectMessage" className="tw-text-FSm tw-font-bold form-label">Message About Your Project</label>
              <textarea className="form-control tw-h-64 tw-text-FSm " id="projectMessage" rows="3" placeholder="Message About Your Project"></textarea>
            </div>
            <button className='btn btn-outline tw-border-t-indigo-600 tw-border-r-sky-700 tw-border-b-violet-600 tw-border-l-violet-600 hover:tw-bg-white  py-2 tw-px-10 tw-text-xl'>SEND</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactForm;
