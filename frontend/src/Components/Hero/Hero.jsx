import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import shop_img from "../Assets/shop3Img.webp";
import { FaHandPaper } from "react-icons/fa"; //for icons: npm install react-icons
import WavingHand from "../Animation/WavingHand";
import Popular from "../Popular";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div>
            <div className="hero-hand-icon">
              <p>new</p>
              <WavingHand></WavingHand>
            </div>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          {/* <img src={arrow_icon}></img> */}
        </div>
      </div>
      <div className="hero-right">
        <img src={shop_img}></img>
       
      </div>
    </div>
  );
}
