import { createSearchParams, useSearchParams } from "react-router-dom";
import { useFilter } from "../context/filterContext";
import { initialFilterState } from "../reducers/constants/initialFilterState";

export const useFiltersHandler = () => {
  const { filterState, filterDispatch } = useFilter();
  const { categories, priceLow, priceHigh } = filterState;
  const [_, setSearchParams] = useSearchParams();

  const handleRating = (e) => {
    filterDispatch({
      type: "FILTER_BY_RATING",
      payload: Number(e.target.value),
    });
    setSearchParams(
      createSearchParams({ ...filterState, rating: e.target.value })
    );
  };
  const handleCategoryChange = (e) => {
    let data = [...categories];
    if (e.target.checked) {
      data.push(e.target.value);
    } else {
      data = data.filter((category) => category !== e.target.value);
    }
    filterDispatch({ type: "FILTER_BY_CATEGORY", payload: data });
    setSearchParams(createSearchParams({ ...filterState, categories: data }));
  };

  const handlePriceRangeChange = (e) => {
    let dataLow = [...priceLow];
    let dataHigh = [...priceHigh];
    const input = JSON.parse(e.target.value);

    if (dataLow.includes(input.low) && dataHigh.includes(input.high)) {
      dataLow = [...dataLow].filter((p) => p !== input.low);
      dataHigh = [...dataHigh].filter((p) => p !== input.high);
    } else {
      dataLow = [...dataLow, input.low];
      dataHigh = [...dataHigh, input.high];
    }

    filterDispatch({
      type: "FILTER_BY_PRICE",
      payload: { low: [...dataLow], high: [...dataHigh] },
    });
    setSearchParams(
      createSearchParams({
        ...filterState,
        priceLow: dataLow,
        priceHigh: dataHigh,
      })
    );
  };
  const handleSorting = (e) => {
    filterDispatch({
      type: "FILTER_BY_SORT",
      payload: e.target.value,
    });
    setSearchParams(
      createSearchParams({ ...filterState, sortBy: e.target.value })
    );
  };

  const handeClearFilter = (e) => {
    filterDispatch({ type: "CLEAR_FILTERS" });
    setSearchParams();
  };

  const filterHandlers = {
    handleCategoryChange,
    handlePriceRangeChange,
    handleRating,
    handleSorting,
    handeClearFilter,
  };

  return filterHandlers;
};
