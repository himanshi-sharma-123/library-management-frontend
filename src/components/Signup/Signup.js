import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../user.css";

function Signup() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "notexist") {
            history("/", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="back">
      <h2>Library Mangement System</h2>

      <div className="login">
        <h1 className="heading">Signup</h1>

        <form action="POST" className="form">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input type="submit" className="button" onClick={submit} />
        </form>

        <br />
        <p className="p">Already have Account? Login below</p>
        <br />

        <Link to="/" className="to">
          Login Page
        </Link>
      </div>
    </div>
  );
}

export default Signup;
