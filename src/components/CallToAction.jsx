import React from "react";

import "../css/callToAction.css";

export default function App() {
  return (
    <div className="cta-container" id="cta">
      <div className="cta-title">PUT HEADER HERE</div>
      <div className="cta-body">
        LTEXT TO BE ADDED
        <div className='col-2'>
          <iframe className="frame" src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>

      </div>


    </div>
  );
}
