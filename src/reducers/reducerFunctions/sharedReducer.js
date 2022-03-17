export const sharedReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_DATA":
      return { ...state, data: payload };
    case "SET_SUCCESS":
      return { ...state, loading: false };
    case "SET_ERROR":
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};
