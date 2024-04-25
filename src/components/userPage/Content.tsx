import React, { useState, useEffect } from "react";
import { GiShinyApple } from "react-icons/gi";
import { GiRoastChicken } from "react-icons/gi";
import { GiAvocado } from "react-icons/gi";
import Macros from "./Macros";
import UserSlider from "./UserSlider.js";
import WorkoutPage from "./WorkoutPage";
import Cardio from "./Cardio";

const Content = () => {
  const [active, setActive] = useState("");

  return (
    <>
      {active ? (
        <WorkoutPage active={active} setActive={setActive} />
      ) : (
        <div className="w-screen">
          <Macros />
          <UserSlider setActive={setActive} />
          <Cardio />
        </div>
      )}
    </>
  );
};

export default Content;
