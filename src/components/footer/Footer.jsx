import React from "react";
import "./footer.css";
import palm from "./IMAGE (4).png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>© Aloha</p>
          <p>Powered by Webflow.</p>
          <div className="footer-logo">
            <img src={palm} alt="Palm Icon" />
          </div>
        </div>
        <div className="footer-section">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Licenses</li>
            <li>Style Guide</li>
            <li>Changelog</li>
            <li>Password</li>
            <li>404</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>Home 1</li>
            <li>Home 2</li>
            <li>Work 1</li>
            <li>Work 2</li>
            <li>Blog 1</li>
            <li>Blog 2</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
