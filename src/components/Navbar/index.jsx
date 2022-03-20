import React, { useState } from "react";
import "./navbar.css";
import {
  Avatar,
  CartIcon,
  MenuIcon,
  ShopIcon,
  WishListIcon,
} from "../../assets/icons";
import avatar from "../../assets/avatars/avataaars.png";
import { GimestoLogo } from "../../assets/logo/logo";
import { Link } from "react-router-dom";
import { DropdownMenu } from "../Dropdown";
import { useAuth, useCart, useWishList } from "../../context";
import { useAuthHandler } from "../../hooks";

export function Navbar() {
  const { userAuthState } = useAuth();
  const { handleLogout } = useAuthHandler();
  const [showDropdown, setShowDropdown] = useState(false);
  const {
    wishlistState: { data: wishlist },
  } = useWishList();
  const {
    cartState: { data: cart },
  } = useCart();
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <GimestoLogo />
        </Link>
      </div>
      <div className="search-cont">
        <input className="input" type="email" placeholder="Search" />
      </div>
      <nav className="nav-links">
        <Link to="products">
          <ShopIcon />
          <span>Shop</span>
        </Link>
        <Link to="wishlist" className="badge">
          <WishListIcon />
          {wishlist.length !== 0 && (
            <div className="badge-count">{wishlist.length}</div>
          )}
          <span>Wishlist</span>
        </Link>
        <Link to="/cart" className="badge">
          <CartIcon />
          {cart.length !== 0 && (
            <div className="badge-count badge-cart">{cart.length}</div>
          )}
          <span>Cart</span>
        </Link>
        {userAuthState?.isLoggedIn ? (
          <>
            <div className="profile" onClick={() => setShowDropdown(true)}>
              <img className="avatar avatar-xs" src={avatar} alt="avatar" />
              {/* <Avatar /> */}
              <span>{userAuthState.user}</span>
              {showDropdown && (
                <DropdownMenu
                  show={showDropdown}
                  onClickOutside={() => setShowDropdown(false)}
                  logout={handleLogout}
                />
              )}
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Log in</button>
          </Link>
        )}
        <button className="nav-menu">
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
}
