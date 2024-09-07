

import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../../../firebase/auth";
import { useAuth } from "../../../contexts/authContext";
import "./index.css";

const Login = () => {
  const { userLoggedIn, setUserLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        setUserLoggedIn(true);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="login">
      <h1>Sign in to your account</h1>
      <div className="form-body">
        <form onSubmit={onSubmit}>
          <div className="username-div">
            <input type="text" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="password-div">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" disabled={isSigningIn}>Sign in</button>
          {errorMessage && <p>{errorMessage}</p>}
          <p>Don’t have an account? <a href="/register">Create one now</a></p>
        </form>//src/components/auth/login/index.jsx
      </div>
    </div>
  );
};

export default Login;

