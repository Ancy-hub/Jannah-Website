import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import ProductGrid from "./productsGrid"
import About from "./about";

function Home() {
    return (
        <section>
        <section className="parallax-hero">
          <div className="parallax-content">
            <h1>Transforming Agro Trade with Quality and Dedication</h1>
          </div>
        </section>
        <div className="section-container">
          <About />
        </div>
        <div >
          <ProductGrid />
            </div>
            <div className='extra-in'>
            <div className='extra'>
                <h1>PROVIDE YOU THE HIGHEST QUALITY PRODUCTS THAT MEETS YOUR EXPECTATION</h1>
                </div>
                </div>
      </section>
      
  );
}

export default Home;
