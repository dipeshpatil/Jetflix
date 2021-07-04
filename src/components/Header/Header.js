import MaskedStyleSVG from "./maskedShape.svg";
import "./Header.scss";

const isDark = JSON.parse(localStorage.getItem("isDark"));

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

function handleTheme() {
  localStorage.setItem("isDark", !isDark);
  window.location.reload();
}

const Header = () => {
  return (
    <span
      onClick={() => handleTheme()}
      className={`${isDark ? "header__dark" : "header__light"} header maskText`}
    >
      <span style={maskStyles}>Jetflix</span>
    </span>
  );
};

export default Header;
