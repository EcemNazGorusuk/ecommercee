import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/basket.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pinterestIcon from "../Assets/pintester_icon.png";
import whatsAppIcon from "../Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo}></img>
        <p>SHOP UNIVERSE</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagramIcon}></img>
        </div>
        <div className="footer-icons-container">
          <img src={pinterestIcon}></img>
        </div>
        <div className="footer-icons-container">
          <img src={whatsAppIcon}></img>
        </div>
      </div>
      <div className="footer-copyright">
        <hr></hr>
        <p>Copyright @ 2023 - All Rights Reserved.</p>
      </div>
    </div>
  );
}
