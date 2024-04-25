import React, { ChangeEvent, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";

const PersonalData = () => {
  const [menuCheck, setMenucheck] = useState(false);

  const saveHandler = () => {
    localStorage.setItem("selection", item);
  };

  const activeItem = localStorage.getItem("selection");
  const [item, setItem] = useState(activeItem);

  /* Menu Check */
  const menuChecker = () => {
    setMenucheck(!menuCheck);
  };
  /* Item Handler */
  const itemHandler = (e) => {
    setItem(e.currentTarget.value);
    setMenucheck(false);
  };

  return (
    <div className="bg-white-bg relative h-screen flex flex-col ">
      <div className="flex p-6 justify-between items-center">
        <Link to="/profile">
          <FaChevronLeft />
        </Link>
        <h1 className="font-bold text-xl">Workout Preferences</h1>
        <button className="text-sm" onClick={saveHandler}>
          Save
        </button>
      </div>

      {/* Datas */}
      <div className="p-6 flex flex-col gap-6">
        {/* Account */}
        <div className="flex flex-col gap-2">
          <h1 className="opacity-70">Workout Data:</h1>
          <div className="flex flex-col gap-4">
            {/* Name */}
            <label className="border-2 rounded-md px-2 py-1">
              <div className="opacity-70 text-sm">Workout Goal</div>
              <div className="font-bold relative bg-white-bg focus:outline-none">
                <button onClick={menuChecker} className="capitalize">
                  {item}
                </button>
                <ul
                  className={`${
                    menuCheck === false ? "hidden" : ""
                  } flex flex-col absolute border-2 border-black gap-2 px-2 py-2 z-10 bg-macro-value`}
                >
                  <button
                    className="border-b-2 border-black hover:text-green-400"
                    value={"fatloss"}
                    onClick={itemHandler}
                  >
                    Fat Loss
                  </button>
                  <button
                    className="hover:text-green-400"
                    value={"bulk"}
                    onClick={itemHandler}
                  >
                    Bulk
                  </button>
                  <button
                    className="border-t-2 border-black hover:text-green-400"
                    value={"endurance"}
                    onClick={itemHandler}
                  >
                    Endurance
                  </button>
                </ul>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
