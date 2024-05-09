import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/"><span>Home</span></NavLink>
      <NavLink to="/directors"><span>Directors</span></NavLink>
      <NavLink to="/actors"><span>Actors</span></NavLink>
    
    </nav>
    );
};

export default NavBar;
