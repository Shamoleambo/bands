import { AuthorInfo } from "../../models/AuthorInfo";

const AuthorModal: React.FC<{ name: string; info: AuthorInfo }> = ({
  name,
  info,
}) => {
  return (
    <div>
      <img alt={name} src={info.picture} />
      <h2>{name}</h2>
      <p>{info.about}</p>
      <ul>
        {info.otherBooks.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorModal;
