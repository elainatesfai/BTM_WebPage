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
import Timothy from "../expert_img/Timothy_Cribbin.png"
import Kate from "../expert_img/Kate_Hone.png"
import Derek from "../expert_img/Kate_Hone.png"

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
          description="Dr Alan Serrano-Rico is an experienced researcher, whose research lies in the domain of information systems and organisational strategy. More specifically he has an interest in incorporating his research and applying them into real-life challenges organisations may face when adopting ICT in complex environments. Some examples of the collaborations with industry includes that of the BMW Group in UK."
        />

        <ExpertsCard
          image={Alaa}
          name="Alaa Marshal"
          work="AI Expert"
          description="Dr Alaa Marshaan is a skilled researcher, who primarily focuses his research on intelligent data analysis, information management and improving operational business information systems. Furthermore, he has garnered 10+ years’ experience working in various IT positions at corporations such as the UK branch of the BMW Group."
        />

        <ExpertsCard
          image={Alina}
          name="Alina Miron"
          work="AI Expert"
          description="NOTHING FOUND YET"
        />

        <ExpertsCard
          image={Stephen}
          name="Stephen Swift"
          work="AI Expert "
          description="Dr Stephen Swift is a researcher, whose interests spans across multi-variate time series analysis, heuristic search, data clustering and evolutionary computation. He has applied his research to various real-world areas including Engineering, Bioinformatics and Health Care. In terms of industry, he also spent 4 years working as a Web Designer, Programmer, and Technical Architect at several companies such as Bull Information Systems Ltd."
        />

        <ExpertsCard
          image={Rumyana}
          name="Rumyana Neykova"
          work="Software Engineering Expert"
          description="Over the course of her career, Dr Rumyana Neykova has become an accomplished researcher. Her body of work builds on the foundations of cryptocurrency theory and type systems. Furthermore, she has accumulated years of industrial experience working as a software developer in companies and corporations such as Microsoft."
        />

        <ExpertsCard
          image={Derek}
          name="Derek Groen"
          work="Applied R&D Expert"
          description="Dr David Bell is a multi-displinary researcher, who has applied novel digital service solutions in a range of varying domains (including a range of health settings). Furthermore, he has worked for several small to large software development companies. Including that of an investing banking firm, to which he became the technology director."
        />

        <ExpertsCard
          image={David}
          name="David Bell"
          work="Applied R&D Expert"
          description="Dr David Bell is a multi-displinary researcher, who has applied novel digital service solutions in a range of varying domains (including a range of health settings). Furthermore, he has worked for several small to large software development companies. Including that of an investing banking firm, to which he became the technology director."
        />

        <ExpertsCard
          image={Guiseppe}
          name="Giuseppe Destefanis"
          work="Software Engineering Expert"
          description="Dr Giuseppe Destefanis is a researcher, whose focal areas revolve around mining software repositories, empirical software engineering, agile methodologies, software metrics & patterns, and blockchain & cryptocurrencies. Furthermore, He has 15+ years’ experience, working as a consultant and research affiliate several different companies, such as UCL Centre for Blockchain Technologies (CBT)."
        />

        <ExpertsCard
          image={Timothy}
          name="Timothy Cribbin"
          work="UI Expert"
          description="Dr Timothy Cribbin is a researcher, whose primary expertise and interests lies in the realm of visual text analytics. Over the course of his career, he has worked on several funded projects. To which, he has consolidated using his research. Some include the likes of researching new methods and applications of visual text analytics in multiple diverse areas."
        />

        <ExpertsCard
          image={Kate}
          name="Kate Hone"
          work="UI Expert"
          description="TO BE ADDED"
        />

      </div>
    </div>
  );
}
