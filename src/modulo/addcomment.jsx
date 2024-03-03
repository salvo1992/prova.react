import { useState } from "react";
import styles from "../pagine/dettagli/details.module.css";
import Format from "./formato";
const AddComment = (book) => {
  const [getBooks, setGetBooks] = useState(null);
  console.log(getBooks);

  return (
    <>
      <div className="container mt-3">
        <p>{book.book && book.book.asin}</p>
        <p className="fw-bold">{book.book && book.book.title}</p>
        <p>Price{book.book && book.book.price}</p>
        <img
          className={styles.myDetails}
          src={book.book && book.book.img}
          alt=""
        />
      </div>
      <Format book={book.book} />
    </>
  );
};
export default AddComment;