import React from "react";
import "../css/about.css";
import InfoCards from "./InfoCards";
import "../css/infoCards.css";

export default function App() {
  return (
    <div className="about" id="about">
      <div className="about-title">Why Choose Us</div>
      <InfoCards />
        <div className="about-container" id="about">
        <div className="about-image-container">
          <div className="about-image"></div>
        </div>
        <div className="about-text-container">
          <h2> Our vision </h2>
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
    </div>   
  );
}