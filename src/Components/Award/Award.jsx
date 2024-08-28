import React from 'react';
import Image1 from "../../assets/Awarded-10.png";
import Image2 from "../../assets/Awarded-9.png";
import Image3 from "../../assets/Awarded-8.png";
import Image4 from "../../assets/Awarded-2.png";
import Image5 from "../../assets/7.png";

const Award = () => {
  return (
    <div className="tw-bg-GlobalColorc85df0c tw-rounded-tl-full tw-rounded-br-full ">
      <div className="bcontainer tw-text-center tw-py-8">
        <h1 className="tw-text-black tw-text-Fxxlg">Our Awards & Achievements</h1>
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-ml-12 md:tw-ml-0 xl:tw-grid-cols-5 tw-justify-center tw-mt-12 tw-gap-8">
          <img src={Image1} alt="" className="" />
          <img src={Image2} alt="" className="" />
          <img src={Image3} alt="" className="" />
          <img src={Image4} alt="" className="" />
          <img src={Image5} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Award;
