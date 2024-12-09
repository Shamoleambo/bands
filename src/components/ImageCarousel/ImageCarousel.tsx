import { useState } from "react";
import { Book } from "../../models/Book";
import classes from "./ImageCarousel.module.css";

const ImageCarousel: React.FC<{ book: Book }> = ({ book }) => {
  const [index, setIndex] = useState(0);

  const handlePrevCover = () => {
    if (index === 0) return;
    setIndex((prevIndex) => (prevIndex -= 1));
  };

  const handleNextCover = () => {
    if (index === book.covers.length - 1) return;
    setIndex((prevIndex) => (prevIndex += 1));
  };

  return (
    <div
      className={classes.carousel}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${book.covers[index]})`,
      }}
    >
      <button onClick={handlePrevCover}>&lt;</button>
      <div className={classes.imgContainer}>
        <img src={book.covers[index]} alt={book.title} />
      </div>
      <button onClick={handleNextCover}>&gt;</button>
    </div>
  );
};

export default ImageCarousel;
