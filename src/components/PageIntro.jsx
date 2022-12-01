import React, { useState } from "react";
 
import "../css/pageIntro.css";
import introvide from "../video/TalentMarketplace.mp4"
// import PageIntroVideo from "../video/PageIntroVideo.mp4"
 
export default function PageIntro() {
  const [toggle, setToggle] = useState(false);
 
  const handleVideo = ({ target }) => {
    if (target.classList.contains("show")) {
      setToggle(false);
      document.querySelector("video").pause();
    } else {
      target.pause();
    }
  };
 
  return (
    <>
      <div className="page-intro-container"id="home">
        <div className="text-container">
          <h1 className="intro-title">Brunel <span className="talent">Talent</span> Market Place</h1>
          <p className="intro-text">
            We are an IT consulting organisation inside Brunel University that aims to foster symbiotic relations between industry and academia.
          </p>
          <div className="btn-row">
            <button className="video btn" onClick={() => setToggle(!toggle)}>
              Watch video <i className="far fa-play-circle icon"></i>
            </button>
          </div>
        </div>
        <div className="image-container">
 

        </div>
 
        <div
          className={"video-background" + (toggle ? " show" : "")}
          onClick={handleVideo}
          style={toggle ? { top: window.pageYOffset } : {}}
        >
          <div className="video-container">
            <video src={introvide}
              className="intro-video"
              controls
            />
          </div>
        </div>
      </div>
    </>
  );
}