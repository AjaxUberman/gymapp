import React, { useState } from "react";
import NavBar from "../userPage/NavBar";
import BottomBar from "../userPage/BottomBar";
import LibraryContent from "./LibraryContent";

const UserScreen = () => {
  return (
    <div className="bg-white-bg h-screen overflow-y-hidden overflow-x-hidden relative">
      <div className="border-b-2">
        <NavBar />
      </div>
      <div className="w-screen h-[675px] overflow-y-scroll overflow-x-hidden">
        <LibraryContent />
      </div>
      <div className="border-t-2 absolute bottom-0">
        <BottomBar />
      </div>
    </div>
  );
};

export default UserScreen;
