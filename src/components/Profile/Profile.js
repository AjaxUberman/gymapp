import React, { useState } from "react";
import BottomBar from "../userPage/BottomBar";
import { ImProfile } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoFitness } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { MdLocalDrink } from "react-icons/md";
import { MdOutlineSpeakerNotes } from "react-icons/md";

const Profile = () => {
  const [active, setActive] = useState("Profile");

  const dataString = localStorage.getItem("userDetails");
  const data = JSON.parse(dataString);

  return (
    <div className="bg-white-bg relative h-screen flex justify-center">
      <div className="">
        <div className="pt-10 flex flex-col gap-1 items-center">
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className="w-14 h-14 rounded-full"
          />
          <p>{data.email}</p>
        </div>
        {/* MENUS */}
        <div className="mt-10">
          {/* Personal Data */}
          <Link
            to="/personalData"
            className="flex justify-between items-center w-screen px-8 py-4 border-y-2 "
          >
            <div className="flex gap-2 items-center">
              <ImProfile />
              <div className="opacity-75">Personal Data</div>
            </div>
            <FaAngleRight />
          </Link>
          {/* Workout */}
          <Link
            to="/personalWorkoutData"
            className="flex justify-between items-center w-screen px-8 py-4 border-b-2 "
          >
            <div className="flex gap-2 items-center">
              <IoFitness />
              <div className="opacity-75">Workout Preferences</div>
            </div>
            <FaAngleRight />
          </Link>
          {/* GYMS */}
          <Link
            to="/personalWorkoutData"
            className="flex justify-between items-center w-screen px-8 py-4 border-b-2 "
          >
            <div className="flex gap-2 items-center">
              <FaMap />
              <div className="opacity-75">GYM's Near Me</div>
            </div>
            <FaAngleRight />
          </Link>
          {/* Supplements */}
          <a
            href="https://proteinocean.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center w-screen px-8 py-4 border-b-2 "
          >
            <div className="flex gap-2 items-center">
              <MdLocalDrink />
              <div className="opacity-75">Supplements</div>
            </div>
            <FaAngleRight />
          </a>
          {/* TERMS */}
          <Link
            to="/terms"
            className="flex justify-between items-center w-screen px-8 py-4 border-b-2 "
          >
            <div className="flex gap-2 items-center">
              <MdOutlineSpeakerNotes />
              <div className="opacity-75">Terms and conditions</div>
            </div>
            <FaAngleRight />
          </Link>
        </div>
      </div>
      <div className="border-t-2 absolute bottom-0">
        <BottomBar active={active} />
      </div>
    </div>
  );
};

export default Profile;
