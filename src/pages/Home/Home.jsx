import "./home.css";
import { BannerCard, Loader, ProductCard } from "../../components";
import keyboardImg from "../../assets/banner-images/banner-keyboard.png";
import xboxImg from "../../assets/banner-images/xbox-controller.png";
import vrImg from "../../assets/banner-images/vr.png";
import { useProducts } from "../../context";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/features/productSlice";

export function Home() {
  const navigate = useNavigate();
  const { data: products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const goToPosts = (params) =>
    navigate({
      pathname: "/products",
      search: `?${createSearchParams(params)}`,
    });

  return (
    <>
      <main>
        <section className="banner">
          <div className="banner-badge">Now Available</div>
          <div className="banner-content">
            <p>KEYBOARDS</p>
            <h5>Keychron K2 Mechanical Keyboard</h5>
          </div>
          <img
            className="banner-img"
            src={keyboardImg}
            alt="keychron keyboard"
            loading="lazy"
            onClick={() => goToPosts({ categories: "Gaming Accessories" })}
          />
        </section>
        <section className="card-banners">
          <BannerCard
            background="green"
            img={xboxImg}
            category="Gaming Accessories"
            description="Xbox 360 wireless controller"
            onClick={() => goToPosts({ categories: "Gaming Accessories" })}
          />
          <BannerCard
            trending={true}
            background="navy"
            img={vrImg}
            category="Virtual Reality"
            description="Virtual Reality devices for gaming"
            onClick={() => goToPosts({ categories: "Gaming Accessories" })}
          />
        </section>
        <h3 className="trending-heading">Trending Products</h3>
        <section className="products-cont">
          {loading ? (
            <Loader />
          ) : (
            products
              .slice(0, 5)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          )}
        </section>
      </main>
    </>
  );
}
