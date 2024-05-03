import Image from "next/image";
import React from "react";
import sliderData from "./sliderData";
import "../globals.css";

const Slider = ({ slides }) => {
  return (
    <div id="menu">
     <h2 className=" text-5xl font-bold text-blue-500 text-center mb-2">Our Menu:</h2>
      {/* <div className=" flex justify-center items-center gap-4  max-w-screen-2xl m-auto overflow-scroll"> */}

      <div className=" flex lg:max-w-screen-xl snap-x max-w-lg overflow-scroll w-full lg:gap-4 no-scrollbar m-auto gap-3 px-5 ">
        {sliderData.map((slide, index) => {
          return (
            <img
              className=" object-cover aspect-square snap-start md:w-[304px] md:max-w-[304px] max-w-[166.66px] "
              key={index}
              src={slide.image}
              alt="gambar menu"
            />
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Slider;
