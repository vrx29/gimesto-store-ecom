import React, { useState } from "react";
import "./navbar.css";
import { CartIcon, MenuIcon, ShopIcon, WishListIcon } from "../../assets/icons";
import avatar from "../../assets/avatars/avataaars.png";
import { GimestoLogo } from "../../assets/logo/logo";
import { Link } from "react-router-dom";
import { DropdownMenu } from "../Dropdown";
import { useAuth } from "../../context";
import { useAuthHandler } from "../../hooks";

export function Navbar() {
  const { userAuthState } = useAuth();
  const { handleLogout } = useAuthHandler();
  const [showDropdown, setShowDropdown] = useState(false);
  const login = true;
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

          <span>Wishlist</span>
        </Link>
        <Link to="/cart" className="badge">
          <CartIcon />
          <span>Cart</span>
        </Link>
        {userAuthState?.isLoggedIn ? (
          <>
            <div className="profile" onClick={() => setShowDropdown(true)}>
              <img className="avatar avatar-xs" src={avatar} alt="avatar" />
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
          <Link to="/signup">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        )}
        <button className="nav-menu">
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
}
