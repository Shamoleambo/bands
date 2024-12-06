import NavBar from "../NavBar/NavBar";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <p className={classes.headerTitle}>Books</p>
      <NavBar />
    </header>
  );
};

export default Header;
