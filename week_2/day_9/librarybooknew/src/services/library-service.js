import {
    collection, 
    addDoc,
    doc,
    query,
    getDocs,
    deleteDoc,
    updateDoc
} from 'firebase/firestore'

import { db } from '../firebase/firebase';
import { Book } from '../models/book';


class LibraryService {
    constructor() {
        this.collection = 'librarybooks';
    }

    async fetchBooks() {
        const collectionRef = collection(db, this.collection);
        const q = query(collectionRef);
        const queryShot = await getDocs(q);

        // Define books as an empty array
        const books = [];

        queryShot.forEach((doc) => {
            const data = doc.data()
            const book = new Book(data.title, data.author, data.isbn, doc.id, data.userId, data.email)
            books.push(book);
        })

        return books
    }

    async deleteBooks(bookId) {
        const docRef = doc(db, this.collection, bookId);

        await deleteDoc(docRef);
    }

    async updateBooks(book) {
        const docRef = doc(db, this.collection, book.id);

        await updateDoc(docRef, {
            author: book.author,
            isbn: book.isbn,
            title: book.title
    });

    return book;
    }

    async addBooks(book) {
        const collectionRef = collection(db, this.collection)

        const docRef = await addDoc(collectionRef, {
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            email: book.userEmail,
            userId: book.userId
        })

        book.id = docRef.id;
        return book;
    }
}

const libraryservice = new LibraryService();
export default libraryservice;
