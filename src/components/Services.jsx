import React, { useState } from "react";
// import SubServiceCard from "./commonStructure/SubServiceCard";
import 'animate.css';

import "../css/services.css";
import "../css/subServices.css";
import { SubServicesAI, SubServicesSD, SubServicesPOC, SubServicesRD, SubServicesUXUI } from "./SubServices";

export default function InfoCards() {

const [services, setServices] = useState(SubServicesAI)

  return (
   <>
    <div className="services-container" id="services">
      <div className="title">Services</div>
        <div className="description">
          We specialize in a wide range of services
        </div>
        <div className="services">
          <button onClick = {() => setServices(SubServicesAI)} className="services-btn">
            {/* <i className="fa fa-database"></i> */}
            <p className="card-title">Data & AI</p>
          </button>

          <button onClick = {() => setServices(SubServicesSD)} className="services-btn">
            {/* <i className="fas fa-tachometer-alt"></i> */}
            <p className="card-title">Software Development</p>
          </button>

          <button onClick = {() => setServices(SubServicesPOC)} className="services-btn">
            {/* <i className="fa fa-terminal"></i> */}
            <p className="card-title">Proof of Concept</p>
          </button>

          <button onClick = {() => setServices(SubServicesRD)} className="services-btn">
            {/* <i className="fas fa-laptop-code"></i> */}
            <p className="card-title">Applied R&D</p>
          </button>

          <button onClick = {() => setServices(SubServicesUXUI)} className="services-btn">
            {/* <i className="fa fa-code"></i> */}
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
