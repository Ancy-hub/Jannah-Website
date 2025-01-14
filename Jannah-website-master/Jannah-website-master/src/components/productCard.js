import React,{useEffect} from "react";
import ScrollReveal from 'scrollreveal';
function Card(props) {
  const { title, imageSrc } = props;
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Define the reveal configuration
    sr.reveal('.container', { // Apply the effect to elements with the "shipment" class
      origin: 'top',
      duration: 2000,
      distance: '30px',
      delay: 300,
    });
  }, []);
  return (
    <div className="container">
      <div className="card_box">
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-image">
          <img src={imageSrc} alt={title} />
        </div>
      </div>
    </div>
  );
}

export default Card;
