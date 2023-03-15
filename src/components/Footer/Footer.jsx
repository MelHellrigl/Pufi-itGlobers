import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='contenedorFooter'>
      <div className='footer'>
        <h2>Pufi</h2>
        <ol>
          <li>
            <a href='#productoRAIN'>PUFI RAIN</a>
          </li>
          <li>
            <a href='#productoPUFF'>PUFI PUFF</a>
          </li>
          <li>
            <a href='#productoCART'>PUFI CART</a>
          </li>
          <li>
            <a href='#productoNAP'>PUFI NAP</a>
          </li>
        </ol>
        <ol>
          <li>
            <a href='/#'>CONTACTO</a>
          </li>
          <li>
            <a href='/#'>AYUDA</a>
          </li>
          <li>
            <a href='/#'>COMO COMPRAR</a>
          </li>
          <li>
            <a href='/#'>TERMINOS & CONDICIONES</a>
          </li>
        </ol>
        <div className='compraSegura'>
          <p>COMPRA 100% SEGURA</p>
          <div className='garantia'>
            <i className='bx bx-qr-scan'></i>
            <i className='bx bx-shield-quarter'></i>
            <p>COMPRA CON LA GARANTIA DE PUFI</p>
          </div>
        </div>
        <div className='seguinos'>
          <p>SEGUINOS EN</p>
          <a href='https://www.facebook.com/'>
            <i className='bx bxl-facebook'></i>
          </a>
          <a href='https://twitter.com/'>
            <i className='bx bxl-twitter'></i>
          </a>
          <a href='https://www.instagram.com/'>
            <i className='bx bxl-instagram-alt'></i>
          </a>
        </div>
      </div>
      <div className='derechosReservados'>
        <hr />
        <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
