import React from "react";
import "./product-card.css";
import { HeartIcon } from "../../assets/icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { calcDiscount } from "../../utils/generalUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../redux/features/wishlistSlice";
import { addToCart } from "../../redux/features/cartSlice";

export function ProductCard({ product }) {
  const { data: wishlist } = useSelector((state) => state.wishlist);
  const { data: cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const discount = calcDiscount(product.price, product.discountedPrice);
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
            <span className="price-new">₹ {product.discountedPrice}</span>
            <span className="price-old">₹ {product.price}</span>
            <span className="discount">({discount})%</span>
          </div>
        </div>
        <div className="card-footer">
          {cart?.some((item) => item._id === product._id) ? (
            <Link to="/cart">
              <button className="btn outline">GO TO CART</button>
            </Link>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              ADD TO CART
            </button>
          )}

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

ProductCard.propTypes = {
  product: PropTypes.object,
};
