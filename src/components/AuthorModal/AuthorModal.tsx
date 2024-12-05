import { createPortal } from "react-dom";
import { AuthorInfo } from "../../models/AuthorInfo";

const AuthorModal: React.FC<{
  name: string;
  info: AuthorInfo;
  onClose: () => void;
}> = ({ name, info, onClose }) => {
  const modalContent = (
    <div>
      <img alt={name} src={info.picture} />
      <div>
        <button onClick={onClose}>x</button>
        <h2>{name}</h2>
        <p>{info.about}</p>
        <ul>
          {info.otherBooks.map((book) => (
            <li key={book}>{book}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return createPortal(modalContent, document.getElementById("portal")!);
};

export default AuthorModal;
