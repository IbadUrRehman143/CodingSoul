import React from 'react'
import image1 from "../../assets/op-1299-x-1280-px-6.png"
import { Link } from 'react-router-dom'

const Digital = ({image,heading,buttn}) => {
  return (
    <>
     <div className="">
        <div className="container">
          <div className="row ">
            <div className="maincontainer ">
              <div className="thecard">
                <div className="thefront tw-p-3 tw-rounded-3xl tw-cursor-pointer ">
                  <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-p-10">
                    <img src={image} className='tw-w-28' alt="" />
                    <h3 className='tw-text-FLg tw-font-bold tw-py-2'>{heading}</h3>
                    <p className='tw-text-xl tw-font-semibold'>Best Price Web Designing Services In All over the World</p>
                    <Link to="#" className='bttn btn  tw-py-3 tw-mt-3  btn-info'>{buttn}</Link>
                  </div>
                </div>
                <div className="theback  tw-p-3 tw-rounded-3xl tw-cursor-pointer">
                <div className="tw-flex tw-flex-col tw-items-center tw-text-center tw-p-10">
                    <img src={image} className='tw-w-28' alt="" />
                    <h3 className='tw-text-FLg tw-font-bold tw-py-2'>{heading}</h3>
                    <p className='tw-text-xl tw-font-semibold'>Best Price Web Designing Services In All over the World</p>
                    <Link to="" className='bttn btn  tw-py-3 tw-mt-3  btn-info'>{buttn}</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div> 
      </div> 

      

    </>
  )
}










const DigitaLCard = () => {
  return (
    <>
    <div className=" container tw-mt-16">
      <h1 className='tw-text-GlobalColor05b8906 tw-text-center '>Express Your Digital Presence</h1>
      <p className='tw-text-xl tw-font-semibold tw-text-center '>Express Your Digital Presence with CodingSouls, transforming your online identity into a powerful business tool.</p>
    <div className='tw-flex tw-flex-col md:tw-flex-row sm:col-6 tw-mt-14 tw-gap-4'>
      <Digital image={image1} heading="Website Desiging" buttn="Learn More" />
      <Digital image={image1} heading="Website Desiging" buttn="Learn More" />
      <Digital image={image1} heading="Website Desiging" buttn="Learn More" />
      <Digital image={image1} heading="Website Desiging" buttn="Learn More" />
      </div>
    <div className='tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-mt-3 md:tw-mt-12 tw-mb-20'>
      <Digital image={image1} heading="Website Desiging" buttn="Learn More" />
      <Digital image={image1} heading="Website Desiging" buttn="Learn More" />
      <Digital image={image1} heading="Website Desiging" buttn="Learn More" />
      <Digital image={image1} heading="Website Desiging" buttn="Learn More" />
      </div>
    </div>
    </>
  )
}

export default DigitaLCard