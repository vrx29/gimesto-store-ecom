import "./filters.css";
import { useFiltersHandler, useFetchApi } from "../../../../hooks";
import { useFilter } from "../../../../context";

export function Filters() {
  // Fetching product categories from backend
  const {
    state: { data: categories },
  } = useFetchApi({
    api: "/api/categories",
    property: "categories",
  });

  // Fetching price Range of products from backend
  const {
    state: { data: priceRanges },
  } = useFetchApi({
    api: "/api/priceranges",
    property: "priceRanges",
  });

  const { filterState } = useFilter();
  const {
    handleCategoryChange,
    handlePriceRangeChange,
    handleRating,
    handleSorting,
    handeClearFilter,
  } = useFiltersHandler();

  return (
    <>
      <div className="filter-action">
        <h5>Filters</h5>
        <button className="btn-filter-clear" onClick={handeClearFilter}>
          Clear all
        </button>
      </div>
      <div>
        <p className="filter-title">Ratings</p>
        <input
          type="range"
          min="1"
          max="5"
          className="slider"
          value={filterState.rating}
          onChange={handleRating}
        />
      </div>
      <div>
        <p className="filter-title">Category</p>
        <ul>
          {categories &&
            categories.map(({ id, categoryName }) => (
              <li key={id}>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    value={categoryName}
                    checked={filterState.categories.some(
                      (category) => category === categoryName
                    )}
                    onChange={handleCategoryChange}
                  />
                  {categoryName}
                </label>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <p className="filter-title">Price</p>
        <ul>
          {priceRanges &&
            priceRanges.map((price) => (
              <li key={price.id}>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    value={JSON.stringify(price)}
                    checked={
                      filterState.priceLow.includes(price.low) &&
                      filterState.priceHigh.includes(price.high)
                    }
                    onChange={handlePriceRangeChange}
                  />
                  {`₹ ${price.low} - ₹ ${price.high}`}
                </label>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <p className="filter-title">Sort by</p>
        <label className="label-radio">
          <input
            type="radio"
            className="input-radio"
            name="sort"
            value="PRICE_LOW_TO_HIGH"
            checked={filterState.sortBy === "PRICE_LOW_TO_HIGH"}
            onChange={handleSorting}
          />
          <div className="btn-radio"></div>
          Price - Low to High
        </label>
        <label className="label-radio">
          <input
            type="radio"
            className="input-radio"
            name="sort"
            value="PRICE_HIGH_TO_LOW"
            checked={filterState.sortBy === "PRICE_HIGH_TO_LOW"}
            onChange={handleSorting}
          />
          <div className="btn-radio"></div>
          Price - High to Low
        </label>
      </div>
    </>
  );
}
