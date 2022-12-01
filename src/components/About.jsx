import React from "react";

import SlideCard from "./commonStructure/SlideCard";
import "../css/about.css";
import InfoCards from "./InfoCards";
import "../css/infoCards.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../images/slide1-transformed.png'
import image2 from '../images/slide2.png'

const items = [

  <SlideCard
    image={image1}
    title='Percentage of highly cited paper in Computer Science Artifical intelligence'
    description='our university is acknowledged'
  />, 
  <SlideCard 
    image={image2}
    title="Computing professor one of the world's most highly cited researchers – nine years in a row"
    description='...'
  />
]

export default function App() {
  return (
    <div className="about" id="about">
      <div className="about-title">Why Choose Us</div>
      <InfoCards />

        <div className="about-container">
          <div className="about-image-container">
            <div className="about-image" />
          </div>
          <div className="about-text-container">
            <h2> Our vision </h2>
            <ul className="list">
              <li>To become a recognisable and viable IT consultancy known for its Research & Development services for West London businesses.</li>
              <li>
                We aspire to give 2% of the computer department’s student cohort the opportunity to be employed in BTM projects.
              </li>
              <li>
                We aim to expand this model to other university departments, such as design, business management, and mechanical engineering
              </li>
            </ul>
        </div>
      </div>

    {/* <div className='about-container'>
      <AliceCarousel
          mouseTracking
          items={items}
          // responsive={responsive}
          autoPlay
          autoPlayDirection="ltr"
          infinite
          autoPlayInterval={5600}
          animationDuration={1300}
        />
    </div> */}

    </div>
 
  );
}