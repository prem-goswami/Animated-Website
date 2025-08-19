import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import "./components-css/Features.css";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState({});
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    setTransformStyle({
      transform: `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`,
      transition: "transform 0.2s ease-out",
      willChange: "transform",
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "none",
      transition: "transform 0.2s ease-out",
      willChange: "transform",
    });
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="bento-card-main">
      <video src={src} loop muted autoPlay className="bento-card-video" />
      <div className="bento-card-container">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="bento-card-description">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="button-hsla"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="features-section">
    <div className="main-container">
      <div className="text-container">
        <p className="text-lg-blue">Into the Metagame Layer</p>
        <p className="text-lg-blue-opacity">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <BentoTilt className="main-bento-tilt">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              radia<b>n</b>t
            </>
          }
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          isComingSoon
        />
      </BentoTilt>

      <div className="secondary-bento-tilt">
        <BentoTilt className="bento-tilt-1">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt-2">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt-3">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_4">
          <div className="flex-violet-col">
            <h1>
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="arrow" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_5">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="full-object-cover"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
