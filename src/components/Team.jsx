import React from "react";
import TalentCard from "./commonStructure/TalentCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
 
import "../css/team.css";
 
import Islam from"../images/Talents/IslamRaihan.png"
import Thoybur from"../images/Talents/ThoyburRohman.png"
import Elaina from"../images/Talents/ElainaTesfai.png"
import Marwan from"../images/Talents/MarwanHajMohamed.png"
import Shrawani from "../images/Talents/ShrawaniMenghal.png"
import Samuel from "../images/Talents/SamuelAsareBotwe.png"
import Ritu from "../images/Talents/RituGulia.png"
 
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
    linkedIn="https://www.linkedin.com/in/islam-raihan-714784195/"
    data-value="1"
 
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
    linkedIn="https://www.linkedin.com/in/thoybur/"
    data-value="2"
  />,
 
  <TalentCard
    image={Elaina} alt="image"
    name="Elaina Tesfai"
    work="Front-end Developer/Executive Team"
    description="I am a dependable, quick-thinking and responsible individual that thoroughly enjoys challenging myself and pushing the boundaries of what I can achieve."
    linkedIn="https://www.linkedin.com/in/elaina-tesfai-213a19243/"
    data-value="3"
  />,
 
  <TalentCard
    image={Marwan}
    name="Marwan Haj Mohamed"
    work="Front-end Developer/Executive Team"
    description="I am a passionate, quick learning programmer that constantly broaden my knowledge in different languages to earn more experience in this field."
    linkedIn="https://www.linkedin.com/in/marwan-haj-mohamed-305578218/"
    data-value="4"
  />,
 
  <TalentCard
    image={Shrawani}
    name="Shrawani Menghal"
    work="Data Analyst"
    description="I am a curious person, enthusiastic to learn how things around me work. I'm currently diving into the world of Data."
    linkedIn="https://www.linkedin.com/in/shrawanimenghal/"
    data-value="5"
  />,

  <TalentCard
    image={Samuel}
    name=" Samuel Asare Botwe"
    work="Data Analyst"
    description="I am a very motivated data analyst and computer programmer that is willing to learn and use their skills to provide problem-solving strategies and applications."
    linkedIn="https://www.linkedin.com/in/shrawanimenghal/"
    data-value="6"
  />,

  <TalentCard
    image={Ritu}
    name="Ritu Gulia"
    work="Data Analyst"
    description="“I enjoy problem-solving and am passionate about learning and diving deeper into data. I am highly imaginative and eager to learn, which helps me make challenging judgements. "
    linkedIn="https://www.linkedin.com/in/shrawanimenghal/"
    data-value="7"
  />
]
 
const responsive = {
  0: { items: 1 },
  // 568: { items: 2},
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
          autoPlayInterval={2800}
          animationDuration={1300}
        />
      </div>
    </div>
  );
}
