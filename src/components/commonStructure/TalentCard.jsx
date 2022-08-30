import React from "react";

export default function TalentCard({ image, name, work, description }) {
  return (
    <div className="talent-card">
        <div className="talent-card-in">
          <div className="talent-details">
            <img src={image} alt="talent" />
            <p className="t-title">{name}</p>
            <p className="t-work">{work}</p>
          </div>
          
        </div>
        <div className="talent-card-out">
          <p className="t-title">{name}</p>
          <p className="t-work">{work}</p>
          <p className="t-description">{description}</p>
          <div className="talent-social-icons">
            <i className="fab fa-linkedin"></i>
          </div>
      </div>
    </div>
  )
}
