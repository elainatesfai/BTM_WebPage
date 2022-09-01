import React from "react";
import TalentCard from "./commonStructure/TalentCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "../css/team.css";

import Elaina from "../css/images/Talents/ElainaTesfai.png"
import Islam from "../css/images/Talents/IslamRaihan.png"

const items = [
      <TalentCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Phillip Bibik"
          work="Programmer"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
          data-value="1"
        />,
        
        <TalentCard
          image={Islam}
          name="Islam Raihan"
          work="Front-end Developer"
          description="I am an enthusiastic individual who is fascinated by technology and its constant advancements. 
          I am currently a junior developer at Glue Reply."
          data-value="2"
        />,

        <TalentCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Mandeep Singh"
          work="Programmer"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
          data-value="3"
        />,

        <TalentCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Thoybur Rohman"
          work="Programmer/Executive Team"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
          data-value="4"
        />,

        <TalentCard
          image={Elaina} alt="image"
          name="Elaina Tesfai"
          work="Programmer/Executive Team"
          description="I am a dependable, quick-thinking and responsible individual that thoroughly enjoys challenging myself and pushing the boundaries of what I can achieve. Currently, I am, also, a first year undergraduate Computer Science student."
          data-value="5"
        />,

        <TalentCard
          image="https://purepng.com/public/uploads/large/businessman-onj.png"
          name="Marwan Haj Mohamed"
          work="Front-end Developer"
          description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
          data-value="6"
        />
]

const responsive = {
  0: { items: 1 },
  568: { items: 2},
  1000: { items: 3 }
};

export default function App() {
  
  return (
    <div className="talents" id="talents">
      <div className="talent-title">Our Talents</div>
      <p className="talent-description">
        our team ranges from a wide range of work experience
      </p>

      <div className="talent-card-container">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          infinite
          autoPlayInterval={5000}
          animationDuration={1000}
        />
      </div>
    </div>
  );
}
