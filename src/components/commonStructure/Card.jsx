import React from "react";
export default function Card({ icon, title, text }) {
  return (
    <div className="card">
      <i className={icon + " card-icon"}></i>
      <p className="card-title">{title}</p>
      <p className="card-text">{text}</p>
    </div>
  );
}
