import React from "react";
import "./wishlist.css";
import wishlistEmpty from "../../assets/fallback/empty-wishlist.png";
import { WishlistCard } from "./components";
import { useSelector } from "react-redux";
import { deleteFromWishlist } from "../../redux/features/wishlistSlice";

export function WishList() {
  const { data: products } = useSelector((state) => state.wishlist);

  return (
    <main>
      <h6>
        My Wishlist{" "}
        <span className="wishlist-item-count">{products.length} Items</span>
      </h6>
      <div className="products-cont">
        {products.length > 0 ? (
          products.map((item) => (
            <WishlistCard
              key={item._id}
              item={item}
              removeWishlist={deleteFromWishlist}
            />
          ))
        ) : (
          <div className="cart-empty">
            <p className="wishlist-msg">
              You wishlist is empty. Please add some items!
            </p>
            <img src={wishlistEmpty} alt="Empty cart" />
          </div>
        )}
      </div>
    </main>
  );
}
