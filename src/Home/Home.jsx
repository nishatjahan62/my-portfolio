import React from "react";
import Hero from "../components/Hero/Hero";
import AboutMe from "../Pages/Sections/AboutMe";
import Skills from "../Pages/Sections/Skills";
import Projects from "../Pages/Sections/Projects";
import Contact from "../Pages/Sections/Contact";

const Home = () => {
  return (
    <div className="">
      <div id="hero">
        <Hero></Hero>
      </div>
      <div id="about-me">
        <AboutMe></AboutMe>
      </div>
      <div  id="skills">
        <Skills></Skills>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
