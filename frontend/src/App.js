import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Slider from './layouts/Slider';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="hero_area">
        <Header />
        <Slider />
      </div>
      <Home/>
      <Footer />
    </>
  );
}

export default App;
