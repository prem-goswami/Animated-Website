import React from "react";
import "./components-css/AlertPage.css";

const AlertPage = ({ onEnableSound, onClose }) => (
  <div className="alert-overlay">
    <div className="alert-modal">
      <h1 className="alert-title">
        Welcome to <span className="zentry-highlight">Zentry</span> Inspired!
      </h1>
      <div className="alert-desc">
        <div className="alert-features">
          <span className="feature-icon">🎨</span>
          <span className="feature-text">
            Engineered an interactive, animation-rich website leveraging{" "}
            <b>React</b>,<b> CSS</b>, and <b>GSAP</b> for seamless,
            production-grade motion design
          </span>
        </div>
        <div className="alert-features">
          <span className="feature-icon">🧩</span>
          <span className="feature-text">
            Dynamic navigation bar that adapts and animates on scroll.
          </span>
        </div>
        <div className="alert-features">
          <span className="feature-icon">🗂️</span>
          <span className="feature-text">
            Bento-style interactive cards with unique motion effects.
          </span>
        </div>
        <div className="alert-features">
          <span className="feature-icon">✨</span>
          <span className="feature-text">
            Scroll-triggered transitions and high-quality animation patterns
            inspired by <span className="zentry-highlight">Zentry</span>.
          </span>
        </div>
        <div className="alert-summary">
          <span className="summary-title">Why this project?</span>
          <span className="summary-text">
            This project demonstrates my ability to translate complex UI/UX
            patterns into production-ready React applications with advanced
            animation techniques.
          </span>
        </div>
        <div className="alert-sound">
          <span className="sound-title">Would you like to enable sound?</span>
          <span className="alert-note">
            You can disable sound anytime from the navigation bar.
          </span>
        </div>
      </div>
      <div className="alert-actions">
        <button className="alert-btn enable" onClick={onEnableSound}>
          <span role="img" aria-label="sound">
            🔊
          </span>{" "}
          Enable Sound
        </button>
        <button className="alert-btn close" onClick={onClose}>
          <span role="img" aria-label="mute">
            🔇
          </span>{" "}
          Continue without sound
        </button>
      </div>
    </div>
  </div>
);

export default AlertPage;
