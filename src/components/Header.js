import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <h1>hihi</h1>
      <NavLink to="/" >Champions</NavLink>
      <NavLink to='/signup'>Log In</NavLink>
    </div>
  );
};

export default Header;
