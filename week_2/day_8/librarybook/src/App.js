import './App.css';
import { useState, useEffect } from 'react';
import BookForm from './components/BookForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import BookTable from './components/BookTable';

import LibraryService from './services/library-service';
import {Book} from './models/book';

function App() {

 

  const [books, setBooks] = useState([]);
  const [editBook, setBookToEdit] = useState(null);

  useEffect(
    () => {
      if (!books.length) {
        onInitialLoad();
      }
    },

    // In the case of an empty array, the function only fires the first time the
    // component initializes

    // If we put a variable reference and that variable changes
    // this function fires again
    []
  );

  async function onInitialLoad() {
    // We try catch here if there is an error
    // We can show that error to the user
    try {
      const books = await LibraryService.fetchBooks();
      setBooks(books);
    } catch (err) {
      // TODO: handle error correctly
      console.log(err);
    }
  }
  
  async function onBookCreated(book) {
  // Front end
  setBookToEdit(null);
  
  // Back end
  const  newBook = await LibraryService.addBooks(new Book(book.title, book.author, book.isbn, null));
  setBooks([...books, newBook]);
  
  console.log(newBook);
  console.log(books);
  }

  async function onBookDelete(bookId) {
    // Back end
    await LibraryService.deleteBooks(bookId);

    // Front end
    setBooks(books.filter((book) => book.id !== bookId));;
  }

  async function onBookEdit(bookId) {
    // Front-end
    const newBook = books.filter((book) => book.id === bookId);
    setBookToEdit(newBook);
    console.log(newBook);
    setBooks(books.filter((book) => book.id !== bookId));

    // Back-end
    const bookToUpdate = books.find((book) => book.id === bookId)
    console.log(bookToUpdate);
    await LibraryService.updateBooks(bookToUpdate);
  }

  return (
    <div className='container my-5'>
      <div className='card p-4'>
        <BookForm onBookCreated={onBookCreated} editBook={editBook}></BookForm>
        <BookTable books={books} onBookDelete={onBookDelete} onBookEdit={onBookEdit}></BookTable>
      </div>
    </div>
    
  );
}

export default App;
