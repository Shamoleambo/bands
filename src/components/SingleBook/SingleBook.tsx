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
      <h2>{book?.title}</h2>
      <p>{book?.author}</p>
      <p>{book?.year}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod deserunt
        quibusdam accusamus mollitia impedit! Magnam, debitis! Repudiandae
        voluptate explicabo saepe dignissimos asperiores minus consequuntur
        libero numquam quae officia voluptates dolorem ratione ipsa quos
        deleniti modi blanditiis necessitatibus odit recusandae quas, nemo nisi
        reprehenderit nam. Saepe nisi nobis ipsum repellat recusandae nemo cum.
        Corporis, sit at? Temporibus laboriosam obcaecati excepturi, sint
        accusantium id adipisci aliquid commodi vitae tempore et labore
        praesentium nisi sit nesciunt pariatur distinctio itaque mollitia
        repudiandae sequi. Distinctio iste voluptate eaque praesentium cumque
        dicta pariatur eum culpa excepturi magni molestias repellendus eos
        officiis aliquam quaerat modi minus illum odio, autem odit a obcaecati
        officia vitae porro? Hic consequuntur at animi nobis ratione beatae
        recusandae quo ipsa similique odio quaerat dicta esse sapiente dolore,
        cupiditate libero voluptate dolores cum distinctio magnam, provident,
        magni harum. Corrupti id, sunt ipsum nostrum pariatur aut tenetur
        recusandae magni quis beatae aspernatur laborum optio possimus illum
        placeat facilis cum cupiditate vero odio quod minus nulla itaque,
        aliquid iste! Alias placeat distinctio ea veritatis. Ipsum, maiores
        rerum! Nostrum nulla iste sequi, dolor a voluptate corrupti quas facere
        repellendus reprehenderit, neque totam, exercitationem voluptatem maxime
        rerum? Itaque expedita quisquam, pariatur quasi quaerat minima amet
        commodi totam.
      </p>
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
