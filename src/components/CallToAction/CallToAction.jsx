import React from 'react';
import './CallToAction.css';

function CallToAction() {
  return (
    <div className='callToAction'>
      <p className='newsletter'>NEWSLETTER</p>
      <h2>SUSCRIBITE</h2>
      <p>Y enterate de todas las novedades</p>
      <div className='inputNewsletter'>
        <input type='text' id='newsletter' name='newsletter' placeholder='Ingresa tu email' />
        <button>
          <i className='bx bx-right-arrow-alt'></i>
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
