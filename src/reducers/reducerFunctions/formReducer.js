import { initialFormState } from "../constants";

export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_FORM_DATA":
      return { ...state, ...payload };
    case "SET_FORM_ERROR":
      return { ...state, error: true, errorMsg: payload };
    case "SET_FORM_SUCCESS":
      return { ...state, error: false, errorMsg: "" };
    case "SET_LOADING":
      return {
        ...state,
        loading: payload,
      };
    default:
      return { ...state };
  }
};
