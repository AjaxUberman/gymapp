import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSecondData,
  setWeight,
  setHeight,
  setBmr,
} from "../../../datas/dataSlice";
import logo from "../../../images/—Pngtree—gym gymnasium body building exercise_7579834.png";

const SecondPage = () => {
  const dispatch = useDispatch();
  const [checker, setChecker] = useState<boolean | null>(null);
  const [weightcheck, setWeightChecker] = useState<boolean | null>(null);
  const [weight, setInsWeight] = useState<number>(0);
  const [heightcheck, setHeightChecker] = useState<boolean | null>(null);
  const [height, setInsHeight] = useState<number>(0);
  const [gender, setGender] = useState("Male");
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [age, setAge] = useState<number>(0);
  const [gymDays, setGymDays] = useState<number>(0);

  /* Datas */

  /* SET BMR */
  const buttonHandler = () => {
    let bmr: number;
    if (gender.toLowerCase() === "male") {
      bmr =
        88.362 + 13.397 * weight + 4.799 * height - 5.677 * age + gymDays * 200;
    } else if (gender.toLowerCase() === "female") {
      bmr =
        447.593 + 9.247 * weight + 3.098 * height - 4.33 * age + gymDays * 200;
    } else {
      console.error("Wrong Gender.");
      return;
    }
    dispatch(setBmr(bmr.toString()));
    localStorage.setItem("bmr", bmr.toString());
  };

  /* WEIGHT */
  const weightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const weight = parseInt(value);
    if (!isNaN(weight)) {
      dispatch(setWeight(e.target.value));
      localStorage.setItem("weight", weight.toString());

      setWeightChecker(true);
      setInsWeight(weight);
    } else {
      setWeightChecker(false);
    }
  };

  /* HEIGHT */
  const heightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const height = parseInt(value);
    if (!isNaN(height) && height >= 100 && height <= 230) {
      dispatch(setHeight(e.target.value));
      localStorage.setItem("height", height.toString());
      setHeightChecker(true);
      setInsHeight(height);
    } else {
      setHeightChecker(false);
    }
  };
  /* AGE */
  const ageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setAge(value);
    }
  };

  /* GENDER */
  const genderHandler = () => {
    setActiveMenu(!activeMenu);
  };
  const handleSelection = (gender: string) => {
    setGender(gender);
    setActiveMenu(false);
  };

  /* GYM FREQ */
  const gymHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const match = parseInt(value);

    if (!isNaN(match) && match >= 3 && match <= 5) {
      dispatch(setSecondData(value));
      setChecker(true);
      setGymDays(match);
    } else {
      setChecker(false);
    }
  };

  return (
    <div className="bg-white-bg w-screen h-screen md:h-screen flex flex-col gap-4 items-center justify-center">
      <div
        className={`rounded-full px-4 py-2 bg-gradient-to-r from-orange-400 to-rose-400 text-white font-bold transition duration-200 ease-in `}
      >
        <h1>Let The Fire Begin!</h1>
      </div>
      <div className="flex flex-col items-center tracking-wider">
        <span>
          {`${checker === false ? "Frequancy must be between 3-5 days." : ""}`}
        </span>
        <span>
          {`${
            heightcheck === false ? "Height must be between 100-230 cm." : ""
          }`}
        </span>
      </div>

      {/* Main */}
      <div className="bg-blue-item rounded-md h-96 w-64 justify-around gap-6 items-center py-6 shadow-xl z-10 mb-20 border-black border-2 overflow-y-scroll  overflow-x-hidden scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300">
        {/* Weight */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-white tracking-wider">Your Weight:</p>
            </div>
            <input
              placeholder="Kg"
              className="px-2 py-2 rounded-full shadow-xl focus:outline-green-400 focus:scale-105 transition duration-100 ease-in"
              onChange={weightHandler}
            />
          </div>

          {/* Height */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-white tracking-wider">Your Height:</p>
            </div>
            <input
              placeholder="Cm"
              className="px-2 py-2 rounded-full shadow-xl focus:outline-green-400 focus:scale-105 transition duration-100 ease-in"
              onChange={heightHandler}
            />
          </div>

          {/* AGE */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-white tracking-wider">Your Age:</p>
            </div>
            <input
              placeholder="Age"
              className="px-2 py-2 rounded-full shadow-xl focus:outline-green-400 focus:scale-105 transition duration-100 ease-in"
              onChange={ageHandler}
            />
          </div>

          {/* GENDER */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-white tracking-wider">Your Gender:</p>
            </div>
            <div className="flex flex-col gap-1">
              <button
                className="px-2 py-2 rounded-full bg-white w-48 h-10 shadow-xl opacity text-gray-400 focus:outline-green-400 focus:scale-105 transition duration-100 ease-in text-left"
                onClick={genderHandler}
              >
                {gender}
              </button>
              <div
                className={`flex flex-col justify-center bg-white rounded-xl transition duration-100 opacity-75 ease-in border-2 border-black ${
                  activeMenu === true ? "" : "hidden translate-y-10"
                }`}
              >
                <button
                  onClick={() => handleSelection("Male")}
                  className="border-b-2 border-black py-1 hover:text-green-400 "
                >
                  Male
                </button>
                <button
                  onClick={() => handleSelection("Female")}
                  className="border-b-t border-black py-1 hover:text-green-400 "
                >
                  Female
                </button>
              </div>
            </div>
          </div>

          {/* Gym Frequency */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-white tracking-wider ">Gym frequency:</p>
            </div>
            <input
              placeholder="Per Week"
              className="px-2 py-2 rounded-full shadow-xl focus:outline-green-400 focus:scale-105 transition duration-100 ease-in"
              onChange={(e) => gymHandler(e)}
              type=""
            />
          </div>
          <button
            className="rounded-full bg-blue-200 text-red-400 font-bold py-4 px-4 shadow-md hover:text-blue-200  hover:bg-red-400 hover:scale-110 transition duration-200 ease-in"
            onClick={buttonHandler}
            disabled={
              weightcheck === false ||
              weightcheck === null ||
              heightcheck === false ||
              heightcheck === null ||
              checker === false ||
              checker === null ||
              age === 0
            }
          >
            GO!
          </button>
        </div>
      </div>
      <img src={logo} className="w-40 h-40 absolute bottom-0" />
    </div>
  );
};

export default SecondPage;
