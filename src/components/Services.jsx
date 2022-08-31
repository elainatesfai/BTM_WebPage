import React, { useState } from "react";
import ServiceCard from "./commonStructure/ServiceCard";
import {animated, useSpring} from "react-spring"
import SubServiceCard from "./commonStructure/SubServiceCard";

import "../css/services.css";
import "../css/subServices.css";

export default function InfoCards() {
  const Show = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
      <div>
        <SubServiceCard 
          icon="fas fa-tachometer-alt"
          title="Mobile Apps"
          text="We develop fully functional mobile applications in Android and IOS using agile methodologies,
          allowing a collaborative environment with our customers."
          type="submit" value="Show" onClick={onClick} />
        { showResults ? <software-development-subservices /> : null }
      </div>
    )
  }
  
  const Results = () => (

    <div className="software-development-subservices" id="software-development-subservices">
                

                <SubServiceCard 
                    icon="fas fa-tachometer-alt"
                    title="Web Development"
                    text="Our talented students are well equipped to drive the building and creation of websites, 
                    including aspects of web design, web publishing, web programming, and database management."
                />

                <SubServiceCard 
                    icon="fas fa-tachometer-alt"
                    title="API"
                    text="We design and deploy application programming interfaces that enable applications to integrate with each other. 
                    Generating a culture of transparency, leading to data-sharing and information flowing."
                />
            </div>

    // <div id="results" className="search-results">
    //   Some Results
    // </div>
  )
  


  return (
   <>
    <div className="services-container">
      <div className="title">Services</div>
        <div className="description">
          We specialize in a wide range of services
        </div>
        <div className="services">
            <ServiceCard id='D&AI'
              icon="fa fa-database"
              title="Data and AI"
            />
            
            <ServiceCard
              icon="fas fa-tachometer-alt"
              title="Software Development"
            />

            <ServiceCard
              icon="fa fa-terminal"
              title="Proof of Concept"
            />

            <ServiceCard
              icon="fas fa-laptop-code"
              title="Applied R&D"
            />

            <ServiceCard
              icon="fa fa-code"
              title="UX & UI Design"
            />

        </div>
      </div>
   </> 
  )

}

// export default function InfoCards() {
//   return (
//     <div className="services-container" id="services">
//       <div className="title">Services</div>
//       <div className="description">
//         We specialize in a wide range of services

//       </div>
//       <div className="services">

//         <ServiceCard id='D&AI'
//           icon="fa fa-database"
//           title="Data and AI"
//         />

//         <ServiceCard
//           icon="fas fa-tachometer-alt"
//           title="Software Development"
//         />

//         <ServiceCard
//           icon="fa fa-terminal"
//           title="Proof of Concept"
//         />

//         <ServiceCard
//           icon="fas fa-laptop-code"
//           title="Applied R&D"
//         />

//         <ServiceCard
//           icon="fa fa-code"
//           title="UX & UI Design"
//         />

//       </div>
//     </div>
//   );
// }
