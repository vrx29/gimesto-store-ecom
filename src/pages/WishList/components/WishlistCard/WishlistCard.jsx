import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon } from "../../../../assets/icons";
import { useCart } from "../../../../context";
import { useCartHandler } from "../../../../hooks";
import { calcDiscount } from "../../../../utils/generalUtils";

export function WishlistCard({ item, removeWishlist }) {
  const discount = calcDiscount(item.price, item.discountedPrice);
  const { addToCart } = useCartHandler();
  const {
    cartState: { data: cart },
  } = useCart();
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
            <span className="price-new">₹.{item.discountedPrice}</span>
            <span className="price-old">₹.{item.price}</span>
            <span className="discount">({discount}%)</span>
          </div>
        </div>
        <div className="card-footer">
          {/* <button className="btn btn-primary">ADD TO CART</button> */}
          {cart.some((prod) => prod._id === item._id) ? (
            <Link to="/cart">
              <button className="btn outline">GO TO CART</button>
            </Link>
          ) : (
            <button className="btn btn-primary" onClick={() => addToCart(item)}>
              ADD TO CART
            </button>
          )}
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
