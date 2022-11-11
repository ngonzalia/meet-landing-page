// components
import Hero from './components/containers/Hero';
import Section from './components/containers/Section';
import Footer from './components/containers/Footer';


// styles
import './styles/main.css';


const App = () => {
  return (
    <div className='App'>
      <Hero />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
