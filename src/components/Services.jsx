import React from "react";
import ServiceCard from "./commonStructure/ServiceCard";

import "../css/services.css";

export default function InfoCards() {
  return (
    <div className="services-container" id="services">
      <div className="title">Services</div>
      <div className="description">
        We specialize in a wide range of services

      </div>
      <div className="services">

        <ServiceCard
          icon="fas fa-laptop-code"
          title="Data Analysis and AI"
          text="Demonstrate POCs through the deployment of sectionalised software development specifically on artificial intelligences software."
        />

        <ServiceCard
          icon="fa fa-database"
          title="Data and AI"
          text="Our experts use their industrial experience and academic rigour to
          find meaning in data gathered from social channels to support business decisions"
        />
        <ServiceCard
          icon="fas fa-tachometer-alt"
          title="Software Development"
          text="We develop fully functional mobile applications in Android and IOS using agile methodologies,
          allowing a collaborative environment with our customers."
        />
        <ServiceCard
          icon="fa fa-terminal"
          title="Applied R&D"
          text="We help organisations to answer R&D questions related to IT that can be found in our international bank of scientific literature sources.
           Our PG students and experts are well equipped to dig out the information you need and present it in a report for the layperson.."
        />
        <ServiceCard
          icon="fa fa-code"
          title="UX & UI Design"
          text="
          It includes a person's perceptions of utility, ease of use, and efficiency. Our talented students and experts will help you to
           design and develop experiences,
           products, and services of high quality with digital media at their core."
        />

      </div>
    </div>
  );
}
