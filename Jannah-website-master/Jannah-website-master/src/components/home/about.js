import React, { Component, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUsSlide.css"; // Import your CSS file for styling
import ScrollReveal from 'scrollreveal';
import container from "../../assets/about/container.svg";
import globe from "../../assets/about/global.svg";
const ScrollRevealExample = () => {
    useEffect(() => {
      // Initialize ScrollReveal
      const sr = ScrollReveal();
  
      // Define the reveal configuration
      sr.reveal('.shipment', { // Apply the effect to elements with the "shipment" class
        origin: 'top',
        duration: 2000,
        distance: '30px',
        delay: 300,
      });
    }, []);
    useEffect(() => {
      // Initialize ScrollReveal
      const sr = ScrollReveal();
  
      // Define the reveal configuration
      sr.reveal('.globe', { // Apply the effect to elements with the "shipment" class
        origin: 'bottom',
        duration: 2000,
        distance: '30px',
        delay: 300,
      });
    }, []);
    useEffect(() => {
      // Initialize ScrollReveal
      const sr = ScrollReveal();
  
      // Define the reveal configuration
      sr.reveal('.about-content', { // Apply the effect to elements with the "shipment" class
        origin: 'left',
        duration: 2000,
        distance: '30px',
        delay: 300,
      });
    }, []);
  
    return (
        <div className="about-section">
    <Row>
                <Col md={5} className="about-content">
                    <p>ABOUT JANNAH</p>
                    <h1>WHO ARE WE</h1>
      <p>We're leaders in agro exports, cultivating quality and progress. We deliver excellence with high-quality rice, vegetable oils, wheat, maize, pulses, and sugar, setting new standards.</p>
<p>
At JANNAH, we're on a global mission to elevate agro trade. We blend expertise, ethical sourcing, and customer satisfaction, driving sustainable growth and shaping a brighter future
</p>

      </Col>
      <Col md={7} className="image-container ">
        <div className="overlap-images">
          <img src={container} className="shipment" alt="Container" />
          <img src={globe} className="globe" alt="Globe" />
        </div>
      </Col>
    </Row>
  </div>
    );
  };
  
  export default ScrollRevealExample;