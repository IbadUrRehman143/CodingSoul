import React from 'react'

const ProjectCard = ({text, subText, image}) => {
  return (
    <div className="tw-relative project-card">
        <img src={image} className="image-fluid" alt="" />
        <div className="tw-absolute tw-bottom-0 tw-w-full tw-overflow-hidden tw-flex tw-items-center tw-justify-center tw-flex-col">
            <p className="tw-text-white tw-font-extrabold tw-text-xl">{text}</p>
            <p className="tw-text-white tw-font-bold">{subText}</p>
        </div>
    </div>
  )
}

export default ProjectCard