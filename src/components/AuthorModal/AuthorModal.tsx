import { createPortal } from "react-dom";
import { AuthorInfo } from "../../models/AuthorInfo";
import classes from "./AuthorModal.module.css";

const AuthorModal: React.FC<{
  name: string;
  info: AuthorInfo;
  onClose: () => void;
}> = ({ name, info, onClose }) => {
  const modalContent = (
    <>
      <div onClick={onClose} className={classes.backdrop}></div>
      <div className={classes.authorContainer}>
        <div className={classes.imageContainer}>
          <img alt={name} src={info.picture} />
        </div>
        <div className={classes.generalInfo}>
          <button className={classes.button} onClick={onClose}>
            X
          </button>
          <h2 className={classes.authorName}>{name}</h2>
          <p>{info.about}</p>
          <h4>Also Known for:</h4>
          <ul>
            {info.otherBooks.map((book) => (
              <li key={book}>{book}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.getElementById("portal")!);
};

export default AuthorModal;
