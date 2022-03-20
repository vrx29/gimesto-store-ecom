import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { useAuthHandler } from "../../hooks";
import { Loader } from "../../components/Loader";
import { useEffect } from "react";
import { useAuth } from "../../context";

export function Login() {
  const { userAuthState } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const {
    formState,
    handleLoginFormSubmit,
    handleInputChange,
    setUpTestLogin,
  } = useAuthHandler();

  useEffect(() => {
    userAuthState.isLoggedIn && navigate(from, { replace: true });
  }, []);

  useEffect(() => {
    if (formState.success) {
      navigate(from, { replace: true });
    }
  }, [formState.success]);

  const loginHandler = (e) => {
    e.preventDefault();
    handleLoginFormSubmit();
  };

  return (
    <main>
      <div className="auth-cont">
        <h5>Log in</h5>
        <p className="subtext">Please login using account detail bellow.</p>
        <form className="signup-form" onSubmit={loginHandler}>
          <div className="input-grp">
            <label>Email address</label>
            <input
              className="input"
              type="email"
              placeholder="Email address"
              name="email"
              value={formState.email}
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
              value={formState.password}
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
          <button className="btn outline btn-order" onClick={setUpTestLogin}>
            Sign In as Guest User
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
