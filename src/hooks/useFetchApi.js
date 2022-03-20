import axios from "axios";
import { useReducer, useEffect } from "react";
import { initialSharedState } from "../reducers/constants/initialSharedState";
import { sharedReducer } from "../reducers/reducerFunctions/sharedReducer";

export const useFetchApi = (apiData, config = {}) => {
  const { api, property } = apiData;

  const [state, dispatch] = useReducer(sharedReducer, initialSharedState);

  useEffect(() => {
    (async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const response = await axios.get(api, config);
        dispatch({
          type: "SET_DATA",
          payload: response.data[property],
        });
        dispatch({ type: "SET_SUCCESS" });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
    })();
  }, []);

  return { state, dispatch };
};
