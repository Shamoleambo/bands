import { useState } from "react";
import { Book } from "../../models/Book";

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
    <div>
      <button onClick={handlePrevCover}>&lt</button>
      <img src={book.covers[index]} alt={book.title} />
      <button onClick={handleNextCover}>&gt</button>
    </div>
  );
};

export default ImageCarousel;
