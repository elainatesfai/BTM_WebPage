import React from "react";
import ExpertsCard from "./commonStructure/ExpertsCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
 
import "../css/experts.css";
import Alan from "../images/Experts/Alan_Serrano_Rico.png"
import Rumyana from "../images/Experts/Rumyana_Neykova.png"
import Alaa from "../images/Experts/Alaa_Marshan.png"
import Alina from "../images/Experts/Alina_Miron.png"
import David from "../images/Experts/David_Bell.png"
import Giuseppe from "../images/Experts/Giuseppe_Destefanis.png"
import Stephen from "../images/Experts/Stephen_Swift.png"
import Mahir from "../images/Experts/Mahir_Arzoky.png"
import Timothy from "../images/Experts/Timothy_Cribbin.png"
import Kate from "../images/Experts/Kate_Hone.png"
import Derek from "../images/Experts/Derek_Groen.png"
import Isabel from "../images/Experts/Isabel_Sasoon.png"
 

const items = [
  <ExpertsCard
          image={Alan}
          name="Alan Serrano-Rico"
          work="Director/R&D Expert"
          description="My research has mainly focused on applying scientific research to real-life challenges organisations face when adopting ICT.
          As the founder and director of BTM, I am keen on developing better, closer relationships between industry, academia, and our talented students. "
          linkedIn="https://www.linkedin.com/in/alan-serrano-6634456/"
          profile="https://www.brunel.ac.uk/people/alan-serrano"
        />,
 
        <ExpertsCard
          image={Alina}
          name="Alina Miron"
          work="AI Expert"
          description="I am an accomplished artificial intelligence researcher and developer with excellent understanding of data.
          This is consolidated by my PhD in Machine Learning. Furthermore, I have a strong background in computer vision, natural language processing and data science."
          linkedIn=""
          profile="https://www.brunel.ac.uk/people/alina-miron"
        />,
 
        <ExpertsCard
          image={Stephen}
          name="Stephen Swift"
          work="AI Expert "
          description="My research interests span across multi-variate time series analysis, heuristic search, data clustering and evolutionary computation. On top of that,
          I have applied research in various real-world areas including Engineering, Bioinformatics and Health Care. "
          linkedIn="https://www.linkedin.com/in/stephen-swift-5959253/"
          profile="https://www.brunel.ac.uk/people/stephen-swift"
        />,
 
        <ExpertsCard
          image={Mahir}
          name="Mahir Arzoky"
          work="AI Expert "
          description="My interest corresponds with intelligent data analysis, heuristic search, search-based software engineering and data clustering & database refactoring.
          Furthermore, I am a member of FIAR-NER, which promotes collaborations between industry and academia."
          linkedIn=""
          profile="https://www.brunel.ac.uk/people/mahir-arzoky"
        />,
 
        <ExpertsCard
          image={Alaa}
          name="Alaa Marshan"
          work="Data Science Expert"
          description="My research primarily focuses on intelligent data analysis, information management and improving operational business information systems.
          This is reinforced by my 10+ years’ experience working in various IT positions at corporations such as the BMW group."
          linkedIn="https://www.linkedin.com/in/alaamarshan/"
          profile="https://www.brunel.ac.uk/people/alaa-marshan1"
        />,
 
        <ExpertsCard
          image={Isabel}
          name="Isabel Sasoon"
          work="Data Science Expert"
          description="My research interests are in data science, data-driven automated reasoning, and its transparency and explainability. Isabel has over 10 years' of industry experience working as a data scientist in various verticals including Health, Public Sector and Telecoms."
          linkedIn="https://www.linkedin.com/in/isabel-sassoon-phd-18437a1/"
          profile="https://www.brunel.ac.uk/people/isabel-sassoon"
        />,
 
        <ExpertsCard
          image={Rumyana}
          name="Rumyana Neykova"
          work="Software Engineering Expert"
          description="My body of work builds on the foundations of cryptocurrency theory and type systems. Furthermore, I have accumulated years of industrial
          experience working as a software developer in companies and corporations such as Microsoft. "
          linkedIn="https://www.linkedin.com/in/rumineykova/"
          profile="https://www.brunel.ac.uk/people/rumyana-neykova"
        />,
 
        <ExpertsCard
          image={Derek}
          name="Derek Groen"
          work="Applied R&D Expert"
          description="I am an interdisplinary researcher who focuses primarily on multiscale modelling and high-performance computing, but takes along some major
          challenges that surroung these topics."
          linkedIn="https://www.linkedin.com/in/derek-groen-126a9a10/"
          profile="https://www.brunel.ac.uk/people/derek-groen"
        />,
 
        <ExpertsCard
          image={David}
          name="David Bell"
          work="Applied R&D Expert"
          description="I am a multi-disciplinary researcher, who has applied novel digital service solutions in varying domains (including a range of health setting).
          Furthermore, I have industrial experience working for several small to large software development companies."
          linkedIn="https://www.linkedin.com/in/drdavidbell/"
          profile="https://www.brunel.ac.uk/people/david-bell"
        />,
 
        <ExpertsCard
          image={Giuseppe}
          name="Giuseppe Destefanis"
          work="Software Engineering Expert"
          description="The focal areas of my research revolve around mining software repositories, empirical software engineering, agile methodologies,
          software metrics & patterns, and blockchain. Also, I have 15+ years’ experience working as a consultant and affiliate researcher."
          linkedIn="https://www.linkedin.com/in/giuseppe-destefanis-2b301813/"
          profile="https://www.brunel.ac.uk/people/giuseppe-destefanis"
        />,
 
        <ExpertsCard
          image={Timothy}
          name="Timothy Cribbin"
          work="UI Expert"
          description="My expertise and interests lie in the realm of researching new methods and applications of visual text analytics in multiple diverse areas.
          Over the course of my career, I have also participated in several funded projects in which I have consolidated my research."
          linkedIn="https://www.linkedin.com/in/timothy-cribbin-44476b171/"
          profile="https://www.brunel.ac.uk/people/timothy-cribbin"
        />,
 
        <ExpertsCard
          image={Kate}
          name="Kate Hone"
          work="UI Expert"
          description="I am a highly experienced academic leader whose research particularly focuses on the human factor implications of using speech and emotion within system design.
          I have incorporated this research into many projects such as the Millennium Homes project as well as many others."
          linkedIn="https://www.linkedin.com/in/kate-hone-94616513/"
          profile="https://www.brunel.ac.uk/people/kate-hone"
        />
]
 
const responsive = {
0: { items: 1 },
// 568: { items: 2},
1000: { items: 3 }
};
 
export default function App() {
  return (
    <div className="experts" id="experts">
      <div className="experts-title">Our Experts</div>
      <p className="experts-description">
        our team ranges from a wide range of work experience
      </p>
 
      <div className="experts-card-container">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          infinite
          autoPlayInterval={2800}
          animationDuration={1300}
        />
      </div>
    </div>
  );
}