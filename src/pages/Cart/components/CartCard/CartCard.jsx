import React from "react";
import { HeartIcon } from "../../../../assets/icons";

export function CartCard({ product }) {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={product.img} alt={product.name} loading="lazy" />
      </div>
      <div className="cart-item-details">
        <div>
          <h6 className="cart-item-title">{product.brand}</h6>
          <p className="cart-item-desc">{product.name}</p>
          <div className="cart-item-price">
            <span className="price-new">₹ {product.discountedPrice}</span>
            <span className="price-old">₹ {product.price}</span>
            <span className="discount">(24%)</span>
          </div>
        </div>
        <div className="cart-item-footer">
          <button className="btn btn-qty">-</button>
          <span>1</span>
          <button className="btn btn-qty">+</button>
          <button className="btn outline">Remove from cart</button>
          <button className="btn btn-icon active">
            <HeartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
