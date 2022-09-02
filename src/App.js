import React from "react";

import Navbar from "./components/Navbar";
import PageIntro from "./components/PageIntro";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Team from "./components/Team";
import Experts from "./components/Experts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import SubService from "./components/SubServices"
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <PageIntro />
      <About />
      {/* <InfoCards /> */}
      <Services />
      {/* <SubService /> */}
      {/* <CallToAction /> */}
      {/* <Testimonials />  */}
      <Team />
      <Experts />
      <Contact />
      <Footer />
    </>
  );
}

