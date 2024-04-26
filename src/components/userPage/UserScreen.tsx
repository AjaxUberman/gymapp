import React, { useState } from "react";
import NavBar from "./NavBar";
import BottomBar from "./BottomBar";
import Content from "./Content";
import "./userScreen.css";

const UserScreen = () => {
  const [active, setActive] = useState("Workouts");
  return (
    <div className="bg-white-bg h-screen overflow-y-hidden overflow-x-hidden relative">
      <div className="border-b-2 ">
        <NavBar />
      </div>
      <div className="w-screen scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500 content-container overflow-y-scroll overflow-x-hidden">
        <Content />
      </div>
      <div className="border-t-2 absolute bottom-0 ">
        <BottomBar active={active} />
      </div>
    </div>
  );
};

export default UserScreen;
