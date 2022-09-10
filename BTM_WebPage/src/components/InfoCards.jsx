import React from "react";
import Card from "./commonStructure/Card";
import aim from "../css/images/Motivation_Outline.png"
import teams from "../css/images/Team presentation _Outline.png"
import student from "../css/images/Team work_Two Color.png"
import "../css/infoCards.css";

export default function InfoCards() {
  return (
    <div className="cards">
      <Card
        image={teams}
        title="Company Culture"
        // text="Our staff base is uniquely identifiable by our student talent and leading experts."
        text="Our talented students deliver projects guided by leading experts."
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