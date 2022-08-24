import React, { useState } from "react";

export default function PortfolioCard({ image }) {
  const [toggle, setToggle] = useState(false);
  const [style, setStyle] = useState({});

  const handleToggle = ({ target }) => {
    if (
      target.classList.contains("portfolio-zoom") ||
      target.classList.contains("fa-times-circle")
    )
      setToggle(false);
    else setToggle(true);

    const y = window.pageYOffset;
    setStyle({ top: y, left: 0 });
  };

  return (
    <>
      <div className="portfolio">
        <img src={image} alt="portfolio" />
        <div className="portfolio-details" onClick={handleToggle}>
          <i className="fas fa-search-plus"></i>
        </div>
      </div>
      <div
        className={"portfolio-zoom" + (toggle ? " show" : "")}
        onClick={handleToggle}
        style={style}
      >
        <img src={image} alt="portfolio" />
        <i className="far fa-times-circle"></i>
      </div>
    </>
  );
}
