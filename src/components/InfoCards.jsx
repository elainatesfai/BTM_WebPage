import React from "react";
import Card from "./commonStructure/Card";


import "../css/infoCards.css";

export default function InfoCards() {
  return (
    <div className="cards">
      <Card
        icon= "fas fa-crosshairs"
        title="Our Initiative"
        text="We are not a profit-driven organisation. Instead, we aim to foster better relations between our customers, lead scientists, and talented students"
      />

      <Card
        icon="fas fa-graduation-cap"
        title="Our Talent"
        text="Our talented students are hand-picked based on their grades and, more importantly, on their soft skills demonstrated throughout
        the year in labs, classes, teamwork, and other face-to-face interactions."
      />

      <Card
        icon="fa fa-users"
        title="Our Company Culture"
        text="Our staff base is our talented students who work side to side with our world-leading specialists to deliver on time and with utmost quality.."
      />
    </div>
  );
}
