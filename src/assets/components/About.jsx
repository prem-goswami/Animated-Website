import React from "react";
import "./components-css/About.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=1000 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".aboutImage", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="about-section">
      <div className="about-text-container">
        <h2>Welcome to Zentry</h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt5-text-center"
        />

        <div className="about-subtext" id="about-subText-id">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms </p>
        </div>
      </div>
      <div id="clip" className="clip">
        <div className="aboutImage">
          <img src="/img/about.webp" alt="background" />
        </div>
      </div>
    </div>
  );
};

export default About;
