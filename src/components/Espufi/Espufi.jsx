import React from 'react';
import './Espufi.css';
import { data } from '../../infoMoqueada';

function Espufi() {
  return (
    <div className='espufi'>
      <p>INSTAGRAM</p>
      <h2>#ESPUFI</h2>
      <div className='contenedorImg'>
        {data.map((el, index) => {
          return <img src={el.image} alt={`Imagen ${index}`} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Espufi;
