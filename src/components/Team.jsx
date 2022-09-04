import React from "react";
import TalentCard from "./commonStructure/TalentCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "../css/team.css";

import Elaina from"../css/images/Talents/ElainaTesfai.png"
import Islam from"../css/images/Talents/IslamRaihan.png"
import Shrawani from"../css/images/Talents/ShrawaniMenghal.png"
import Thoybur from"../css/images/Talents/ThoyburRohman.png"
// import Shrawani from "../css/images/Talents/ShrawaniMenghal.png"

import Marwan from"../css/images/Talents/MarwanHajMohamed.png"

const items = [
  // <TalentCard
  //     image="https://purepng.com/public/uploads/large/businessman-onj.png"
  //     name="Phillip Bibik"
  //     work="Programmer"
  //     description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
  //     data-value="1"
  //   />,

  <TalentCard
    image={Islam}
    name="Islam Raihan"
    work="Front-end Developer"
    description="I am an enthusiastic individual who is fascinated by technology and its constant advancements.
          I am currently a junior developer at Glue Reply."
    data-value="2"
  />,

  // <TalentCard
  //   image="https://purepng.com/public/uploads/large/businessman-onj.png"
  //   name="Mandeep Singh"
  //   work="Programmer"
  //   description="Eveniet quaerat aspernatur illo natus modi vitae nam commodi obcaecati nostrum! Molestias officiis adipisci aliquid"
  //   data-value="3"
  // />,

  <TalentCard
    image={Thoybur}
    name="Thoybur Rohman"
    work="Programmer/Executive Team"
    description="I am strong-willed and strive to make my initial plans and prototypes a success regardless of the obstacles that stand in the way. This will facilitate me in becoming successful in this career."
    data-value="4"
  />,

  <TalentCard
    image={Elaina} alt="image"
    name="Elaina Tesfai"
    work="Programmer/Executive Team"
    description="I am a dependable, quick-thinking and responsible individual that thoroughly enjoys challenging myself and pushing the boundaries of what I can achieve."
    data-value="5"
  />,

  <TalentCard
    image={Marwan}
    name="Marwan Haj Mohamed"
    work="Front-end Developer"
    description="I am a passionate, quick learning individual that constantly pushes my boundaries to test my limits and earn more experience in this field."
    data-value="6"
  />,

  <TalentCard
    image={Shrawani}
    name="Shrawani Menghal"
    work="Data Analyst"
    description="I am a curious person, enthusiastic to learn how things around me work. I'm currently diving into the world of Data."
    data-value="7"
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
          autoPlayDirection="rtl"
          infinite
          autoPlayInterval={5000}
          animationDuration={1000}
        />
      </div>
    </div>
  );
}



