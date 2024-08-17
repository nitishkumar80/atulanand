import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import './About.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About() {

  let text = useRef(null);

  useEffect(() => {
    gsap.to(text, {
      delay: 0.4,
      duration: 1,
      x: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: text,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete',
      },
    });
  }, []);

  return (
    <div className="feautures">
      <div className="feautures--container">
       
          <h2>About</h2>
          <div className="about--content" ref={el => { text = el }}>
        <p>
          ARS Kreedashala Pvt Ltd is an Indian sports education organization founded by sports enthusiasts with a shared vision: integrating sports into every child's education. They have built a structured Sports and Physical Education (P.E) curriculum based on the recognized NASPE Standards (National Association for Sports & Physical Education). This curriculum aims to develop a healthier and fitter generation through high-quality sports education.
        </p>
        <p>
          Our mission is to provide every grassroots player with the opportunity to enhance their skills in the early stages of their sports career. We have identified a gap in the market where basic skill development and static training are not being addressed by sports schools or academies. Our solution is to offer personalized training with the help of IT support to ensure every athlete reaches their full potential. Our ultimate goal is to create a significant impact in the sports industry by winning the maximum number of medals in the Olympic Games.
        </p>
      </div>
         
        </div>


      </div>

    
  
  );
};
