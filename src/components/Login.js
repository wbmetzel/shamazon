import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

function login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
      </Link>

      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login_signinButton">Sign In</button>
        </form>

        <p>By continuing, you agree to Shamazon's Conditions of Use and Privacy Notice.</p>

        <button className="login_registerButton">Create Shamazon account</button>
      </div>

    </div>
  )
}

export default login
