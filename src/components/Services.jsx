import React, { useState } from "react";
// import SubServiceCard from "./commonStructure/SubServiceCard";
 
import "../css/services.css";
import "../css/subServices.css";
import { SubServicesAI, SubServicesSD, SubServicesPOC,SubServicesRD, SubServicesUXUI } from "./SubServices";
 
export default function InfoCards() {
 

const [services, setServices] = useState(SubServicesPOC)
const [active, setActive] = useState("POC");
 
  const handleOnClick = id => {
    setActive(id);
  };
 
  return (
    <>
      <div className="services-container" id="services">
        <div className="title">Services</div>
        <div className="description">
          We specialise in a wide range of services
        </div>
        <div className="services-btn-container">
 
          <button id="AI" onClick = {() => {
            setServices(SubServicesAI);
            handleOnClick("AI")
            }} className = {
              "services-btn" + (active === "AI" ? " active" : "")
              }>
            <i className="fa fa-database"></i>
            <p className="card-title">Data & AI</p>
          </button>
 
          <button id="SD" onClick = {() => {
            setServices(SubServicesSD);
            handleOnClick("SD")
          }}
            className = {
              "services-btn" + (active === "SD" ? " active" : "")
              }>
            <i className="fas fa-laptop-code "></i>
            <p className="card-title">Software Development</p>
          </button>
 
          <button id="POC" onClick = {() => {
            setServices(SubServicesPOC);
            handleOnClick("POC")
            }} className = {
              "services-btn" + (active === "POC" ? " active" : "")
              }>
            <i className="fa fa-gears"></i>
            <p className="card-title">Proof of Concept</p>
          </button>
 
          <button id="RD" onClick = {() => {
            setServices(SubServicesRD);
            handleOnClick("RD")
            }} className = {
              "services-btn" + (active === "RD" ? " active" : "")
              }>
            <i className="fa-solid fa-microscope"/>
            <p className="card-title">Applied R&D</p>
          </button>
 
          <button id="UXUI" onClick = {() => {
            setServices(SubServicesUXUI);
            handleOnClick("UXUI")
            }} className = {
              "services-btn" + (active === "UXUI" ? " active" : "")
              }>
            <i className="fa-solid fa-compass-drafting"></i>
            <p className="card-title">UX & UI Design</p>
          </button>
        </div>

        {/* <div className="arrow-down">
            <icon className="fa fa-caret-down"></icon>
            <icon className="fa fa-caret-down"></icon>
            <icon className="fa fa-caret-down"></icon>
            <icon className="fa fa-caret-down"></icon>
            <icon className="fa fa-caret-down"></icon>
          </div> */}

        <p>{services}</p>
      </div>
    </>
  )
}