import { useParams } from "react-router-dom";
import { Book } from "../../models/Book";

type BookParam = {
  bookId: string;
};

const SingleBook: React.FC<{ books: Book[] }> = ({ books }) => {
  const params = useParams<BookParam>();

  const book: Book = books.filter(
    (book) => book.id.toString() === params?.bookId
  )[0];

  const bookInfo = (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <p style={{ whiteSpace: "pre-wrap" }}>{book.about}</p>
    </div>
  );

  const noBookFound = (
    <div>
      <h2>Sorry, no book found</h2>
    </div>
  );

  return <div>{book ? bookInfo : noBookFound}</div>;
};

export default SingleBook;
