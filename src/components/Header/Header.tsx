import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <p className={classes.headerTitle}>Books</p>
      </NavLink>
      <NavBar />
    </header>
  );
};

export default Header;
