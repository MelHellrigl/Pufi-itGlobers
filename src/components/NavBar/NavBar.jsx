import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className='navBar'>
      <a href='/#'>
        <h1>Pufi</h1>
      </a>
      <nav>
        <a href='#productoPUFF'>PUFI PUFF</a>
        <a href='#productoRAIN' id='lineaCentral'>
          PUFI RAIN
        </a>
        <a href='#productoCART' id='lineaCentral'>
          PUFI CART
        </a>
        <a href='#productoNAP' id='lineaCentral'>
          PUFI NAP
        </a>
      </nav>
      <div className='divBotones'>
        <button>
          MI CUENTA <i className='bx bx-chevron-down'></i>
        </button>
        <button id='lineaCentral'>MI COMPRA</button>
      </div>
    </div>
  );
}

export default NavBar;
