import React from 'react'
import back from "../../assets/op.png"
const Hero2 = ({heading}) => {
  return (
    <>

        <div className="tw-bg-cover tw-bg-amber-200  tw-rounded-br-full  tw-h-48" style={{backgroundImage:`url(${back})`}}>
    <div className="bcontainer">
            <h1 className='tw-text-5xl tw-text-white tw-text-center   tw-py-6'>{heading}</h1>
        </div>
    </div>

    </>
  )
}

export default Hero2