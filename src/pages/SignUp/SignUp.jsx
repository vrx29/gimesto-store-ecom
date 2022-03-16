import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export function SignUp() {
  return (
    <main>
      <div className="auth-cont">
        <h5>Sign Up</h5>
        <p className="subtext">
          Please create your account by filling the required details.
        </p>
        <form className="signup-form">
          <div className="input-grp">
            <label>First name</label>
            <input className="input" type="text" placeholder="First name" />
          </div>
          <div className="input-grp">
            <label>Last name</label>
            <input className="input" type="text" placeholder="Last name" />
          </div>
          <div className="input-grp">
            <label>Email address</label>
            <input className="input" type="email" placeholder="Email address" />
          </div>
          <div className="input-grp">
            <label>Password</label>
            <input className="input" type="password" placeholder="Password" />
          </div>
          <div className="input-grp">
            <label>Confirm Password</label>
            <input className="input" type="password" placeholder="Password" />
          </div>
          <button className="btn btn-primary btn-order">Sign Up</button>
        </form>
        <p>
          Already have an account? &nbsp;
          <Link to="/login" className="form-link">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
