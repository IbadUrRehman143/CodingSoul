import React from 'react';

const CodingText = ({ Title, about }) => {
    return (
        <div className="col-lg-6">
            <h1 className='tw-py-4 tw-text-2xl lg:tw-text-5xl tw-font-bold'>
                {Title}
            </h1>
            <p className='tw-py-4 tw-text-base lg:tw-text-lg'>
                {about}            </p>
        </div>
    );
}

const CodingGrid = ({ Rj, Ll, Fr, NJ }) => {
    return (
        <div className="col-lg-6 tw-mt-8 lg:tw-mt-0">
            <div className='tw-grid tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4'>
                <Name image1={Rj} Name1="React Js" />
                <Name image1={Ll} Name1="Laravel" />
                <Name image1={NJ} Name1="NodeJs" />
                <Name image1={Fr} Name1="Flutter" />
            </div>
        </div>
    );
}

const Name = ({ image1, Name1 }) => {
    return (
        <div className='tw-flex tw-flex-col tw-items-center'>
            <img src={image1} alt="" className='tw-w-20 lg:tw-w-24 tw-h-20 lg:tw-h-24 tw-bg-cover tw-bg-center' />
            <p className='tw-text-center tw-mt-2 tw-text-sm lg:tw-text-base'>{Name1}</p>
        </div>
    );
}

const CodingTwo = ({ title, perra, one, two, three, four }) => {
    return (
        <div className="bcontainer tw-py-6">
            <div className="row tw-flex tw-flex-wrap tw-items-center">
                <CodingText Title={title} about={perra} />
                <CodingGrid Rj={one} Fr={two} Ll={three} NJ={four} />
            </div>
        </div>
    );
}

export default CodingTwo;
