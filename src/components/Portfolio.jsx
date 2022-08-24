import React from "react";
import PortfolioCard from "./commonStructure/PortfolioCard";

import "../css/portfolio.css";

export default function App() {
  return (
    <div id="portfolio">
      <p className="portfolio-header">MADE IN BRUNEL</p>
      <p className="portfolio-text">
        IMAGES TO BE ADDED
      </p>
      <div className="portfolio-container">
        <div className="portfolio-grid">
          <PortfolioCard image="" />
        </div>
      </div>
    </div>
  );
}
