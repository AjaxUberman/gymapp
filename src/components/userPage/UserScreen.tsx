import React, { useState } from "react";
import NavBar from "./NavBar";
import BottomBar from "./BottomBar";
import Content from "./Content";

const UserScreen = () => {
  const [active, setActiev] = useState("Workouts");
  return (
    <div className="bg-white-bg h-screen relative">
      <div className="border-b-2">
        <NavBar />
      </div>
      <div>
        <Content />
      </div>
      <div className="border-t-2 absolute bottom-0">
        <BottomBar active={active} />
      </div>
    </div>
  );
};

export default UserScreen;
