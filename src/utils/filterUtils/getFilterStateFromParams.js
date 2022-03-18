import { initialFilterState } from "../../reducers/constants/initialFilterState";

const paramsReducer = (filterState, currParam) => {
  const [key, val] = currParam;

  if (key === "sortBy") {
    return {
      ...filterState,
      sortBy: val,
    };
  }
  if (key === "categories") {
    return {
      ...filterState,
      categories: [...filterState.categories, val],
    };
  }
  if (key === "rating") {
    return {
      ...filterState,
      rating: Number(val),
    };
  }
  if (key === "priceLow") {
    return {
      ...filterState,
      priceLow: [...filterState.priceLow, Number(val)],
    };
  }
  if (key === "priceHigh") {
    return {
      ...filterState,
      priceHigh: [...filterState.priceHigh, Number(val)],
    };
  }
};
export const getFilterStateFromParams = (searchParams) => {
  return [...searchParams].reduce(paramsReducer, initialFilterState);
};
