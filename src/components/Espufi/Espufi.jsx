import React from 'react';
import './Espufi.css';
import imagen1 from '../../assets/pexels-reem-mansour-10339885.jpg';
import imagen2 from '../../assets/pexels-snapwire-791036.jpg';
import imagen3 from '../../assets/pexels-leah-kelley-3935702.jpg';
import imagen4 from '../../assets/pexels-rebeca-gonçalves-1770310.jpg';
import imagen5 from '../../assets/pexels-pixabay-33622.jpg';
import imagen6 from '../../assets/pexels-aline-nadai-1887792.jpg';

function Espufi() {
  return (
    <div className='espufi'>
      <p>INSTAGRAM</p>
      <h2>#ESPUFI</h2>
      <div className='contenedorImg'>
        <img src={imagen1} alt='imagen1' />
        <img src={imagen2} alt='imagen2' />
        <img src={imagen3} alt='imagen3' />
        <img src={imagen4} alt='imagen4' />
        <img src={imagen5} alt='imagen5' />
        <img src={imagen6} alt='imagen6' />
      </div>
    </div>
  );
}

export default Espufi;
