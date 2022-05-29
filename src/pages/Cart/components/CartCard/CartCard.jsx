import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeartIcon } from "../../../../assets/icons";
import {
  deleteFromCart,
  updateCart,
} from "../../../../redux/features/cartSlice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../../../redux/features/wishlistSlice";
import { calcDiscount } from "../../../../utils/generalUtils";

export function CartCard({ product }) {
  const { _id, img, brand, name, discountedPrice, price, qty } = product;
  const discount = calcDiscount(price, discountedPrice);
  const { data: wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

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
            <span className="discount">({discount}%)</span>
          </div>
        </div>
        <div className="cart-item-footer">
          <button
            className="btn btn-qty"
            onClick={() =>
              dispatch(updateCart({ productId: _id, type: "decrement" }))
            }
          >
            -
          </button>
          <span>{qty}</span>
          <button
            className="btn btn-qty"
            onClick={() =>
              dispatch(updateCart({ productId: _id, type: "increment" }))
            }
          >
            +
          </button>
          <button
            className="btn outline"
            onClick={() => dispatch(deleteFromCart(_id))}
          >
            Remove from cart
          </button>

          {wishlist?.some((prod) => prod._id === product._id) ? (
            <button
              className="btn btn-icon active"
              onClick={() => dispatch(deleteFromWishlist(product._id))}
            >
              <HeartIcon />
            </button>
          ) : (
            <button
              className="btn btn-icon"
              onClick={() => dispatch(addToWishlist(product))}
            >
              <HeartIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
