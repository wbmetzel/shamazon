import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { createUser, loginUser } from "../firebase";

function Login() {
  //const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
    loginUser(email, password).then((response) => {
      // TODO: HANDLE ERRORS (separate by response code), redirect to home, update user creds to site
      console.log(response);
    });

  }

  const register = e => {
    e.preventDefault();
    createUser(email, password).then((user) => {
      console.log(user);
    }).then((error) => {
      console.log(error.message);
    });


  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
      </Link>

      <div className="login_container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type="submit" onClick={signIn} className="login_signinButton">Sign In</button>
        </form>

        <p>By continuing, you agree to Shamazon's Conditions of Use and Privacy Notice.</p>

        <button onClick={register} className="login_registerButton">Create Shamazon account</button>
      </div>

    </div>
  )
}

export default Login
