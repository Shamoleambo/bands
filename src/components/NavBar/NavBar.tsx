import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.activeLink : "")}
            to="/"
          >
            go home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.activeLink : "")}
            to="/about"
          >
            about
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
