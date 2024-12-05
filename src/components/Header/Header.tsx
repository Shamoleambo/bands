import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <p className={classes.headerTitle}>Books</p>
    </header>
  );
};

export default Header;