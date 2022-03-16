import React from "react";
import "./wishlist.css";
import { WishlistCard } from "./components";

export function WishList() {
  return (
    <main>
      <h6>
        My Wishlist <span className="wishlist-item-count">1 Items</span>
      </h6>
      <div className="products-cont">
        <WishlistCard  />
      </div>
    </main>
  );
}
