import './App.css';
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';
import Values from './components/Values/Values';

function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Values/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
