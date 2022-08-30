import React from "react";

export default function ExpertsCard({ image, name, work, description }) {
  return (
    <div className="experts-card">
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
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}
