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
        image={teams}
        title="Company Culture"
        // text="Our staff base is uniquely identifiable by our student talent and leading experts."
        text="Our talented students deliver projects guided by leading experts."
      />

      <Card
        image={aim}
        title="Competitive Prices"
        text="We are a non-profit organisation providing quality services for a fraction of the industry price."
      />

      <Card
        image={student}
        title="Community Impact"
        text="We beat our competition with viable prices, whilst matching their quality of work."
      />

    </div>
  );
}