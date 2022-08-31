import React from "react";
import ExpertsCard from "./commonStructure/ExpertsCard";

import "../css/experts.css";
import Alan from "../expert_img/Alan_Serrano_Rico.png"
import Rumyana from "../expert_img/Rumyana_Neykova.png"
import Alaa from "../expert_img/Alaa_Marshan.png"
import Alina from "../expert_img/Alina_Miron.png"
import David from "../expert_img/David_Bell.png"
import Guiseppe from "../expert_img/Giuseppe_Destefanis.png"
import Stephen from "../expert_img/Stephen_Swift.png"
import Mahir from "../expert_img/Mahir_Arzoky.png"
import Timothy from "../expert_img/Timothy_Cribbin.png"
import Kate from "../expert_img/Kate_Hone.png"
import Derek from "../expert_img/Derek_Groen.png"

export default function App() {
  return (
    <div className="experts-container" id="experts">
      <div className="experts-header">
        <p className="experts-title">Our Experts</p>
        <p className="experts-description">
          our team ranges from a wide range of work experience
        </p>
      </div>
      <div className="experts-cards">

        <ExpertsCard
          image={Alan}
          name="Alan Serrano Rico"
          work="Director/R&D Expert"
          description="My research has mainly focused on applying scientific research to real-life challenges organisations face when adopting ICT. 
          As the founder and director of BTM, I am keen on developing better, closer relationships between industry, academia, and our talented students. "
        />

        <ExpertsCard
          image={Alaa}
          name="Alaa Marshal"
          work="AI Expert"
          description="My research primarily focuses on intelligent data analysis, information management and improving operational business information systems. 
          This is reinforced by my 10+ years’ experience working in various IT positions at corporations such as the BMW group."
        />

        <ExpertsCard
          image={Alina}
          name="Alina Miron"
          work="AI Expert"
          description="I am an accomplished artificial intelligence researcher and developer with excellent understanding of data. 
          This is consolidated by my PhD in Machine Learning. Furthermore, I have a strong background in computer vision, natural language processing and data science."
        />

        <ExpertsCard
          image={Stephen}
          name="Stephen Swift"
          work="AI Expert "
          description="My research interests span across multi-variate time series analysis, heuristic search, data clustering and evolutionary computation. On top of that, 
          I have applied research in various real-world areas including Engineering, Bioinformatics and Health Care. "
        />

        <ExpertsCard
          image={Mahir}
          name="Mahir Arzoky"
          work="AI Expert "
          description="My interest corresponds with intelligent data analysis, heuristic search, search-based software engineering and data clustering & database refactoring. 
          Furthermore, I am a member of FIAR-NER, which promotes collaborations between industry and academia."
        />

        <ExpertsCard
          image={Rumyana}
          name="Rumyana Neykova"
          work="Software Engineering Expert"
          description="My body of work builds on the foundations of cryptocurrency theory and type systems. Furthermore, I have accumulated years of industrial 
          experience working as a software developer in companies and corporations such as Microsoft. "
        />

        <ExpertsCard
          image={Derek}
          name="Derek Groen"
          work="Applied R&D Expert"
          description="NOTHING YET"
        />

        <ExpertsCard
          image={David}
          name="David Bell"
          work="Applied R&D Expert"
          description="I am a multi-disciplinary researcher, who has applied novel digital service solutions in varying domains (including a range of health setting).
          Furthermore, I have industrial experience working for several small to large software development companies."
        />

        <ExpertsCard
          image={Guiseppe}
          name="Giuseppe Destefanis"
          work="Software Engineering Expert"
          description="The focal areas of my research revolve around mining software repositories, empirical software engineering, agile methodologies, 
          software metrics & patterns, and blockchain. Also, I have 15+ years’ experience working as a consultant and affiliate researcher."
        />

        <ExpertsCard
          image={Timothy}
          name="Timothy Cribbin"
          work="UI Expert"
          description="My expertise and interests lie in the realm of researching new methods and applications of visual text analytics in multiple diverse areas. 
          Over the course of my career, I have also participated in several funded projects in which I have consolidated my research."
        />

        <ExpertsCard
          image={Kate}
          name="Kate Hone"
          work="UI Expert"
          description="I am a highly experienced academic leader whose research particularly focuses on the human factor implications of using speech and emotion within system design. 
          I have incorporated this research into many projects such as the Millennium Homes project as well as many others."
        />

      </div>
    </div>
  );
}
