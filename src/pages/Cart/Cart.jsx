import React from "react";
import "./cart.css";
import { CartCard } from "./components";

export function Cart() {
  const data = {
    id: 1,
    brand: "sony",
    name: "DualSense Gamepad",
    price: 5999,
    discountedPrice: 4599,
    img: "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/gamepad/b/u/i/-original-imagbg7nnjpyyrzh.jpeg?q=70",
    category: "Gaming Accessories",
    rating: 5,
  };
  return (
    <main className="cart-cont">
      <div className="cart-left-cont">
        <CartCard product={data} />
      </div>
      <div className="cart-right-cont">
        <h6 className="cart-title">
          My Cart
          <span className="item-count">1 Items</span>
        </h6>
        <div className="order-detail-item">
          <span>Price</span>
          <span>₹ 12000</span>
        </div>
        <div className="order-detail-item">
          <span>Discount</span>
          <span className="discount">₹</span>
        </div>
        <div className="order-detail-item">
          <span>Delivery Charge</span>
          <span>₹ 25612</span>
        </div>
        <div className="order-detail-item">
          <span>Total Amount</span>
          <span>₹ 4555</span>
        </div>
        <p>You will save ₹200 on this purchase</p>
        <button className="btn btn-primary btn-order">Place Order</button>
      </div>
    </main>
  );
}
