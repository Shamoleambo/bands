import { Book } from "../../models/Book";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <section>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <img alt={book.title} src={book.cover} />
      <p>{book.year}</p>
      <a href={book.amazonLink}></a>
      <button>More about the author</button>
    </section>
  );
};

export default BookCard;
