import React from 'react';
import './Carousel.css';

function Carousel() {
  return (
    <div className='carousel'>
      <button>prev</button>
      <div className='carouselCentro'>
        <h2>ESTAR COMODO, NUNCA FUE TAN FACIL.</h2>
        <button>SHOP</button>
      </div>
      <button>next</button>
    </div>
  );
}

export default Carousel;
