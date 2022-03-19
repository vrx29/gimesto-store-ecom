import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { useAuthHandler } from "../../hooks";
import "./signup.css";

export function SignUp() {
  const { formState, handleInputChange, handleSignUpFormSubmit } =
    useAuthHandler();

  return (
    <main>
      <div className="auth-cont">
        <h5>Sign Up</h5>
        <p className="subtext">
          Please create your account by filling the required details.
        </p>
        <form className="signup-form" onSubmit={handleSignUpFormSubmit}>
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
