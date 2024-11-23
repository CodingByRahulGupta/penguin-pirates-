
import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Categories from './components/Categories/Categories';
import HeroSection from './components/HeroSection/herosection';
import ProductShowcase from './components/ProductShowcase/productshow';
import Testimonials from './components/Testimonials/testimonials';

function App() {
  return (
    <div className="App">
      <Header /> 
      <HeroSection/> 
       <Categories />
      <ProductShowcase />
      <Testimonials />
       <Footer />  
    </div>
  );
}

export default App;
