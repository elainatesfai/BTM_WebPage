import React from "react";
import Card from "./commonStructure/Card";
import aim from "../images/Motivation_Outline.png"
import teams from "../images/Team presentation _Outline.png"
import student from "../images/Team work_Two Color.png"
import "../css/infoCards.css";
 
export default function InfoCards() {
  return (
    <div className="cards">
      <Card
        image={teams}
        title="Company Culture"
        text="Our workforce is fully comprised of talented students led by our experts."
      />
      <Card
        image={student}
        title="Community Impact"
        text="Our IT and R&D services are designed to advance SMEs, Start-ups and Large businesses in West London."
      />
 
      <Card
        image={aim}
        title="Competitive Prices"
        text="We provide quality services without the industry’s profit margins"
      />
    </div>
  );
}