import React, { useState } from "react";
import NavBar from "../userPage/NavBar";
import BottomBar from "../userPage/BottomBar";
import LibraryContent from "./LibraryContent";
import "../userPage/userScreen.css";

const UserScreen = () => {
  const [active, setActive] = useState("Library");

  return (
    <div className="bg-white-bg h-screen overflow-y-hidden overflow-x-hidden relative">
      <div className="border-b-2">
        <NavBar />
      </div>
      <div className="w-screen content-container scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500 overflow-y-scroll overflow-x-hidden">
        <LibraryContent />
      </div>
      <div className="border-t-2 absolute bottom-0">
        <BottomBar active={active} />
      </div>
    </div>
  );
};

export default UserScreen;
