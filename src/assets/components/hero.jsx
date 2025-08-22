import React from "react";
import { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./components-css/hero.css";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = React.useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const currentVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
    setLoading(false);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(15% 0, 86% 0, 96% 92%, 0% 100%)",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  return (
    <section className="intro-container">
      <div className="video-frame" id="video-frame">
        <div className="clickPath">
          <div onClick={handleMiniVdClick} className="minVidClick">
            <video
              ref={currentVideoRef}
              src={getVideoSrc((currentIndex % totalVideos) + 1)}
              loop
              muted
              autoPlay
              id="current-video"
              onLoadedData={handleVideoLoad}
              className="minVid"
            />
          </div>
        </div>
        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          autoPlay
          id="next-video"
          className="next-video-1"
          onLoadedData={handleVideoLoad}
        />
        <video
          src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className="next-video"
          onLoadedData={handleVideoLoad}
        />
        <div className="introText">
          <h1>
            Redifi<b>n</b>e
          </h1>
          <p>
            Enter the Metagame Layer
            <br /> Unleash the play Economy{" "}
          </p>
          <Button
            id="watch-trailer"
            title="Watch Trailer"
            rightIcon={<TiLocationArrow />}
            customStyling="introButton"
          />
        </div>
        <h1 className="gamingText gamingText-white ">
          G<b>A</b>MING
        </h1>
      </div>
      <h1 className="gamingText gamingText-black ">
        G<b>A</b>MING
      </h1>
    </section>
  );
};
