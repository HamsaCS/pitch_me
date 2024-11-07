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
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#fff] font-[600] capitalize`}
        >
          Best Pitches in   <br />THE OCEAN OF PITCHES
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#fff]">
        PITCH ME is a dynamic platform designed to connect entrepreneurs with investors, providing a space where innovative ideas can be showcased. Inspired by the concept of Shark Tank, entrepreneurs can present their ventures, while investors have the opportunity to evaluate, invest in, and acquire stakes in promising projects. This platform fosters collaboration and growth, offering a streamlined process for turning visionary ideas into successful businesses.{" "}
          <br />BE AN OUTBOXER
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    See Pitch
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
