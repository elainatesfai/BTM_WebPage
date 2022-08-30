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
        text="We are driven by our desire to form bonds between industry and our talented students."
      />

      <Card
        image={teams}
        title="Our Company Culture"
        text="Our staff base is uniquely identifiable by our student talent and leading experts."
      />

      <Card
        image={student}
        title="Our Competition"
        text="We beat our competition with viable prices, whilst matching their quality of work."
      />

    </div>
  );
}