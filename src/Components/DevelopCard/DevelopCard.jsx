import React from 'react'

const DevelopCard = ({D1,Name,paraD}) => {
  return (
    <>

    <div className="card">
  <div className="card-body tw-flex tw-gap-4">
    <h5 className="card-title tw-py-4  "><img src={D1} alt="" className='tw-w-36' /></h5>
   <div className=''>
        <h6 className="card-subtitle tw-mt-1 tw-font-bold tw-text-2xl tw-py-4 mb-2 text-body-secondary">{Name}</h6>
        <p className="card-text tw-text-xl tw-py-4">{paraD}</p>
   </div>
    
  </div>
</div>

    </>
  )
}

export default DevelopCard