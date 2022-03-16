import { useState, React, useEffect } from "react";
import "./products.css";
import { Loader, ProductCard } from "../../components";
import { Filters } from "./components";
import axios from "axios";
import { useProducts } from "../../context/productContext";
import { getProducts } from "../../utils/productUtils/productOps";

export function Products() {
  const { state, dispatch } = useProducts();
  const { products, loading } = state;

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <main className="shop-section">
      <aside className="filters-container">
        <Filters />
      </aside>
      <section className="products-container">
        {loading ? (
          <Loader type="cylon" />
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </section>
    </main>
  );
}
