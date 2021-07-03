import "./Header.scss";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Jetflix 🎥
    </span>
  );
};

export default Header;
