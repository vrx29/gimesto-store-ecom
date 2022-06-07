import React, { useState } from "react";
import "./navbar.css";
import { CartIcon, MenuIcon, ShopIcon, WishListIcon } from "../../assets/icons";
import avatar from "../../assets/avatars/avataaars.png";
import { GimestoLogo } from "../../assets/logo/logo";
import { Link } from "react-router-dom";
import { DropdownMenu } from "../Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import { useFilter } from "../../context";
import { useFiltersHandler } from "../../hooks/useFiltersHandler";
import { debounce } from "../../utils/debounce/debounce";

export function Navbar() {
  const { authToken, user } = useSelector((state) => state.auth);
  const { data: wishlist } = useSelector((state) => state.wishlist);
  const { data: cart } = useSelector((state) => state.cart);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const {
    filterState: { searchQuery },
  } = useFilter();
  const [searchData, setSearchData] = useState(searchQuery);
  const { handleSearchQuery } = useFiltersHandler();
  const debouncedSearch = debounce(handleSearchQuery, 300);

  const setData = (e) => {
    setSearchData(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <GimestoLogo />
        </Link>
      </div>
      <div className="search-cont">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchData}
          onChange={setData}
        />
      </div>
      <nav className="nav-links">
        <Link to="products">
          <ShopIcon />
          <span>Shop</span>
        </Link>
        <Link to="wishlist" className="badge">
          <WishListIcon />
          {authToken && wishlist?.length !== 0 && (
            <div className="badge-count">{wishlist.length}</div>
          )}
          <span>Wishlist</span>
        </Link>
        <Link to="/cart" className="badge">
          <CartIcon />
          {authToken && cart?.length !== 0 && (
            <div className="badge-count badge-cart">{cart.length}</div>
          )}
          <span>Cart</span>
        </Link>
        {authToken ? (
          <>
            <div className="profile" onClick={() => setShowDropdown(true)}>
              <img className="avatar avatar-xs" src={avatar} alt="avatar" />
              <span>{user}</span>
              {showDropdown && (
                <DropdownMenu
                  show={showDropdown}
                  onClickOutside={() => setShowDropdown(false)}
                  logout={() => dispatch(logout())}
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
