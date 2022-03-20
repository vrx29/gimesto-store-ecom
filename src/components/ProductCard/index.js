import React from "react";
import "./product-card.css";
import { HeartIcon } from "../../assets/icons";
import PropTypes from "prop-types";
import { useWishList } from "../../context";

export function ProductCard({ product }) {
  const { wishlistState, addToWishlist, deleteFromWishlist } = useWishList();
  return (
    <div className="card card-ecom">
      <div className="card-img-cont">
        <img className="card-img" src={product.img} alt="ps5" loading="lazy" />
      </div>
      <div className="card-badge">SALE</div>
      <div className="card-body">
        <div className="card-header">
          <h6 className="card-title">{product.brand}</h6>
          <p className="card-desc">{product.name}</p>
          <div className="card-price">
            <span className="price-new">Rs.{product.discountedPrice}</span>
            <span className="price-old">Rs.{product.price}</span>
            <span className="discount">({24})%</span>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">ADD TO CART</button>
          {wishlistState.data?.some((prod) => prod._id === product._id) ? (
            <button
              className="btn btn-icon active"
              onClick={() => deleteFromWishlist(product._id)}
            >
              <HeartIcon />
            </button>
          ) : (
            <button
              className="btn btn-icon"
              onClick={() => addToWishlist(product)}
            >
              <HeartIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
