import React from "react";
import "./cart.css";
import { useCart } from "../../context";
import { CartCard } from "./components";
import cartEmpty from "../../assets/fallback/empty-cart.png";
import {
  getCartPrice,
  getCartTotal,
  getDiscountedTotal,
} from "../../utils/generalUtils";

export function Cart() {
  const {
    cartState: { data: cartItems },
  } = useCart();
  const cartPrice = getCartPrice(cartItems);
  const cartDiscount = getDiscountedTotal(cartItems);
  const cartTotal = getCartTotal(cartItems);

  return (
    <main className="cart-cont">
      <div className="cart-left-cont">
        {cartItems.length ? (
          cartItems.map((item) => <CartCard key={item._id} product={item} />)
        ) : (
          <div className="cart-empty">
            <p>Please add some items in cart first</p>
            <img src={cartEmpty} alt="Empty cart" />
          </div>
        )}
      </div>
      <div className="cart-right-cont">
        <h6 className="cart-title">
          My Cart
          <span className="item-count">{cartItems?.length} Items</span>
        </h6>
        <div className="order-detail-item">
          <span>Price</span>
          <span className="txt-success">₹ {cartPrice}</span>
        </div>
        <div className="order-detail-item">
          <span>Discounted Price</span>
          <span className="txt-success discount">₹ {cartDiscount}</span>
        </div>
        <div className="order-detail-item">
          <span>Delivery Charge</span>
          <span>₹ {cartTotal > 0 ? 200 : 0}</span>
        </div>
        <div className="order-detail-item">
          <span>Total Amount</span>
          <span className="txt-success">₹ {cartTotal}</span>
        </div>
        <p>
          You will save &nbsp;
          <span className="txt-warning">₹ {cartPrice - cartDiscount}</span> on
          this purchase
        </p>
        <button className="btn btn-primary btn-order">Place Order</button>
      </div>
    </main>
  );
}
