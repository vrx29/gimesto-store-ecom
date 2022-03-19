import { useEffect, useState } from "react";
import { useAuthHandler } from "../hooks";

const { createContext, useContext } = require("react");
const { initialAuthState } = require("../reducers/constants");

const AuthContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
  const [userAuthState, setUserAuthState] = useState({});
  const { getCookie } = useAuthHandler();
  const authData = getCookie();

  useEffect(() => {
    setUserAuthState({ ...authData });
    return () => {};
  }, []);

  return (
    <AuthContext.Provider value={{ userAuthState, setUserAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
