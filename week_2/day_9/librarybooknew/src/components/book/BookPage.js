import React, { useState, useEffect } from 'react'

import LibraryService from '../../services/library-service'
import { Book } from '../../models/book'
import BookForm from './BookForm';
import BookTable from './BookTable';

import { useNavigate } from 'react-router-dom';

export default function BookPage(props) {
  const [books, setBooks] = useState([]);
  const [editBook, setBookToEdit] = useState(null);
  const [bookToUpdate, setBookToUpdate] = useState(null);
  const [loading, setLoading] = useState(false);

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
  );

 async function onInitialLoad() {
    // We try catch here if there is an error
    // We can show that error to the user
    setLoading(true);
    try {
      const books = await LibraryService.fetchBooks();
      console.log(books);
      setBooks(books.filter((book) => book.userId === props.user.uid));
      console.log(books);
    } catch (err) {
      // TODO: handle error correctly
      console.log(err);
    }
    setLoading(false);
  } 


  async function onBookCreated(book) {
    // Front end
    setBookToEdit(null);

    // Back end
    console.log(props.user);
    const newBook = await LibraryService.addBooks(
      new Book(book.title, book.author, book.isbn, null, props.user.uid, props.user.email)
    );
    setBooks([...books, newBook]);

    console.log(newBook);
    console.log(books);
  }

  async function onBookDelete(bookId) {
    // Back end
    await LibraryService.deleteBooks(bookId);

    // Front end
    setBooks(books.filter((book) => book.id !== bookId));
  }

  async function onBookEdit(bookId) {
    // Front-end
    const book = books.filter((book) => book.id === bookId);
    setBookToEdit(book);
    setBooks(books.filter((book) => book.id !== bookId));

    // Back-end

    // Find the book whose id matches the id of the book we are editing
    const bookToUpdate = books.find((book) => book.id === bookId);

    // The found book now equals bookToUpdate
    setBookToUpdate(bookToUpdate);
  }

  async function updateBook(book) {
    await LibraryService.updateBooks(book);

    setBooks([...books, book]);
  }

  return (
    <div className="container my-5">
      <div className="card p-4">
        <BookForm
          onBookCreated={onBookCreated}
          updateBook={updateBook}
          editBook={editBook}
          bookToUpdate={bookToUpdate}
          setBookToUpdate={setBookToUpdate}
        ></BookForm>
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        ></BookTable>
      </div>
    </div>
  )
}