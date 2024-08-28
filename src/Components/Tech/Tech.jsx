import React from 'react'
import { FaLaptopCode } from 'react-icons/fa6';
import { IoSettingsOutline } from "react-icons/io5";
import imag1 from "../../assets/X26.png"
import imag2 from "../../assets/X27.png"
import imag3 from "../../assets/X28.jpg"
import imag4 from "../../assets/phhp.png"
import imag5 from "../../assets/ak.jpg"
import imag6 from "../../assets/akl.png"
import imag7 from "../../assets/X21.png"
import imag8 from "../../assets/akll.png"
import imag9 from "../../assets/X23.png"
import imag10 from "../../assets/11.png"
import imag11 from "../../assets/12.png"
import imag12 from "../../assets/X13.webp"
import imag13 from "../../assets/X10.webp"
import imag14 from "../../assets/X9.webp"
import imag15 from "../../assets/X12.png"
import imag16 from "../../assets/X14.png"
import imag17 from "../../assets/12.png"
import imag18 from "../../assets/X22.png"
import imag19 from "../../assets/X25.png"
import imag20 from "../../assets/ef.png"

const Icons = ({ heading, icons, paragraph }) => {
    return (
        <>
            <div className="tw-flex tw-items-start tw-py-5 tw-gap-3">
                <span className='tw-mt-4 tw-text-3xl tw-text-GlobalColor05b8906 hover:tw-text-GlobalColorc85df0c'>{icons}</span>
                <div className="">
                    <h3 className='tw-mt-3  tw-text-GlobalColor05b8906 hover:tw-text-GlobalColorc85df0c'>{heading}</h3>
                    <p className='tw-w5/6'>{paragraph}</p>
                </div>
            </div>
        </>
    )
}

const Name = ({ image1, Name1 }) => {
    return (
        <>
            <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-24'>
                <img src={image1} alt={Name1} className='tw-w-full tw-bg-cover tw-bg-center' />
                <p className='tw-text-center tw-mt-2'>{Name1}</p>
            </div>
        </>
    )
}

const Tech = () => {
    return (
        <>
            <div className="container tw-mt-20 tw-mb-10">
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-8">
                    <div className="md:tw-w-1/2">
                        <h1 className='tw-text-GlobalColor05b8906 tw-text-2xl md:tw-text-5xl tw-font-bold'>Hire Expert Developers to Boost your Brand</h1>
                        <p className='tw-mt-4 tw-text-sm tw-w-5/6'>Empower your digital transformation with the expertise of a top-notch website designing company in Pakistan, utilizing cutting-edge tools and frameworks.</p>

                        <div className="tw-mt-8">
                            <Icons    icons={<IoSettingsOutline />} heading="Our Tech Services" paragraph="Our Tech Services Peek into our technology solutions where we craft software magic to meet your unique requirements." />
                            <Icons   icons={<FaLaptopCode />} heading="Digital Capabilities" paragraph="Uncover our digital capabilities, covering the entire spectrum from backend to frontend, mobile apps, databases, and server management." />
                            <Icons   icons={<IoSettingsOutline />} heading="Digital Expertize" paragraph="Explore our expertise in Web Designing Lahore, seamlessly blending technology mastery and innovation. Our solutions are crafted to drive your digital success." />
                        </div>
                        <button className='btn  btn-outline tw-border-t-cyan-400 tw-border-r-GlobalColoraccent tw-border-b-GlobalColor05b8906 tw-border-l-cyan-800 tw-text-xl md:tw-text-2xl hover:tw-bg-GlobalColorc85df0c tw-mt-6'>CONTACT</button>
                    </div>
                    <div className='md:tw-w-1/2'>
                        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4">
                            <Name image1={imag1} Name1="React Js" />
                            <Name image1={imag2} Name1="WordPress" />
                            <Name image1={imag3} Name1="Laravel" />
                            <Name image1={imag4} Name1="PHP" />
                            <Name image1={imag5} Name1="Woo" />
                            <Name image1={imag6} Name1="Shopofiy" />
                            <Name image1={imag7} Name1="CakePHP" />
                            <Name image1={imag8} Name1="Magento" />
                            <Name image1={imag9} Name1="NodeJs" />
                            <Name image1={imag10} Name1="Angular" />
                            <Name image1={imag11} Name1="Django" />
                            <Name image1={imag12} Name1="Flutter" />
                            <Name image1={imag13} Name1="Android" />
                            <Name image1={imag14} Name1="Ios App" />
                            <Name image1={imag15} Name1="Windows" />
                            <Name image1={imag16} Name1="Hybrid" />
                            <Name image1={imag17} Name1="Java" />
                            <Name image1={imag18} Name1="Codeignitter" />
                            <Name image1={imag19} Name1="Open Cart" />
                            <Name image1={imag20} Name1="SquareSpace" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tech
