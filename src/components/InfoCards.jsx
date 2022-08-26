import React from "react";
import Card from "./commonStructure/Card";
import aim from "../css/images/Target_Outline.png"
import teams from "../css/images/Team work_Two Color.png"
import student from "../css/images/School_Outline.png"
import "../css/infoCards.css";

export default function InfoCards() {
  return (
    <div className="cards">
      <Card
        image={aim}
        title="Our Initiative"
        text="We are not a profit-driven organisation. Instead, we aim to foster better relations between our customers, lead scientists, and talented students"
      />

      <Card
        image={student}
        title="Our Talent"
        text="Our talented students are hand-picked based on their grades and, more importantly, on their soft skills demonstrated throughout
        the year in labs, classes, teamwork, and other face-to-face interactions."
      />

      <Card
        image={teams}
        icon="fa fa-users"
        title="Our Company Culture"
        text="Our staff base is our talented students who work side to side with our world-leading specialists to deliver on time and with utmost quality.."
      />
    </div>
  );
}
