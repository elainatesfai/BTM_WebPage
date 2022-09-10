import React from "react";

export default function expertsCard({ image, name, work, description, linkedIn, profile, ...rest }) {
  return (
    <div className="experts-container">
      <div className="experts-card" {...rest}>
        <div className="experts-body">
        
          <div className="experts-card-in">
            <div className="experts-details">
              <img src={image} alt="experts" />
              <p className="t-title">{name}</p>
              <p className="t-work">{work}</p>
            </div>
          </div>
          
          <div className="experts-card-out">
            <p className="t-title">{name}</p>
            <p className="t-work">{work}</p>
            <p className="t-description">{description}</p>
            <div className="experts-social-icons">
              <a href={linkedIn}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={profile}>
                <i className="fa-solid fa-address-card"></i>  
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
