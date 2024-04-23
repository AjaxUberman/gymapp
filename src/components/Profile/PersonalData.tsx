import React, { ChangeEvent, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";

const PersonalData = () => {
  const [name, setName] = useState("Your Name");
  const [surname, setSurName] = useState("Your Surname");
  const weight = localStorage.getItem("weight");
  const height = localStorage.getItem("height");
  const [newWeight, setNewWeight] = useState(weight);
  const [newHeight, setNewHeight] = useState(height);

  /* Data Changes */
  const imgChangeHandler = () => {};
  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const surnameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSurName(e.target.value);
  };

  const weightHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewWeight(e.target.value);
  };

  const heightHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewHeight(e.target.value);
  };

  const saveHandler = () => {
    if (newWeight !== null) {
      localStorage.setItem("weight", newWeight.toString());
    }
    if (newHeight !== null) {
      localStorage.setItem("height", newHeight.toString());
    }
  };

  return (
    <div className="bg-white-bg relative h-screen flex flex-col ">
      <div className="flex p-6 justify-between items-center">
        <Link to="/profile">
          <FaChevronLeft />
        </Link>
        <h1 className="font-bold text-xl">Personal Datas</h1>
        <button onClick={saveHandler} className="text-sm">
          Save
        </button>
      </div>
      <div className="flex justify-center">
        <div className="relative w-20 h-20">
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className="w-20 h-20 rounded-full"
          />
          <button
            className="absolute right-0 bottom-1 rounded-full bg-green-400 text-white p-2"
            onClick={imgChangeHandler}
          >
            <FaPenNib />
          </button>
        </div>
      </div>
      {/* Datas */}
      <div className="p-6 flex flex-col gap-6">
        {/* Account */}
        <div className="flex flex-col gap-2">
          <h1 className="opacity-70">Account Data:</h1>
          <div className="flex flex-col gap-4">
            {/* Name */}
            <label className="border-2 rounded-md px-2 py-1">
              <div className="opacity-70 text-sm">Name</div>
              <input
                className="font-bold relative bg-white-bg focus:outline-none"
                value={name}
                onChange={nameHandler}
              />
            </label>
            {/* SurName */}
            <div className="flex flex-col gap-2">
              <label className="border-2 rounded-md px-2 py-1">
                <div className="opacity-70 text-sm">Surname</div>
                <input
                  className="font-bold relative bg-white-bg focus:outline-none"
                  value={surname}
                  onChange={surnameHandler}
                />
              </label>
            </div>
          </div>
        </div>
        {/* Profile Datas */}
        <div className="flex flex-col gap-2">
          <h1 className="opacity-70">Fitness Data:</h1>
          <div className="flex flex-col gap-4">
            {/* Name */}
            <label className="border-2 rounded-md px-2 py-1">
              <div className="opacity-70 text-sm">Weight</div>
              <input
                className="font-bold relative bg-white-bg focus:outline-none"
                value={newWeight ?? ""}
                onChange={weightHandler}
              />
            </label>
            {/* SurName */}
            <div className="flex flex-col gap-2">
              <label className="border-2 rounded-md px-2 py-1">
                <div className="opacity-70 text-sm">Height</div>
                <input
                  className="font-bold relative bg-white-bg focus:outline-none"
                  value={newHeight ?? ""}
                  onChange={heightHandler}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
