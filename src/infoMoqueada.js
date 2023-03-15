import image1 from './assets/pexels-reem-mansour-10339885.jpg';
import image2 from './assets/pexels-snapwire-791036.jpg';
import image3 from './assets/pexels-leah-kelley-3935702.jpg';
import image4 from './assets/pexels-rebeca-gonçalves-1770310.jpg';
import image5 from './assets/pexels-pixabay-33622.jpg';
import image6 from './assets/pexels-xue-guangjian-1687845.jpg';
import image7 from './assets/pexels-kindel-media-7294665.jpg';
import icono1 from './assets/paraguas.png';
import icono2 from './assets/puff.png';
import icono3 from './assets/cart.png';
import icono4 from './assets/nap.png';

const data = [
  {
    name: 'Pufi RAIN',
    image: image1,
    type: 'producto',
    side: 'izquierda',
    icono: icono1,
  },
  {
    name: 'Pufi PUFF',
    image: image2,
    type: 'producto',
    side: 'derecha',
    icono: icono2,
  },
  {
    name: 'Pufi CART',
    image: image3,
    type: 'producto',
    side: 'izquierda',
    icono: icono3,
  },
  {
    name: 'Pufi NAP',
    image: image4,
    type: 'producto',
    side: 'derecha',
    icono: icono4,
  },
  {
    name: '',
    image: image5,
    type: 'carousel',
    side: '',
    icono: '',
  },
  {
    name: '',
    image: image6,
    type: 'carousel',
    side: '',
    icono: '',
  },
];
const carousel = [
  {
    image: image5,
  },
  {
    image: image6,
  },
  { image: image7 },
];

export { data, carousel };
