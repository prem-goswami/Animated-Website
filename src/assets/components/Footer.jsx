import "./components-css/Footer.css";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <p className="footer-title">Zentry &copy; 2025</p>
      <div className="footer-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <p className="footer-credit">
        Built with React + GSAP, fueled by creativity and passion | Made with ❤️
        by Prem Goswami.
      </p>
    </div>
  </footer>
);

export default Footer;
