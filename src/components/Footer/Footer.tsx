import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <p>
          Author: <span className={classes.me}>Tiago Diniz Gomes</span>
        </p>
        <a href="https://github.com/Shamoleambo" target="_blank">
          my github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
