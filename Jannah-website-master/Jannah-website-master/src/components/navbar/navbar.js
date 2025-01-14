import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo/logo_noBG.svg";
function Navbarfunction() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
    }
    const [showProducts, setShowProducts] = useState(false);

    const toggleProducts = () => {
      setShowProducts(!showProducts);
    };

  window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
      <Navbar.Brand href="/" className="d-flex align-items-center">
  <img src={logo} className="img-fluid logo" alt="brand" />
  <h1 className="mb-0 ml-2">JANNAH</h1>
</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                HOME
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                ABOUT US
              </Nav.Link>
            </Nav.Item>
                      <NavDropdown title="OUR PRODUCTS"
                      show={showProducts}
                      onMouseEnter={toggleProducts}
                          onMouseLeave={toggleProducts}
                          id="products-dropdown">
      <NavDropdown.Item as={Link} to="/" onClick={() => updateExpanded(false)}>Rice</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/" onClick={() => updateExpanded(false)}>Wheat</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/" onClick={() => updateExpanded(false)}>Sugar</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/" onClick={() => updateExpanded(false)}>Dates</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/" onClick={() => updateExpanded(false)}>Fruits & Vegetables</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/" onClick={() => updateExpanded(false)}>Fertilizers</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/" onClick={() => updateExpanded(false)}>Lithium Spodumene</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/" onClick={() => updateExpanded(false)}>Spare Parts</NavDropdown.Item>
    </NavDropdown>
                      
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                CONTACTS
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbarfunction;
