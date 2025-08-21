import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import "./components-css/NavBar.css";
import Button from "./Button";

const navItems = ["Features", "About", "Contact"];
const NavBar = ({ soundEnabled, setSoundEnabled }) => {
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled);
  };

  // Manage audio playback directly from soundEnabled
  useEffect(() => {
    if (soundEnabled) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [soundEnabled]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div ref={navContainerRef} className="fixed-header">
      <header className="header-center">
        <nav className="navbar">
          <div className="navButton">
            <img src="/img/logo.png" alt="logo" style={{ width: "2.5rem" }} />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              className="productsButton"
            />
          </div>
          <div className="navElements">
            <div className="hidden-md">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button onClick={handleSoundToggle} className="audioButton">
              <audio ref={audioElementRef} src="/audio/loop.mp3" loop />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${soundEnabled ? "active" : ""}`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
