import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import "./components-css/Contact.css";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="image-container-1">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2"
          />
        </div>

        <div className="image-container-2">
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path-2"
          />
        </div>

        <div className="text-container">
          <p className="join-zentry">Join Zentry</p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            containerClass="special-font-title"
          />

          <Button title="contact us" containerClass="cursor-container" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
