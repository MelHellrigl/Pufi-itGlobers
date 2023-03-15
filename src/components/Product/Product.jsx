import React from 'react';
import './Product.css';
import { data } from '../../infoMoqueada';

function Product() {
  return (
    <div>
      {data &&
        data.map((el, index) => {
          if (el.type === 'producto')
            return (
              <div
                id={index}
                className={`${el.side === 'izquierda' ? 'producto' : 'productoInvertido'}`}
                key={index}
              >
                <div className='productoIzq'>
                  <button>SHOP</button>
                  <img src={el.image} alt='imagen' />
                </div>
                <div className='productoDer'>
                  <img src={el.icono} alt='icono' />
                  <h2>{el.name}</h2>
                  <hr />
                  <p>Descripción del producto. Este es un texto simulado</p>
                  <button>
                    <i className='bx bx-chevron-right'></i> VER MAS
                  </button>
                </div>
              </div>
            );
          return <div key={index}></div>;
        })}
    </div>
  );
}

export default Product;
