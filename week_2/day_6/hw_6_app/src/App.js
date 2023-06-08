import './App.css';
import { useState } from 'react';
import BookForm from './components/BookForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import BookTable from './components/BookTable';


function App() {

  const [books, setBooks] = useState([]);
  const [editBook, setBookToEdit] = useState(null);
  
  function onBookCreated(book) {
    setBookToEdit(null);
    setBooks([...books, book]);
  }

  function onBookDelete(book) {
    setBooks(book)
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
    console.log('register');
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
