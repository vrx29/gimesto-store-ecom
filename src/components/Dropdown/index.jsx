import React, { useEffect, useRef } from "react";
import "./dropdown.css";
import { AccountIcon } from "../../assets/icons/AccountIcon";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { Link } from "react-router-dom";

export function DropdownMenu(props) {
  const ref = useRef(null);
  const { show, onClickOutside, logout } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!show) {
    return null;
  }

  return (
    <div className="dropdown-menu" ref={ref}>
      <ul>
        <li>
          <Link to="/account" className="dropdown-menu-item">
            <span>
              <AccountIcon />
            </span>
            Account
          </Link>
        </li>
        <li>
          <Link to="/" className="dropdown-menu-item" onClick={logout}>
            <span>
              <LogoutIcon />
            </span>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
