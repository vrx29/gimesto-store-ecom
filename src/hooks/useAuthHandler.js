import axios from "axios";
import { useReducer } from "react";
import { useAuth } from "../context";
import { initialFormState } from "../reducers/constants";
import { formReducer } from "../reducers/reducerFunctions";
import { validateEmail } from "../utils/generalUtils";

export const useAuthHandler = () => {
  const { userAuthState, setUserAuthState } = useAuth();
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const { firstName, lastName, email, password, confirmPassword } = formState;

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

  const setCookie = (token, userName) => {
    document.cookie = `isLoggedIn=true`;
    document.cookie = `authToken=${encodeURIComponent(token)}`;
    document.cookie = `user=${encodeURIComponent(userName)}`;
    setUserAuthState({
      isLoggedIn: true,
      authToken: token,
      user: userName,
    });
  };

  const getCookie = () => {
    const authCookie = document.cookie;
    if (!authCookie) {
      return null;
    }
    const arrayFromCookie = authCookie.split("; ").map((row) => row.split("="));
    const { isLoggedIn, authToken, user } = Object.fromEntries(arrayFromCookie);

    return {
      isLoggedIn: JSON.parse(isLoggedIn),
      authToken,
      user,
    };
  };

  const deleteCookie = () => {
    document.cookie = "isLoggedIn=;max-age=0";
    document.cookie = "authToken=;max-age=0";
    document.cookie = "user=;max-age=0";

    setUserAuthState({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    formDispatch({
      type: "SET_FORM_DATA",
      payload: { [name]: value },
    });
  };

  const getAuthFromServer = async (api, data, userType) => {
    try {
      formDispatch({ type: "SET_LOADING", payload: true });
      const res = await axios.post(api, { ...data });

      setCookie(res.data.encodedToken, res.data[userType].firstName);

      formDispatch({ type: "SET_LOADING", payload: false });
    } catch (error) {
      console.log(error);
      setError("Something went wrong while connecting to server");
      formDispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const handleLogout = () => {
    deleteCookie();
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setError("Please enter data in all input fields");
    } else if (!validateEmail(email)) {
      setError("Please enter email in correct format");
    } else {
      formDispatch({
        type: "SET_FORM_SUCCESS",
      });
      getAuthFromServer(
        "/api/auth/login",
        {
          email,
          password,
        },
        "foundUser"
      );
    }
  };

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    if ([firstName, lastName, email, password, confirmPassword].includes("")) {
      setError("Please enter data in all input fields");
    } else if (!validateEmail(email)) {
      setError("Please enter email in correct format");
    } else if (password !== confirmPassword) {
      setError("Confirm Password must be same as Password");
    } else {
      formDispatch({
        type: "SET_FORM_SUCCESS",
      });
      getAuthFromServer(
        "/api/auth/signup",
        {
          firstName,
          lastName,
          email,
          password,
        },
        "createdUser"
      );
    }
  };

  return {
    formState,
    handleInputChange,
    handleSignUpFormSubmit,
    getCookie,
    handleLoginFormSubmit,
    handleLogout,
  };
};
