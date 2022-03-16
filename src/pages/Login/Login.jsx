import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export function Login() {
  return (
    <main>
      <div className="auth-cont">
        <h5>Log in</h5>
        <p className="subtext">Please login using account detail bellow.</p>
        <form className="signup-form">
          <div className="input-grp">
            <label>Email address</label>
            <input className="input" type="email" placeholder="Email address" />
          </div>
          <div className="input-grp">
            <label>Password</label>
            <input className="input" type="password" placeholder="Password" />
          </div>
          <Link to="" className="form-link">
            Forgot password?
          </Link>
          <button className="btn btn-primary btn-order">Log in</button>
        </form>
        <p>
          Don’t have an Account? &nbsp;
          <Link to="/signup" className="form-link">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
