import React,{useEffect} from "react";
import ScrollReveal from 'scrollreveal';
function Card(props) {
  const { title, imageSrc ,position} = props;
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
      <div className="peopleCard_box">
        <div className="peopleCard-image">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="peopleCard-title">
                  <h3>{title}</h3>
                  <p>{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
