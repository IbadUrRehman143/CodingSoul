import React from 'react';
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import { Link } from 'react-router-dom';

const PlatForms = () => {
  return (
    <div className="tw-bg-GlobalColor05b8906 tw-rounded-tl-full tw-rounded-br-full ">
      <div className="bcontainer">
        <h1 className="md:tw-text-Fxlg tw-text-white tw-text-FLg tw-font-bold tw-text-center tw-py-5">
          Our 5-Star Reviews Across Platforms
        </h1>
        <div className="tw-pb-10 tw-grid tw-gap-5 tw-justify-center md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-grid-cols-1">
          <Link to="https://www.facebook.com/Maazurrahmanofficial/?_rdr">
            <img src={image2} alt="" className="tw-rounded-2xl tw-w-full md:tw-w-5/6" />
          </Link>
          <Link to="">
            <img src={image3} alt="" className="tw-rounded-2xl tw-w-full md:tw-w-5/6" />
          </Link>
          <Link to="https://www.google.com/search?gs_ssp=eJwFwUEKgCAQAEC6Bn0hvHTWZQ3LJ_QLdVmRLAsrfH4z_SCjBLjhgNxwV52dVMOF2DPhAkEbzWBVM-R5Ncg-zGQQ3DaGQumMopY3V3F9j8gPiVSzO5x39ANTIxtF&q=coding+souls+pvt+ltd+islamabad&oq=coding+&gs_lcrp=EgZjaHJvbWUqDAgCEC4YJxivARjHATIHCAAQABiPAjIGCAEQRRg7MgwIAhAuGCcYrwEYxwEyCggDEAAYsQMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDY1MTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">
            <img src={image1} alt="" className="tw-rounded-2xl tw-w-full md:tw-w-5/6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatForms;
