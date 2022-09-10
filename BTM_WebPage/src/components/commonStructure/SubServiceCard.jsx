import React from "react";

export default function SubServiceCard({ icon, title, text }) {

  return (
    <div className="sub-container">
    <div className="subservice-card">
      <p className="card-title">{title}</p>
      <i className={icon + " card-icon"}></i>
      <p className="card-text">{text}</p>
    </div>
    </div>  
  );
}