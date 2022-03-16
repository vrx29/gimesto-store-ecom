import React from "react";
import "./product-card.css";
import { HeartIcon } from "../../assets/icons";
import PropTypes from "prop-types";

export function ProductCard({ product }) {
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

          <button className="btn btn-icon active">
            <HeartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
