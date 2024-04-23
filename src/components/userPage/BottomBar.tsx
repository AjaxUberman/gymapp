import React, { useEffect, useState } from "react";
import { IoIosFitness } from "react-icons/io";
import { VscLibrary } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const BottomBar = ({ active }: { active: string }) => {
  return (
    <div className="p-4 flex gap-4 items-center justify-between w-screen">
      <Link
        to="/homepage"
        className={`flex flex-col items-center hover:text-green-400 transition duration-100 ease-in hover:scale-105 ${
          active === "Workouts" ? "text-green-400" : ""
        }`}
      >
        <div className="text-2xl">
          <IoIosFitness />
        </div>
        <div className="text-sm opacity-65">Workouts</div>
      </Link>
      <Link
        to="/library"
        className={`flex flex-col items-center hover:text-green-400 transition duration-100 ease-in hover:scale-105 ${
          active === "Library" ? "text-green-400" : ""
        }`}
      >
        <div className="text-2xl">
          <VscLibrary />
        </div>
        <div className="text-sm opacity-65">Library</div>
      </Link>
      <Link
        to="/profile"
        className={`flex flex-col items-center hover:text-green-400 transition duration-100 ease-in hover:scale-105 ${
          active === "Profile" ? "text-green-400" : ""
        }`}
      >
        <div className="text-2xl ">
          <CgProfile />
        </div>
        <div className="text-sm opacity-65">Profile</div>
      </Link>
    </div>
  );
};

export default BottomBar;
