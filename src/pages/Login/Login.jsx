import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useAuthHandler } from "../../hooks";
import { Loader } from "../../components/Loader";

export function Login() {
  const { formState, handleLoginFormSubmit, handleInputChange } =
    useAuthHandler();
  return (
    <main>
      <div className="auth-cont">
        <h5>Log in</h5>
        <p className="subtext">Please login using account detail bellow.</p>
        <form className="signup-form" onSubmit={handleLoginFormSubmit}>
          <div className="input-grp">
            <label>Email address</label>
            <input
              className="input"
              type="email"
              placeholder="Email address"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-grp">
            <label>Password</label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <Link to="" className="form-link">
            Forgot password?
          </Link>
          {formState.error && (
            <div className="txt-error">{formState.errorMsg}</div>
          )}
          <button
            className="btn btn-primary btn-order"
            type="submit"
            disabled={formState.loading}
          >
            {formState.loading ? (
              <Loader color="#fff" height="20px" />
            ) : (
              "Log in"
            )}
          </button>
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
