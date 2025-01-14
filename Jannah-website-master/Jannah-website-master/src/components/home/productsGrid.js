import React, { useEffect }  from "react";
import ScrollReveal from 'scrollreveal';
import { Container, Row, Col } from "react-bootstrap";
import Card from "../productCard";
import dates from "../../assets/products/mini/dates.png"
import rice from "../../assets/products/mini/rice.png"
import fruit from "../../assets/products/mini/fruit.png"
import wheat from "../../assets/products/mini/wheat.png"
import sugar from "../../assets/products/mini/sugar.png"
import lithium from "../../assets/products/mini/lithium.png"
import spare from "../../assets/products/mini/spare.png"
import fertilizer from "../../assets/products/mini/fertilizer.png"
function Grid(props) {
    const { title, imageSrc } = props;
    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal();
    
        // Define the reveal configuration
        sr.reveal('.product-grid', { // Apply the effect to elements with the "shipment" class
          origin: 'top',
          duration: 2000,
          distance: '30px',
          delay: 300,
        });
      }, []);

    return (
        <section className="product-grid" style={{padding:'150px'}}>
            <p>WHAT WE DO</p>
            <h1>OUR PRODUCTS</h1>
            <Row >
        <Col md={3}>
          {/* Use the Card component and pass the required props */}
          <Card title="Rice" imageSrc={rice} />
        </Col>
        <Col md={3}>
          <Card title="Wheat" imageSrc={wheat} />
        </Col>
        <Col md={3}>
          <Card title="Sugar" imageSrc={sugar} />
        </Col>
        <Col md={3}>
          <Card title="Fruit" imageSrc={fruit} />
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <Card title="Dates" imageSrc={dates} />
        </Col>
        <Col md={3}>
          <Card title="Fertilizer" imageSrc={fertilizer} />
        </Col>
        <Col md={3}>
          <Card title="Spare" imageSrc={spare} />
        </Col>
        <Col md={3}>
          <Card title="Lithium" imageSrc={lithium} />
        </Col>
      </Row>
        </section>
  );
}

export default Grid;
