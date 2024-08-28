import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../assets/p.png";
import image2 from "../../assets/uni.png";
import image3 from "../../assets/spa.png";

const Clients = () => {
    return (
        <>
            <div className="tw-container tw-mx-auto">
                <div className="tw-text-center tw-mt-12">
                    <h1 className="tw-text-GlobalColor05b8906 tw-text-3xl  tw-font-bold">Our Clients Testimonials</h1>
                    <Link to="" className="tw-bg-GlobalColor05b8906 tw-text-white tw-px-4 tw-py-2 tw-rounded">Review 4.9/5.0</Link>
                    <p className="tw-text-red-700 tw-mt-5 tw-text-xl">✭✭✭✭✭✭✭✭</p>
                </div>
                <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-6 tw-mt-8">
                    {[
                        {
                            image: image1,
                            text: "Coding Souls been an excellent resource for us over the last few years with keeping our website updated. Amit is prompt in his responses and very strong technically. I would highly recommend working with Coding Souls.",
                            name: "Muhammad Zeeshan",
                            role: "Designer"
                        },
                        {
                            image: image2,
                            text: "After a long time we haven’t found people who meet our needs, we came to you through a recommendation and you did the job in a great way! Both we and our customers are very satisfied with the quality of the work, the listening and the speed of execution..",
                            name: "Jhen Doe",
                            role: "Marketer"
                        },
                        {
                            image: image3,
                            text: "Coding Soul team cares about the customer and does everything to make their clients happy and satisfied with their work. They deliver on their promises, no matter how long it takes, and provide daily, detailed updates of their work upon request..",
                            name: "Muhammad Zeeshan",
                            role: "Developer"
                        }
                    ].map((client, index) => (
                        <div key={index} className="tw-w-[350px] tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-4 md:tw-mb-0 tw-mb-24 tw-relative">
                            <div className="tw-mb-8">
                                <p className="tw-text-gray-700">{client.text}</p>
                            </div>
                            <div className="tw-absolute  tw-left-1/2 tw-transform tw--translate-x-1/2 tw-text-center">
                                <img src={client.image} alt="" className="tw-w-16 tw-h-16 tw-rounded-full tw-mx-auto" />
                                <h6 className="tw-mt-2 tw-font-semibold">{client.name}</h6>
                                <span className="tw-text-sm tw-text-gray-500">{client.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Clients;
