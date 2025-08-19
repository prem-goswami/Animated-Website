import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useEffect } from "react";
import { Hero } from "./assets/components/hero";
import About from "./assets/components/About";
import NavBar from "./assets/components/NavBar";
import Features from "./assets/components/Features";
import Loader from "./assets/components/Loader";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

export const App = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Simulate loading for 1.5 seconds
    const timer = setTimeout(() => setLoading(false), 1500);

    // cleanup when App unmounts
    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
};
