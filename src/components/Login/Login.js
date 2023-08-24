import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../user.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
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
        <h1 className="heading">Login</h1>

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
          <input className="button" type="submit" onClick={submit} />
        </form>

        <br />
        <p className="p">Do not have Account? Signup below</p>
        <br />

        <Link to="/signup" className="to">
          Signup Page
        </Link>
      </div>
    </div>
  );
}

export default Login;
