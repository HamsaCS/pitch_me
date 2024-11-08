import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        position: 'relative',
      }}
    >
      <video
        src="/money_fly.mp4"
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the video covers the whole background without distortion
          zIndex: -1, // Keeps the video behind the content
        }}
      />
    
    <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
  <h1
    className={`text-[36px] 800px:text-[61px] font-bold capitalize text-white whitespace-nowrap`}
    style={{
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4), 4px 4px 8px rgba(0, 0, 0, 0.2)"
    }}
  >
    Best Pitches in<br></br>THE OCEAN OF PITCHES
  </h1>
  <p className="pt-5 text-[16px] font-[Poppins] font-bold text-white">
  </p>

  <Link to="/products" className="inline-block">
    <div className={`${styles.button} mt-5`}>
      <span className="text-[#ebe8e8] font-[Poppins] text-[18px]">
        See Pitch
      </span>
    </div>
  </Link>
</div>

    </div>
  );
};

export default Hero;
