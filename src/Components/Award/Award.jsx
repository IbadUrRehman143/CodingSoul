import React from 'react';
import Image1 from "../../assets/Awarded-10.png";
import Image2 from "../../assets/Awarded-9.png";
import Image3 from "../../assets/Awarded-8.png";
import Image4 from "../../assets/Awarded-2.png";
import Image5 from "../../assets/7.png";

const Award = () => {
  return (
    <div className="tw-bg-GlobalColorc85df0c tw-rounded-br-full">
      <div className="bcontainer tw-text-center tw-py-8">
        <h1 className="tw-text-black tw-text-Fxxlg">Our Awards & Achievements</h1>
        <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5 tw-gap-6 tw-mt-12 tw-px-4 md:tw-px-8 lg:tw-px-12">
          <img src={Image1} alt="Award 1" className="tw-w-full tw-h-auto" />
          <img src={Image2} alt="Award 2" className="tw-w-full tw-h-auto" />
          <img src={Image3} alt="Award 3" className="tw-w-full tw-h-auto" />
          <img src={Image4} alt="Award 4" className="tw-w-full tw-h-auto" />
          <img src={Image5} alt="Award 5" className="tw-w-full tw-h-auto" />
          <img src={Image5} alt="Award 5" className="tw-w-full tw-h-auto md:tw-hidden" />
        </div>
      </div>
    </div>
  );
}

export default Award;
