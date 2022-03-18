import { initialFilterState } from "../constants/initialFilterState";

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_BY_RATING":
      return { ...state, rating: payload };
    case "FILTER_BY_SORT":
      return { ...state, sortBy: payload };
    case "FILTER_BY_CATEGORY":
      return { ...state, categories: payload };
    case "FILTER_BY_PRICE":
      return { ...state, priceLow: payload.low, priceHigh: payload.high };
    case "CLEAR_FILTERS":
      return { ...initialFilterState };
    default:
      return { ...state };
  }
};
