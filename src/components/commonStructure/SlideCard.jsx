import React from "react";

export default function SlideCard ({image, title, description}) {
    return (
        <div className='slide-container'>
            <div className="about-image-container">
                <div className='slide-image'>
                    <img src={image} alt='' />
                </div>
            </div>
            <div className='about-text-container'>
                <h2>{title}</h2>
                <p className='about-description'>{description}</p>
            </div>
        </div>
    )
}
