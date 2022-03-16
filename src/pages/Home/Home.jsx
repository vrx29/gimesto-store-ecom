import { useState, useEffect } from "react";
import "./home.css";
import { BannerCard, ProductCard } from "../../components";
import keyboardImg from "../../assets/banner-images/banner-keyboard.png";
import xboxImg from "../../assets/banner-images/xbox-controller.png";
import vrImg from "../../assets/banner-images/vr.png";
import axios from "axios";

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get("/api/products");
        const data = await res.data;
        setProducts(data.products);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

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
          />
        </section>
        <section className="card-banners">
          <BannerCard
            background="green"
            img={xboxImg}
            category="Gaming Accessories"
            description="Xbox 360 wireless controller"
          />
          <BannerCard
            trending={true}
            background="navy"
            img={vrImg}
            category="Virtual Reality"
            description="Virtual Reality devices for gaming"
          />
        </section>
        <h3 className="trending-heading">Trending Products</h3>
        <section className="products-cont">
          {products &&
            products
              .slice(0, 5)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </section>
      </main>
    </>
  );
}
