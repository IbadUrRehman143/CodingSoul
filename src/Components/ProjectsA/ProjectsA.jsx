import React from 'react';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import imageapp1 from "../../assets/imageapp1.webp";
import imageapp2 from "../../assets/imageapp2.webp";
import imageapp3 from "../../assets/imageapp3.webp";

const ProjectsA = () => {
  return (
    <>
      <div className='bcontainer'>
        <div className="tw-mt-10">
          <h1 className='tw-text-GlobalColord4b0483 tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-text-center tw-py-3'>Check Out Our Awesome Projects</h1>
        </div>
        <ul className="nav nav-pills flex tw-justify-center tw-gap-4 tw-py-4" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link tw-outline active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">HOME</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link tw-outline" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">WEBSITE</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link tw-outline" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">APP</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
            <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-mt-10'>
              <img src={image1} className='tw-w-full tw-h-auto' alt="Project 1" />
              <img src={image2} className='tw-w-full tw-h-auto' alt="Project 2" />
              <img src={image3} className='tw-w-full tw-h-auto' alt="Project 3" />
            </div>
            <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-mt-10'>
              <img src={imageapp1} className='tw-w-full tw-h-auto' alt="App 1" />
              <img src={imageapp2} className='tw-w-full tw-h-auto' alt="App 2" />
              <img src={imageapp3} className='tw-w-full tw-h-auto' alt="App 3" />
            </div>
          </div>
          <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
            <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-mt-10'>
              <img src={image1} className='tw-w-full tw-h-auto' alt="Project 1" />
              <img src={image2} className='tw-w-full tw-h-auto' alt="Project 2" />
              <img src={image3} className='tw-w-full tw-h-auto' alt="Project 3" />
            </div>
          </div>
          <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
            <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-mt-10'>
              <img src={imageapp1} className='tw-w-full tw-h-auto' alt="App 1" />
              <img src={imageapp2} className='tw-w-full tw-h-auto' alt="App 2" />
              <img src={imageapp3} className='tw-w-full tw-h-auto' alt="App 3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsA;
