import axios from "axios";
import React, { useState, useEffect } from "react";
import "./filters.css";

export function Filters() {
  const [categories, setCategories] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);

  // Fetching product categories from backend
  useEffect(() => {
    (async function () {
      const res = await axios.get("/api/categories");
      const data = await res.data;
      setCategories(data.categories);
    })();
  }, []);

  // Fetching price Range of products from backend

  useEffect(() => {
    (async function () {
      const res = await axios.get("/api/priceranges");
      const data = await res.data;
      setPriceRanges(data.priceRanges);
    })();
  }, []);

  return (
    <>
      <div className="filter-action">
        <h5>Filters</h5>
        <button className="btn-filter-clear">Clear all</button>
      </div>
      <div>
        <p className="filter-title">Ratings</p>
        <input type="range" min="1" max="5" className="slider" />
      </div>
      <div>
        <p className="filter-title">Category</p>
        <ul>
          {categories &&
            categories.map(({ id, categoryName }) => (
              <li key={id}>
                <label className="filter-checkbox">
                  <input type="checkbox" />
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
            priceRanges.map(({ id, low, high }) => (
              <li key={id}>
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  {`₹ ${low} - ${high ? `₹ ${high}` : "Above"}`}
                </label>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <p className="filter-title">Sort by</p>
        <label className="label-radio">
          <input type="radio" className="input-radio" name="sort" />
          <div className="btn-radio"></div>
          Price - Low to High
        </label>
        <label className="label-radio">
          <input type="radio" className="input-radio" name="sort" />
          <div className="btn-radio"></div>
          Price - High to Low
        </label>
      </div>
    </>
  );
}
