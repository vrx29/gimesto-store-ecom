import React from "react";
import "./footer.css";
import { GimestoLogo } from "../../assets/logo/logo";
import { HeartIcon } from "../../assets/icons";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/social-icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <GimestoLogo />
        <p>One stop gaming solution</p>
        <p>© Gimesto All Rights reserved</p>
        <p>
          Made with
          <span className="footer-love-icon">
            <HeartIcon />
          </span>
          by Vineet
        </p>
        <div className="footer-links">
          <a href="/">
            <GithubIcon />
          </a>
          <a href="/">
            <TwitterIcon />
          </a>
          <a href="/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="footer-item">
        <h5>Categories</h5>
        <ul className="footer-list">
          <li>
            <a href="/">Gaming Consoles</a>
          </li>
          <li>
            <a href="/">PC Components</a>
          </li>
          <li>
            <a href="/">Gaming Accessories</a>
          </li>
          <li>
            <a href="/">Virtual Reality Devices</a>
          </li>
        </ul>
      </div>
      <div className="footer-item">
        <h5>About</h5>
        <ul className="footer-list">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
        </ul>
      </div>
      <div className="footer-item">
        <h5>Located at</h5>
        <ul className="footer-list">
          <li>100 Sector 16 Ghaziabad, U.P - 201011</li>
          <li>+91-9700000000</li>
          <li>jammackp@gmail.com</li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
}
