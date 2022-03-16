import { useState, React, useEffect } from "react";
import "./products.css";
import { ProductCard } from "../../components";
import { Filters } from "./components";
import axios from "axios";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get("/api/products");
        const data = await res.data;
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className="shop-section">
      <aside className="filters-container">
        <Filters />
      </aside>
      <section className="products-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </main>
  );
}
