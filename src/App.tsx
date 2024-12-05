import { useState } from "react";
import Header from "./components/Header/Header";
import BooksContainer from "./components/BooksContainer/BooksContainer";
import Footer from "./components/Footer/Footer";
import myData from "./data/books.json";
import "./App.css";

function App() {
  const [books, setBooks] = useState(myData);

  return (
    <div className="app">
      <Header />
      <main>
        <BooksContainer books={books} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
