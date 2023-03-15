import React from 'react';
import './Product.css';
import imagen1 from '../../assets/pexels-reem-mansour-10339885.jpg';
import imagen2 from '../../assets/pexels-snapwire-791036.jpg';
import imagen3 from '../../assets/pexels-leah-kelley-3935702.jpg';
import imagen4 from '../../assets/pexels-rebeca-gonçalves-1770310.jpg';

function Product() {
  return (
    <div>
      <div id='productoRAIN' className='producto'>
        <div className='productoIzq'>
          <button>SHOP</button>
          <img src={imagen1} alt='imagen1' />
        </div>
        <div className='productoDer'>
          <h2>Pufi RAIN</h2>
          <hr />
          <p>Descripción del producto. Este es un texto simulado</p>
          <button>
            <i className='bx bx-chevron-right'></i> VER MAS
          </button>
        </div>
      </div>
      <div id='productoPUFF' className='producto'>
        <div className='productoDer'>
          <h2>Pufi PUFF</h2>
          <hr />
          <p>Descripción del producto. Este es un texto simulado</p>
          <button>
            <i className='bx bx-chevron-right'></i> VER MAS
          </button>
        </div>
        <div className='productoIzq'>
          <button>SHOP</button>
          <img src={imagen2} alt='imagen2' />
        </div>
      </div>
      <div id='productoCART' className='producto'>
        <div className='productoIzq'>
          <button>SHOP</button>
          <img src={imagen3} alt='imagen3' />
        </div>
        <div className='productoDer'>
          <h2>Pufi CART</h2>
          <hr />
          <p>Descripción del producto. Este es un texto simulado</p>
          <button>
            <i className='bx bx-chevron-right'></i> VER MAS
          </button>
        </div>
      </div>
      <div id='productoNAP' className='producto'>
        <div className='productoDer'>
          <h2>Pufi NAP</h2>
          <hr />
          <p>Descripción del producto. Este es un texto simulado</p>
          <button>
            <i className='bx bx-chevron-right'></i> VER MAS
          </button>
        </div>
        <div className='productoIzq'>
          <button>SHOP</button>
          <img src={imagen4} alt='imagen4' />
        </div>
      </div>
    </div>
  );
}

export default Product;
