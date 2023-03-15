import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Carousel from './components/Carousel/Carousel';
import Product from './components/Product/Product';
import Espufi from './components/Espufi/Espufi';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Carousel />
        <Product />
        <Espufi />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
