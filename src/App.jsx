import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Cards from './sections/Cards/Cards';
import Event from './sections/Event/Event';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main className="dk-page">
        <Hero />
        <About />
        <Cards />
        <Event />
      </main>
      <footer className="dk-footer">
        <div className="container text-center">
          <p className="dk-footer-text">
            <strong>Diktador!</strong> is a collaboration between{' '}
            <a href="https://projectgunita.com" className="dk-footer-link" target="_blank" rel="noopener noreferrer">
              Project Gunita
            </a>{' '}
            and the Concerned Artists of the Philippines.
          </p>
          <p className="dk-footer-copyright">
            &copy; {new Date().getFullYear()} Project Gunita. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
