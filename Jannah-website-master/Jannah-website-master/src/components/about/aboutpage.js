import React,{useEffect} from "react";
import "./aboutpage.css";
import Card from "./peopleCard";
import { Row, Col, Container } from "react-bootstrap";
import ScrollReveal from 'scrollreveal';
import earth from "../../assets/animation/earth.png";
import person from "../../assets/dpSample.png";
import ship from "../../assets/animation/ship.png";
function AboutPage() {

  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Define the reveal configuration
    sr.reveal('.aboutpage-animation', { // Apply the effect to elements with the "shipment" class
      origin: 'top',
      duration: 1000,
      distance: '10px',
      delay: 200,
    });
  }, []);
  
    return (
      <div className="aboutpage-animation">
            
     
    <div fluid className="aboutpage">
      <h1>About Our Company</h1>

      <div fluid className="aboutpage-content ">
        <Row
          style={{
            justifyContent: "center",
            padding: "40px",
            textAlign: "left",
          }}
        >
          <Col md="6" id="quote">
            
          </Col>
              <Col md="6">
              <p style={{ padding: "0px" }}>ABOUT JANNAH</p>
            <h1 >
              Explore endless possibilities in trading with our diverse range of
              products and services.
            </h1>
            <p>
              JROUP has made a name for itself as a leading player in the global
              agro export market, with a strong presence in the Middle East,
              Far-East, South-East Asia, Africa and South American countries. We
              are committed to expanding the agricultural commodities industry
              and take great pride in our export of high quality rice, vegetable
              oils, wheat, maize, pulses, and sugar. Our products serve as a
              testament to the high standards and quality approach that we bring
              to our business.
            </p>
          </Col>
        </Row>
      </div>
    </div>
            <div className="animation">
            <img src={earth} className="earth" alt="earth" />
            <img src={ship} className="ship" alt="ship" />
            {/* <img src={airplane} className="airplane" alt="airplane" /> */}
        </div>
        <div className='extra-in'>
          <div className='extra'>
                <h1>PROVIDE YOU THE HIGHEST QUALITY PRODUCTS THAT MEETS YOUR EXPECTATION</h1>
                </div>
        </div>
        <div className="team">
            <p>OUR TEAM MEMBERS</p>
          <h1>MEET OUR TEAM</h1>
          <Container>

          <Row >
        <Col md={3}>
          {/* Use the Card component and pass the required props */}
          <Card title="Mr. Who why What" position="Founder" imageSrc={person} />
        </Col>
        <Col md={3}>
          <Card title="Mr. Who why What"  position="CEO" imageSrc={person} />
        </Col>
        <Col md={3}>
          <Card title="Mr. Who why What"  position="Director of board member" imageSrc={person} />
        </Col>
        <Col md={3}>
          <Card title="Mr. Who why What"  position="Chairman" imageSrc={person} />
        </Col>
          </Row>
          
          </Container>
        </div>
            </div>
  );
}
export default AboutPage;
