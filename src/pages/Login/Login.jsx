import React, { useReducer } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { Loader } from "../../components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formReducer } from "../../reducers/reducerFunctions";
import { initialFormState } from "../../reducers/constants";
import { login } from "../../redux/features/authSlice";
import { validateEmail } from "../../utils/generalUtils";

export function Login() {
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const { email, password } = formState;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    formDispatch({
      type: "SET_FORM_DATA",
      payload: { [name]: value },
    });
  };
  const setError = (msg) => {
    formDispatch({
      type: "SET_FORM_ERROR",
      payload: msg,
    });

    setTimeout(() => {
      formDispatch({
        type: "SET_FORM_SUCCESS",
      });
    }, 2000);
  };

  useEffect(() => {
    authToken && navigate(from, { replace: true });
  }, [authToken]);

  useEffect(() => {
    if (formState.success) {
      navigate(from, { replace: true });
    }
  }, [formState.success]);

  const loginHandler = (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setError("Please enter data in all input fields");
    } else if (!validateEmail(email)) {
      setError("Please enter email in correct format");
    } else {
      dispatch(login({ email, password }));
    }
  };
  const setUpTestLogin = (e) => {
    e.preventDefault();
    formDispatch({
      type: "SET_FORM_DATA",
      payload: { email: "vineet@gmail.com", password: "vineet123" },
    });
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
