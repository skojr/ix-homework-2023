import React, { useState, useEffect } from 'react';
import { Book } from '../../models/book';

export default function BookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

   useEffect(() => {
    if (props.editBook) {
      console.log(props.editBook);
      setTitle(props.editBook[0].title);
      setAuthor(props.editBook[0].author);
      setIsbn(props.editBook[0].isbn);
    }
  }, [props.editBook]);
  
  function onBookFormSubmut(e) {
    e.preventDefault();

    // If there is a bookToUpdate, execute these steps, else just create a new book
    if (props.bookToUpdate) {
      props.bookToUpdate.title = title;
      props.bookToUpdate.author = author;
      props.bookToUpdate.isbn = isbn;
      props.updateBook(props.bookToUpdate);
      clearInputs();
      createBook();
    } else {

      let book = new Book(title, author, isbn);
      props.onBookCreated(book);
      clearInputs();

    }

  }

  function clearInputs() {
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  function createBook() {
    let book = new Book(title, author, isbn);
      props.onBookCreated(book);
      clearInputs();
  }

  return (
    <div>
      <h1>Library</h1>

      <form id="form" onSubmit={onBookFormSubmut}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Author </label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> #ISBN </label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            onChange={(e) => setIsbn(e.target.value)}
            value={isbn}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.editBook ? 'Update Book' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
}