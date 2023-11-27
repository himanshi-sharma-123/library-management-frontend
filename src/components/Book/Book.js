import { FormControlLabel, Button, Checkbox } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
import React from "react";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const [deleted, setDeleted] = React.useState(false);

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:5000/books/${id}`);
    setDeleted(true);
    history("/home");

    // .then((res) => res.data)
    // .then(() => history("/"))
    // .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      {/* {props.available ? <h4>Available</h4> : <h4>Not Available</h4>} */}
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      {deleted ? (
        <p>deleted</p>
      ) : (
        <Button
          color="error"
          onClick={() => deleteHandler(_id)}
          sx={{ mt: "auto" }}
        >
          Delete
        </Button>
      )}
    </div>
  );
};

export default Book;
