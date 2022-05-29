import axios from "axios";

export const loginService = async (email, password) => {
  const response = await axios.post("/api/auth/login", { email, password });
  return response;
};

export const signupService = async (userDetails) => {
  const response = await axios.post("/api/auth/signup", { ...userDetails });
  return response;
};
