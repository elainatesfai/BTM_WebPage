import React from "react";
import "../css/footer.css";

export default function App() {
  return (
    <div className="outer-container">
      <div className="footer-container">
        <div className="news-letter">
          <div className="letter-title">Brunel Talent Market Place</div>
          <div className="letter-description">
            BrunelTalentMarketPlace
            Fostering symbiotic relationships between industry and academia
          </div>

          <div className="social-block">
            {/* <i className="fab fa-twitter"></i> */}
            <i className="fab fa-instagram"></i>
            {/* <i className="fab fa-linkedin"></i> */}
          </div>
        </div>
        <div className="footer-end">
          {/* <span>
            <i className="far fa-copyright"></i> Copyright BTM. All
            rights reserved.
          </span> */}
        </div>
      </div>
    </div>
  );
}
