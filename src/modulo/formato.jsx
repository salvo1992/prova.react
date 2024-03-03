import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { fetchDefault } from "../fetch.js";

const Format = (book) => {
  console.log(book);
  const [getForm, setGetForm] = useState({
    comment: "",
    rate: null,
    elementId: `${book.book.asin}`,
  });
  const heandlerOnChange = (event) => {
    const { name, value } = event.target;
    setGetForm({
      ...getForm,
      [name]: value,
    });
  };

  const heandlerOnClick = async () => {
    console.log(getForm);
    const url = `https://striveschool-api.herokuapp.com/api/books/${book.book.asin}/comments/`;
    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVhYzczMjBjNjAwMThiOGYwMWUiLCJpYXQiOjE3MDgzNjM3MDksImV4cCI6MTcwOTU3MzMwOX0.RM6sp66II5w-mIssxjo82yOpPTxQBwhaS_ZjFlhIE1M";
    await fetchDefault(key, url, "POST", getForm);
    console.log(url);
  };

  console.log(getForm);
  return (
    <>
      <Form.Control type="text" placeholder="" />
      <input
        type="text"
        onChange={heandlerOnChange}
        name="comment"
        placeholder="scrivi il tuo commento"
      />
      <input
        type="number"
        onChange={heandlerOnChange}
        name="rate"
        placeholder="inserisci un numero"
      />
      <input
        onChange={heandlerOnChange}
        type="text"
        readOnly
        value={book.book.asin}
        name="elementId"
        placeholder=""
      />
      <Button onClick={heandlerOnClick}>clicca</Button>
    </>
  );
};

export default Format;