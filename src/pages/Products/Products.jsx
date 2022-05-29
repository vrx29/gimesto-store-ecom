import "./products.css";
import { Loader, ProductCard } from "../../components";
import { Filters } from "./components";
import { useFilterProducts } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/features/productSlice";

export function Products() {
  const { data: products, loading } = useSelector((state) => state.product);
  const filteredData = useFilterProducts(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
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
          filteredData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </section>
    </main>
  );
}
