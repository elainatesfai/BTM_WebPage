import React from "react";

import Navbar from "./components/Navbar";
import PageIntro from "./components/PageIntro";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Experts from "./components/Experts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <PageIntro />
      <About />
      <Services />
      <Team />
      <Experts />
      <Contact />
      <Footer />
    </>
  );
}

