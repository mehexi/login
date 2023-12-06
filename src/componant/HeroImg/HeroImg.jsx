/* eslint-disable no-unused-vars */
import React from "react";
import mobile from "../../assets/bg.svg";
import bg from "../../assets/wave.png";

const HeroImg = () => {
  return (
    <div className='h-screen relative flex justify-center items-center'>
  <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9/12 z-10 drop-shadow-sm' src={mobile} alt="" />
  <img className='object-contain absolute w-3/4 left-0 bottom-0' src={bg} alt="" />
</div>

  );
};

export default HeroImg;
