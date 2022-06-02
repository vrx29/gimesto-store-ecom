import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { initialFormState } from "../../reducers/constants";
import { formReducer } from "../../reducers/reducerFunctions";
import { signUp } from "../../redux/features/authSlice";
import { validateEmail } from "../../utils/generalUtils";
import "./signup.css";

export function SignUp() {
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const { firstName, lastName, email, password, confirmPassword } = formState;

  useEffect(() => {
    authToken && navigate(from, { replace: true });
  }, [authToken]);

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

  const signUpHandler = (e) => {
    e.preventDefault();
    if ([firstName, lastName, email, password, confirmPassword].includes("")) {
      setError("Please enter data in all input fields");
    } else if (!validateEmail(email)) {
      setError("Please enter email in correct format");
    } else if (password !== confirmPassword) {
      setError("Confirm Password must be same as Password");
    } else {
      dispatch(
        signUp({ firstName, lastName, email, password, confirmPassword })
      );
    }
    // navigate(from, { replace: true }); //After success send back to previous router from where it was routed here
  };
  return (
    <main>
      <div className="auth-cont">
        <h5>Sign Up</h5>
        <p className="subtext">
          Please create your account by filling the required details.
        </p>
        <form className="signup-form" onSubmit={signUpHandler}>
          <div className="input-grp">
            <label>First name</label>
            <input
              name="firstName"
              className="input"
              type="text"
              placeholder="First name"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-grp">
            <label>Last name</label>
            <input
              name="lastName"
              className="input"
              type="text"
              placeholder="Last name"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-grp">
            <label>Email address</label>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Email address"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-grp">
            <label>Password</label>
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-grp">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              className="input"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
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
              "Sign Up"
            )}
          </button>
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
