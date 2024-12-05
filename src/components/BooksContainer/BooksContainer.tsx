import { Book } from "../../models/Book";
import BookCard from "../BookCard/BookCard";

const BooksContainer: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BooksContainer;
