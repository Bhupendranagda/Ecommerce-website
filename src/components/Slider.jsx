import React, { useState } from "react";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { ApiSlides } from "../apifolder/SliderApi";
import "./Slider.css";

const Slider = () => {
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  const [slides, setSlides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between mobile:hidden ">
      {/* Left Arrow */}
      <div className={arrowStyle}>
        <ArrowLeftOutlinedIcon
          onClick={prevSlide}
          style={{ fontSize: "50px" }}
        />
      </div>
      {/* Center image */}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[500px] justify-center 
    items-center shadow-2xl border=[#c0c0c0] rounded-lg border-10px 
    overflow-hidden relative` + slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    src={slide.src}
                    alt=""
                    className="h-[100%] object-cover"
                  />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn hover: scale-[1.1] hover:bg-blue-500">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* Right Arrow */}
      <div className={arrowStyle}>
        <ArrowRightOutlinedIcon
          onClick={nextSlide}
          style={{ fontSize: "50px" }}
        />
      </div>
    </div>
  );
};

export default Slider;
