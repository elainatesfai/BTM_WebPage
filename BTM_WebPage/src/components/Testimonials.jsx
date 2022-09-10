import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import TestimonialCard from "./commonStructure/TestimonialCard";
import "../css/testimonials.css";

const items = [
  <TestimonialCard
    testimony="TEXT TO BE ADDED"
    image="https://randomuser.me/api/portraits/men/32.jpg"
    name="NAME"
    work="WORK"
    data-value="1"
  />,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1000: { items: 3 }
};

export default function App() {
  return (
    <div id="testimonials">
      <div className="testimonials-title">Testimonials</div>
      <p className="testimonials-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, tenetur.
      </p>
      <div className="testimonial-container">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          infinite
          autoPlayInterval={1000}
          animationDuration={1000}
        />
      </div>
    </div>
  );
}
