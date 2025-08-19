import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import "./components-css/AnimatedTitle.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  gsap.set(".animated-word", {
    opacity: 0,
    transform: "translate3d(0, 40px, 0) rotateY(20deg) rotateX(20deg)",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".animated-word", {
        opacity: 0,
        transform: "translate3d(0, 40px, 0) rotateY(20deg) rotateX(20deg)",
      });
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.08,
        },
        0
      );
    }, containerRef);
    return () => ctx.revert(); // Clean up on unmount
  }, []);
  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div key={index} className="words">
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
