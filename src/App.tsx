import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BooksContainer from "./components/BooksContainer/BooksContainer";
import SingleBook from "./components/SingleBook/SingleBook";
import Footer from "./components/Footer/Footer";
import myData from "./data/books.json";
import "./App.css";

function App() {
  const [books, setBooks] = useState(myData);

  return (
    <div className="app">
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<BooksContainer books={books} />} />
            <Route
              path="/book/:bookId"
              element={<SingleBook books={books} />}
            />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
