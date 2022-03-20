import "./products.css";
import { Loader, ProductCard } from "../../components";
import { Filters } from "./components";
import { useProducts } from "../../context";
import { useFilterProducts } from "../../hooks";

export function Products() {
  const { productState } = useProducts();
  const { data: products, loading } = productState;
  const filteredData = useFilterProducts(products);
  return (
    <main className="shop-section">
      <aside className="filters-container">
        <Filters />
      </aside>
      <section className="products-container">
        {loading ? (
          <Loader type="cylon" />
        ) : (
          filteredData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </section>
    </main>
  );
}
