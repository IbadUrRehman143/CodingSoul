import React from 'react';
import Image from "../../assets/123.webp";

const AboutDigi = () => {
    return (
        <>
            <div className="bcontainer tw-mt-10 tw-mb-10">
                <div className="tw-flex tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-gap-6 lg:tw-gap-8">
                    <div className="tw-w-full lg:tw-w-1/2 tw-flex tw-flex-col tw-justify-center">
                        <h1 className='tw-text-GlobalColor05b8906 tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-text-center lg:tw-text-left'>
                            About CodingSouls Digital Journey
                        </h1>
                        <p className='tw-py-4 tw-text-base md:tw-text-lg lg:tw-text-xl tw-text-center lg:tw-text-left'>
                            Start on CodingSouls’ remarkable digital journey, crafting innovative solutions since our inception. With a global presence spanning 15+ countries, we’ve served 1000+ clients, earning a commendable 4.9-star ranking.
                        </p>
                        <p className='tw-py-4 tw-text-sm md:tw-text-base lg:tw-text-lg tw-text-center lg:tw-text-left'>
                            Our commitment to excellence shines through our web development, hosting, graphic design, and mobile app services, defining CodingSouls as your trusted partner in the digital realm. Discover how CodingSouls can empower your business to reach new heights.
                        </p>
                        <div className="tw-flex tw-justify-center lg:tw-justify-start">
                            <button className='btn btn-outline tw-border-t-cyan-400 tw-border-r-GlobalColoraccent tw-border-b-GlobalColor05b8906 tw-border-l-cyan-800 tw-text-lg lg:tw-text-xl hover:tw-bg-GlobalColorc85df0c tw-mt-6'>
                                CONTACT
                            </button>
                        </div>
                    </div>
                    <div className="tw-w-full lg:tw-w-1/2 tw-flex tw-justify-center tw-items-center tw-border-r-8 tw-border-b-8 tw-border-GlobalColor05b8906">
                        <img src={Image} className='tw-w-full lg:tw-w-4/5 tw-max-w-lg' alt="Digital Journey" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutDigi;
