import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeartIcon } from "../../../../assets/icons";
import { addToCart } from "../../../../redux/features/cartSlice";
import { calcDiscount } from "../../../../utils/generalUtils";

export function WishlistCard({ item, removeWishlist }) {
  const { data: cart } = useSelector((state) => state.cart);
  const discount = calcDiscount(item.price, item.discountedPrice);
  const dispatch = useDispatch();
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
          {cart.some((prod) => prod._id === item._id) ? (
            <Link to="/cart">
              <button className="btn outline">GO TO CART</button>
            </Link>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(item))}
            >
              ADD TO CART
            </button>
          )}
          <button
            className="btn btn-icon active"
            onClick={() => dispatch(removeWishlist(item._id))}
          >
            <HeartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
