import { initialFilterState } from "../../reducers/constants/initialFilterState";

const paramsReducer = (filterState, currParam) => {
  const [key, val] = currParam;

  switch (key) {
    case "sortBy":
      return {
        ...filterState,
        sortBy: val,
      };
    case "categories":
      return {
        ...filterState,
        categories: [...filterState.categories, val],
      };
    case "rating":
      return {
        ...filterState,
        rating: Number(val),
      };
    case "priceLow":
      return {
        ...filterState,
        priceLow: [...filterState.priceLow, Number(val)],
      };
    case "priceHigh":
      return {
        ...filterState,
        priceHigh: [...filterState.priceHigh, Number(val)],
      };
    default:
      return {
        ...filterState,
      };
  }
};

export const getFilterStateFromParams = (searchParams) => {
  return [...searchParams].reduce(paramsReducer, initialFilterState);
};
