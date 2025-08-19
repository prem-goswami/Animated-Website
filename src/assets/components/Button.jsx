import "./components-css/button.css";

const Button = ({ id, title, rightIcon, leftIcon, customStyling }) => {
  return (
    <button id={id} className={`header-button ${customStyling || ""}`}>
      {leftIcon}
      <span>{title}</span>
      {rightIcon}
    </button>
  );
};

export default Button;
