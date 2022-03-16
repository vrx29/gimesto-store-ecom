import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "../../../../assets/icons";

export function WishlistCard({ product }) {
  return (
    <div className="card card-ecom card-horiz">
      <div className="card-img-cont">
        <img
          className="card-img"
          src="https://rukminim1.flixcart.com/image/416/416/kzfvzww0/gamepad/b/u/i/-original-imagbg7nnjpyyrzh.jpeg?q=70"
          alt="ps5"
          loading="lazy"
        />
      </div>
      <div className="card-badge">SALE</div>
      <div className="card-body">
        <div className="card-header">
          <h6 className="card-title">SONY</h6>
          <p className="card-desc">DualSense Gamepad</p>
          <div className="card-price">
            <span className="price-new">Rs.4599</span>
            <span className="price-old">Rs.5999</span>
            <span className="discount">(24%)</span>
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
