import React from "react";
import { HeartIcon } from "../../../../assets/icons";

export function CartCard({ brand, name, price, discountedPrice, img }) {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={img} alt={name} loading="lazy" />
      </div>
      <div className="cart-item-details">
        <div>
          <h6 className="cart-item-title">{brand}</h6>
          <p className="cart-item-desc">{name}</p>
          <div className="cart-item-price">
            <span className="price-new">₹ {discountedPrice}</span>
            <span className="price-old">₹ {price}</span>
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
