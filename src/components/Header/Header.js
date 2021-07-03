import "./Header.css";
import MaskedStyleSVG from "./maskedShape.svg";

const maskStyles = {
  margin: "0 auto",
  textAlign: "center",
  backgroundImage: `url(${MaskedStyleSVG})`,
  backgroundSize: "cover",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  width: "auto",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header maskText">
      <span className="" style={maskStyles}>
        Jetflix
      </span>
    </span>
  );
};

export default Header;
