import React from "react";
//for animation :npm install react-spring
import { useSpring, animated } from "react-spring";
import hand_icon from "../Assets/handIconn.webp";
import './WavingHand.css';

const WavingHand = () => {
  const animationPropsLeftToRight = useSpring({
    from: { transform: 'translateX(0px)' },
    to: { transform: 'translateX(30px)' },
    config: { duration: 3000 }, // Soldan sağa 3 saniye sürsün
    reset: true,
    onRest: () => {
      animationPropsRightToLeft.start();
    },
  });

  const animationPropsRightToLeft = useSpring({
    from: { transform: 'translateX(30px)' },
    to: { transform: 'translateX(0px)' },
    config: { duration: 3000 }, // Sağdan sola 3 saniye sürsün
    reset: true,
    onRest: () => {
      animationPropsLeftToRight.start();
    },
  });

  return (
    <animated.div style={animationPropsLeftToRight}>
      <span role="img" aria-label="Wave" style={{ display: "inline-block" }} className="hand_icon">
        <img src={hand_icon}></img>
      </span>
    </animated.div>
  );
};

export default WavingHand;
