import React from 'react';
import './NavBar.css';
import logo from '../../assets/logoPufi.png';
import puff from '../../assets/puffIcono.png';
import paraguas from '../../assets/paraguasIcono.png';
import cart from '../../assets/cartIcono.png';
import nap from '../../assets/napIcono.png';

function NavBar() {
  return (
    <div className='navBar'>
      <a href='/#'>
        <img src={logo} alt='logoPufi' />
      </a>
      <nav>
        <a href='#0'>
          <div className='iconos'>
            <img src={puff} alt='puff' />
            PUFI PUFF
          </div>
        </a>
        <a href='#1' id='lineaCentral'>
          <div className='iconos'>
            <img src={paraguas} alt='paraguas' />
            PUFI RAIN
          </div>
        </a>
        <a href='#2' id='lineaCentral'>
          <div className='iconos'>
            <img src={cart} alt='cart' />
            PUFI CART
          </div>
        </a>
        <a href='#3' id='lineaCentral'>
          <div className='iconos'>
            <img src={nap} alt='nap' />
            PUFI NAP
          </div>
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
