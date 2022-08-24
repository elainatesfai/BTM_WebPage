import React from "react";
import "../css/about.css";

export default function App() {
  return (
    <div className="about-container" id="about">
      <div className="about-image-container">
        <div className="about-image"></div>
      </div>
      <div className="about-text-container">
        <div className="about-title">Our Vision</div>
        <ul className="list">
          <li>To become a recognisable and viable IT consultancy known for its Research & Development services for West London businesses.</li>
          <li>
            We aspire to give 2% of the computer department’s student cohort the opportunity to participate in BTM projects.
          </li>
          <li>
            We aim to expand this model to other university departments, such as design, business management, and mechanical engineering
          </li>
        </ul>



      </div>
    </div>
  );
}
