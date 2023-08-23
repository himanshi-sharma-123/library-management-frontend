import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return (
    <div>
      <div>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button
            LinkComponent={Link}
            to="/add"
            sx={{ marginTop: 15, background: "orangered" }}
            variant="contained"
          >
            <Typography variant="h3">Add Books</Typography>
          </Button>
        </Box>
      </div>

      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
