import React from "react";
import TalentCard from "./commonStructure/TalentCard";

import "../css/team.css";

import Elaina from "../css/images/Talents/ElainaTesfai.png"
import Islam from "../css/images/Talents/IslamRaihan.png"

export default function App() {
  return (
    <div className="talent-container" id="talent">
      <div className="talent-header">
        <p className="talent-title">Our Talents</p>
        <p className="talent-description">
          our team ranges from a wide range of work experience
        </p>
      </div>
      <div className="talent-cards">

        <TalentCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Phillip Bibik"
          work="Programmer"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />
        <TalentCard
          image={Islam}
          name="Islam Raihan"
          work="Front-end Developer"
          description="I am an enthusiastic individual who is fascinated by technology and its constant advancements. 
          I am currently a junior developer at Glue Reply."
        />
        <TalentCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Mandeep Singh"
          work="Programmer"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />

        <TalentCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Thoybur Rohman"
          work="Programmer/Executive Team"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />

        <TalentCard
          image={Elaina} alt="image"
          name="Elaina Tesfai"
          work="Programmer/Executive Team"
          description="I am a dependable, quick-thinking and responsible individual that thoroughly enjoys challenging myself and pushing the boundaries of what I can achieve. Currently, I am, also, a first year undergraduate Computer Science student."
        />

        <TalentCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Marwan Haj Mohamed"
          work="Front-end Developer"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
        />

      </div>
    </div>
  );
}
