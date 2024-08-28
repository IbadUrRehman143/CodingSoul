import React from 'react'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import imageapp1 from "../../assets/imageapp1.webp"
import imageapp2 from "../../assets/imageapp2.webp"
import imageapp3 from "../../assets/imageapp3.webp"
import imageapp4 from "../../assets/app4.webp"
import imageapp5 from "../../assets/app5.webp"
import imageapp6 from "../../assets/app6.webp"
import imageapp7 from "../../assets/app7.webp"
import imageapp8 from "../../assets/app8.webp"
import imageapp9 from "../../assets/app9.webp"
import imagewix1 from "../../assets/image1.png"
import imagewix2 from "../../assets/image2.png"
import imagewix3 from "../../assets/image3.png"
import imageweb1 from "../../assets/imageweb4.png"
import imageweb2 from "../../assets/imageweb5.png"
import imageweb3 from "../../assets/imageweb6.png"
import imageweb4 from "../../assets/imageweb7.png"
import imageweb5 from "../../assets/imageweb8.png"
import imageweb6 from "../../assets/imageweb9.png"
import imageweb7 from "../../assets/imageweb10.png"
import imageweb8 from "../../assets/imageweb11.png"
import imageweb9 from "../../assets/imageweb12.png"
import imageweb10 from "../../assets/imageweb13.png"
import imageweb11 from "../../assets/imageweb14.png"
import imageweb12 from "../../assets/imageweb15.png"
import imageweb13 from "../../assets/imageweb16.png"
import imageweb14 from "../../assets/imageweb17.png"
import imageweb15 from "../../assets/imageweb18.png"
import imagewor1 from "../../assets/imagewor1.png"
import imagewor2 from "../../assets/imagewor2.png"
import imagewor3 from "../../assets/imagewor3.png"
import imagewor4 from "../../assets/imagewor4.png"
import imagewor5 from "../../assets/imagewor5.png"
import imagewor6 from "../../assets/imagewor6.png"



import ProjectCard from '../../Components/ProjectCard/ProjectCard'

const Apps = () => {
    return (
        <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-gird-cols-4 tw-gap-8'>
            <ProjectCard image={imageapp1} text="Grocery App" subText="App" />
            <ProjectCard image={imageapp2} text="Grocery App" subText="App" />
            <ProjectCard image={imageapp3} text="Grocery App" subText="App" />
            <ProjectCard image={imageapp4} text="Grocery App" subText="App" />
            <ProjectCard image={imageapp5} text="Grocery App" subText="App" />
            <ProjectCard image={imageapp6} text="Grocery App" subText="App" />
            <ProjectCard image={imageapp7} text="Grocery App" subText="App" />
            <ProjectCard image={imageapp8} text="Grocery App" subText="App" />
            <ProjectCard image={imageapp9} text="Grocery App" subText="App" />
        </div>
    )
}


const Wordpress = () => {
    return (
        <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-gird-cols-4 tw-gap-8'>
            <ProjectCard image={imagewor1} text="Grocery App" subText="App" />
            <ProjectCard image={imagewor2} text="Grocery App" subText="App" />
            <ProjectCard image={imagewor3} text="Grocery App" subText="App" />
            <ProjectCard image={imagewor4} text="Grocery App" subText="App" />
            <ProjectCard image={imagewor5} text="Grocery App" subText="App" />
            <ProjectCard image={imagewor6} text="Grocery App" subText="App" />
           
        </div>
    )
}


const Website = () => {
    return (
        <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-gird-cols-4 tw-gap-8'>
            <ProjectCard image={imageweb1} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb2} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb3} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb4} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb5} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb6} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb7} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb8} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb9} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb10} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb11} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb12} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb13} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb14} text="Grocery App" subText="App" />
            <ProjectCard image={imageweb15} text="Grocery App" subText="App" />
        </div>
    )
}



const Wix = () => {
    return (
        <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-gird-cols-4 tw-gap-8'>
            <ProjectCard image={imagewix1} text="Grocery App" subText="App" />
            <ProjectCard image={imagewix2} text="Grocery App" subText="App" />
            <ProjectCard image={imagewix3} text="Grocery App" subText="App" />
            
        </div>
    )
}



const ProjectAll = () => {
    return (
        <>
            <div className="">
                <div className='bcontainer'>
                    <div className="tw-mt-10">
                        <h1 className='tw-text-GlobalColord4b0483 tw-text-Fxlg  tw-text-center tw-py-3'>Check Out Our Awesome Projects</h1>
                    </div>
                    <ul className="nav nav-pills flex tw-justify-center tw-gap-4 tw-py-4" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tw-outline active" id="all-projects-tab" data-bs-toggle="tab" data-bs-target="#all-projects-pane" type="button" role="tab" aria-controls="all-projects-pane" aria-selected="true">All projects</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tw-outline" id="website-tab" data-bs-toggle="tab" data-bs-target="#website-pane" type="button" role="tab" aria-controls="website-pane" aria-selected="false">WEBSITE</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tw-outline" id="app-tab" data-bs-toggle="tab" data-bs-target="#app-pane" type="button" role="tab" aria-controls="app-pane" aria-selected="false">APP</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tw-outline" id="wix-tab" data-bs-toggle="tab" data-bs-target="#wix-pane" type="button" role="tab" aria-controls="wix-pane" aria-selected="false">WIX</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link tw-outline" id="wordpress-tab" data-bs-toggle="tab" data-bs-target="#wordpress-pane" type="button" role="tab" aria-controls="wordpress-pane" aria-selected="false">WORDPRESS</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="all-projects-pane" role="tabpanel" aria-labelledby="all-projects-tab">
                            <Apps />
                            <Website/>
                            <Wix/>
                            <Wordpress/>
                        </div>
                        <div className="tab-pane fade" id="website-pane" role="tabpanel" aria-labelledby="website-tab">
                            <Website/>
                        </div>
                        <div className="tab-pane fade" id="app-pane" role="tabpanel" aria-labelledby="app-tab">
                            <Apps />
                        </div>
                        <div className="tab-pane fade" id="wix-pane" role="tabpanel" aria-labelledby="wix-tab">
                            <Wix/>
                        </div>
                        <div className="tab-pane fade" id="wordpress-pane" role="tabpanel" aria-labelledby="wordpress-tab">
                          <Wordpress/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectAll;
