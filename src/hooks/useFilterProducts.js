import { useFilter } from "../context/filterContext";
import {
  filterByPriceRange,
  filterByRating,
  filterCategories,
  sortDecreasing,
  sortIncreasing,
} from "../utils/filterUtils";

export const useFilterProducts = (products) => {
  let data = [...products];
  const { filterState } = useFilter();
  const { categories, sortBy, priceLow, priceHigh, rating, searchQuery } =
    filterState;

  if (searchQuery.length > 0) {
    data = data.filter((item) => {
      const inputStr = item.name;
      return inputStr.startsWith(searchQuery);
    });
  }

  if (sortBy === "PRICE_LOW_TO_HIGH") {
    data = sortIncreasing(data);
  }
  if (sortBy === "PRICE_HIGH_TO_LOW") {
    data = sortDecreasing(data);
  }

  if (categories.length > 0) {
    data = filterCategories(data, categories);
  }

  if (priceLow.length > 0 && priceHigh.length > 0) {
    const low = Math.min(...priceLow);
    const high = Math.max(...priceHigh);
    data = filterByPriceRange(data, low, high);
  }

  data = filterByRating(data, rating);
  return [...data];
};
