import React from "react";
import TeamCard from "./commonStructure/TeamCard";
import Rumyana from "../expert_img/Rumyana_Neykova.png"
import Alan from "../expert_img/Alan_Serrano_Rico.png"
import "../css/team.css";

export default function App() {
  return (
    <div className="team-container" id="team">
      <div className="team-header">
        <p className="team-title">Our Talents</p>
        <p className="team-description">
          our team ranges from a wide range of work experience
        </p>
      </div>
      <div className="team-cards">

        <TeamCard
          image={Alan}
          name="Alan Serrano Rico"
          work="CTO"
          description="Dr Alan Serrano-Rico is an experienced researcher, whose research lies in the domain of information systems and organisational strategy"
        />
        <TeamCard
          image={Rumyana}
          name="Rumyana Neykova"
          work="CTO"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />
        <TeamCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Ban Boro"
          work="CTO"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />

      </div>
    </div>
  );
}
