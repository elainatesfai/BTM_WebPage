import React from "react";

export default function TalentCard({ image, name, work, description, ...rest }) {
  return (
    <div className="talent-container">
      <div className="talent-card" {...rest}>
        <div className="talent-body">
        
          <div className="talent-card-in">
            <div className="talent-details">
              {/* <div className="img-filter"> */}
                <img  src={image} alt="talent" />
              {/* </div> */}
              
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
      </div>
    </div>
  )
}
