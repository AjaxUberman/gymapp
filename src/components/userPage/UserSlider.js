import React, { useState } from "react";
import Slider from "react-slick";
import library from "../../datas/exerciseLibrary.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WorkoutPage from "./WorkoutPage";

function MultipleItems({ setActive }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const itemHandler = (key) => {
    setActive(key);
  };

  return (
    <div className="px-4 flex flex-col gap-3">
      <h1 className="text-item-text-cof text-2xl font-extrabold border-b-2">
        WORKOUTS
      </h1>
      <div className="">
        <Slider {...settings}>
          {library &&
            Object.keys(library).map((key) => (
              <button
                key={key}
                className="bg-gray-300 border-2 py-4 px-2"
                onClick={() => itemHandler(key)}
              >
                <div className="flex flex-col gap-2 items-center" value={key}>
                  <img
                    alt={key}
                    src={library[key].images}
                    className="h-24 object-cover rounded-lg w-full"
                    onClick={() => itemHandler(key)}
                  />
                  <h1 className="text-black capitalize font-bold">{key}</h1>
                </div>
              </button>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default MultipleItems;
