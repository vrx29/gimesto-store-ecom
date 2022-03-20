import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "../../../../assets/icons";

export function WishlistCard({ item, removeWishlist }) {
  return (
    <div className="card card-ecom card-horiz">
      <div className="card-img-cont">
        <img
          className="card-img"
          src={item.img}
          alt={item.name}
          loading="lazy"
        />
      </div>
      <div className="card-badge">SALE</div>
      <div className="card-body">
        <div className="card-header">
          <h6 className="card-title">{item.brand}</h6>
          <p className="card-desc">{item.name}</p>
          <div className="card-price">
            <span className="price-new">Rs.{item.discountedPrice}</span>
            <span className="price-old">Rs.{item.price}</span>
            <span className="discount">(24%)</span>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">ADD TO CART</button>

          <button
            className="btn btn-icon active"
            onClick={() => removeWishlist(item._id)}
          >
            <HeartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
