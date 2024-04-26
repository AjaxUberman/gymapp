import React, { useState } from "react";

import Macros from "./Macros";
import UserSlider from "./UserSlider.js";
import WorkoutPage from "./WorkoutPage";
import Cardio from "./Cardio";

const Content = () => {
  const [active, setActive] = useState("");

  return (
    <>
      {active ? (
        <div className="w-screen">
          <WorkoutPage active={active} setActive={setActive} />
        </div>
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
