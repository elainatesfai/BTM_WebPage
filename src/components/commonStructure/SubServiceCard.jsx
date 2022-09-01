import React from "react";

export default function SubServiceCard({ icon, title, text }) {

  return (
    <div className="sub-container">
    <div className="subservice-card">
      <i className={icon + " card-icon"}></i>
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
    </div>
    </div>  
  );
}