import React from "react";

export default function TeamCard({ image, name, work, description }) {
  return (
    <div className="team-card">
      <img src={image} alt="team" />
      <div className="team-details">
        <p className="t-title">{name}</p>
        <p className="t-work">{work}</p>
        <p className="t-description">{description}</p>
      </div>
      <div className="team-social-icons">
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>
  );
}
