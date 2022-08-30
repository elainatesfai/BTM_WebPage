import React from "react";
export default function Card({  image, title, text }) {
  return (
    <div className="card">
      <div className="card-in">
        <img src={image} alt="image" />
        <p className="card-title">{title}</p>
      </div>
      
      <div className="card-out">
        <p className="card-title">{title}</p>
        <p className="card-text">{text}</p>
      </div>
      
    </div>
  );
}