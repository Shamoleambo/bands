import { Book } from "../../models/Book";
import classes from "./BookCard.module.css";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <section className={classes.card}>
      <img className={classes.bookCover} alt={book.title} src={book.cover} />
      <div className={classes.bookInfo}>
        <h3 className={classes.title}>{book.title}</h3>
        <p>
          <span className={classes.author}>Author:</span> {book.author}
        </p>
        <p>
          <span className={classes.year}>Publishing Year:</span> {book.year}
        </p>
        <div className={classes.linkContainer}>
          <a className={classes.link} href={book.amazonLink} target="_blank">
            Buy {book.title}
          </a>
        </div>
        <button className={classes.button}>About the author</button>
      </div>
    </section>
  );
};

export default BookCard;
