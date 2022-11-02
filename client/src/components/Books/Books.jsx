import { booksApi } from "../../api";
import React, { useState } from "react";
import { authorsApi } from "../../api";
import styles from "./books.module.css"
export const Books = () => {
  const [books, setBooks] = useState([]);
  React.useEffect(() => {
    async function recieveBooks() {
      let books = await booksApi.getAll();
      setBooks(books);
    }
    recieveBooks();
  }, []);
  const [authors, setAuthors] = useState([]);
  React.useEffect(() => {
    async function recieveAuthors() {
      let authors = await authorsApi.getAll();
      setAuthors(authors);
    }
    recieveAuthors();
  }, []);
console.log(styles);
  return (
    <div>
        <img src="/Books.png" alt="" className={styles.booksImg} />
      <ul className={styles.ul}>
        {books.map(function (book) {
            // console.log(authors, book)

          const author = authors.find(function ({ id_author }) {
            // console.log(id_author)
            return (id_author === book.author);
          });
          return (
            <li key={book.book_id} className={styles.li}>
              <p>
                {author != undefined
                  ? author.ful_name_author
                  : "author is loading"}
              </p>
              <p>{book.name_book}</p>
              <p>{book.amount}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
