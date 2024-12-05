import { Book } from "../../models/Book";
import BookCard from "../BookCard/BookCard";
import classes from "./BooksContainer.module.css";

const BooksContainer: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <ul className={classes.list}>
      {books.map((book) => (
        <li className={classes.listItem} key={book.id}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BooksContainer;
