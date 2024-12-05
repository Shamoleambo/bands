import { Book } from "../../models/Book";
import classes from "./BookCard.module.css";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <section className={classes.card}>
      <img className={classes.bookCover} alt={book.title} src={book.cover} />
      <div className={classes.bookInfo}>
        <h3 className={classes.title}>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.year}</p>
        <a href={book.amazonLink}>Buy {book.title}</a>
        <button className={classes.button}>About the author</button>
      </div>
    </section>
  );
};

export default BookCard;
