import { createContext, useContext, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { initialFilterState } from "../reducers/constants/initialFilterState";
import { filterReducer } from "../reducers/reducerFunctions/filterReducer";
import { getFilterStateFromParams } from "../utils/filterUtils/getFilterStateFromParams";

const filterContext = createContext(initialFilterState);

const FilterProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    getFilterStateFromParams(searchParams)
  );

  return (
    <filterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { FilterProvider, useFilter };
