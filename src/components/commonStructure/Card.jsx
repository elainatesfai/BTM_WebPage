import React from "react";
export default function Card({  image, title, text }) {
  return (
    <div className="card">
      <img src={image} alt="image" />
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
    </div>
  );
}
