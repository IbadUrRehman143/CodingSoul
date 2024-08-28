import React from 'react'
import imageo from "../../assets/officer.jpg"
import imagei from "../../assets/bb.jpg"
import image from "../../assets/young-man.jpg"



const Meet = ({ text, subText, image1 }) => {
  return (
    <>

      <div className="tw-relative meet-card">
        <img src={image1} className="" alt="" />
        <div className="tw-absolute tw-w-full  tw-bottom-0  tw-flex tw-items-center tw-justify-center tw-flex-col">
          <p className="tw-text-white tw-font-extrabold tw-text-xl">{text}</p>
          <p className="tw-text-white tw-font-bold">{subText}</p>
        </div>
      </div>
    </>
  )
}

const Meat = () => {
  return (
    <>
      <div className="bcontainer ">
        <h1 className='tw-text-GlobalColor05b8906  tw-text-center tw-py-4 tw-mt-8 tw-font-bold tw-text-6xl'>Meet The Team</h1>
        <div className="tw-flex tw-gap-6 tw-py-5">
          <Meet image1={imageo} text="Charles Russell" subText="Senior Project" />
          <Meet image1={image} text="Kenneth Fowler" subText="Head of plat form" />
          <Meet image1={imagei} text="Carol Murry" subText="support" />
        </div>
      </div>
    </>
  )
}

export default Meat