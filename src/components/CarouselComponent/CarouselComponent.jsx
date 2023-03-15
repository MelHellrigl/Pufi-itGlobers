import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CarouselComponent.css';
import { carousel } from '../../infoMoqueada';

function CarouselComponent() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={2000}
      customTransition='all .5'
      transitionDuration={500}
    >
      {carousel &&
        carousel.map((el, index) => {
          return (
            <div className='carousel' key={index}>
              <img src={el.image} alt='imagennnnn' />
              <div className='carouselCentro'>
                <h2>ESTAR COMODO, NUNCA FUE TAN FACIL.</h2>
                <button>SHOP</button>
              </div>
            </div>
          );
        })}
      {/* <div className='carousel'>
        <img src={image1} alt='image6' />
        <div className='carouselCentro'>
          <h2>ESTAR COMODO, NUNCA FUE TAN FACIL.</h2>
          <button>SHOP</button>
        </div>
      </div>
      <div className='carousel'>
        <img src={image2} alt='image6' />
        <div className='carouselCentro'>
          <h2>ESTAR COMODO, NUNCA FUE TAN FACIL.</h2>
          <button>SHOP</button>
        </div>
      </div> */}
    </Carousel>
  );
}

export default CarouselComponent;
