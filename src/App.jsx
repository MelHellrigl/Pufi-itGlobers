import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import CarouselComponent from './components/CarouselComponent/CarouselComponent';
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
        <CarouselComponent />
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
