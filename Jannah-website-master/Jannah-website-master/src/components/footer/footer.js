import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import "./footer.css";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="footer-body">
        <Col md="4" className="footer-copywright">
          <div className="about">
            <h2>ABOUT</h2>
            <p>
              JANNAH has established itself as a trusted, longterm partner in
              the commodity market.
            </p>
          </div>
        </Col>
        <Col md="4" className="footer-copywright">
          <div className="about">
            <h2>EXPLORE</h2>
            <ul className="footer-icons">
              <li>
                <a
                  href="/"
                  style={{ color: "#FAEBCC", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{ color: "#FAEBCC", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About US
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{ color: "#FAEBCC", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col md="4" className="footer-copywright">
          <div className="about">
            <h2>CONTACT</h2>
            <ul style={{ listStyleType: "none" }}>
              <li>address,city</li>
              <li>specific address</li>
              <li>
                <b>gmail@gamil.com</b>
              </li>
              <li>
                <b>+9182947398</b>
                          </li>
                          
                          <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
                              </a>
              <a
                href="https://www.instagram.com/soumyajit4419"
                
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
                              </a>
              <a
                href="https://www.instagram.com/soumyajit4419"
                
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter/>
                              </a>
                              </li>
            </ul>
            
          </div>
        </Col>
      </Row>
<hr style={{ color: "gold"}}></hr>
      <Row>
        <Col md="12" className="footer-copywright">
          <h3>Copyright © {year} All Rights Reserved.</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
