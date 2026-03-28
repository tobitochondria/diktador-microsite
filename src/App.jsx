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
      <footer className="dk-footer" role="contentinfo">
        <div className="container text-center">
          <div className="dk-footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61588054023589" target="_blank" rel="noopener noreferrer" className="dk-footer-social-link" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/diktadorcardgame2026/" target="_blank" rel="noopener noreferrer" className="dk-footer-social-link" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <p className="dk-footer-text">
            <strong>Diktador!</strong> is a collaboration between{' '}
            <a href="https://www.projectgunita.com" className="dk-footer-link" target="_blank" rel="noopener noreferrer">Project Gunita</a>{' '}
            and the{' '}
            <a href="https://www.facebook.com/artistangbayan/" className="dk-footer-link" target="_blank" rel="noopener noreferrer">Concerned Artists of the Philippines</a>.
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
