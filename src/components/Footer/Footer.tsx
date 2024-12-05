import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <p>Author: Tiago Diniz Gomes</p>
      <a href="https://github.com/Shamoleambo">my github</a>
    </footer>
  );
};

export default Footer;
