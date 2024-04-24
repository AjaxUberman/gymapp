import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFirstData } from "../../../datas/dataSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState("");

  /* BUTTON HANDLER */
  const clickedItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveItem(e.currentTarget.value);
  };

  /* NEXT BUTTON */
  const valueHandler = () => {
    dispatch(setFirstData(activeItem));
    localStorage.setItem("selection", activeItem);
  };

  return (
    <div className="bg-white-bg w-screen h-screen md:h-screen flex justify-center">
      <div className="flex flex-col px-6 gap-8 justify-center items-center">
        <div className="bg-blue-item rounded-full px-4 py-2 text-white font-semibold shadow-xl">
          What's your Goal?
        </div>
        {/* Cards */}
        <div className="flex flex-col gap-6">
          {/* FAT LOSS */}
          <div className="rounded-md bg-blue-200 w-32 h-32 flex flex-col items-center p-2 gap-1 shadow-xl ring-1 ring-black">
            <img
              alt="fatloss"
              src="https://cdn.iconscout.com/icon/premium/png-128-thumb/weight-loss-2948144-2449078.png"
              className="w-14 h-14 "
            />
            <h1 className="tracking-wider font-bold">Fat Loss</h1>
            <button
              className={` w-4 h-4 rounded-full ${
                activeItem === "fatloss"
                  ? "bg-black ring-4 w-3 h-3 md:w-4 md:-4 ring-white"
                  : "bg-white"
              }`}
              value={"fatloss"}
              onClick={(e) => clickedItem(e)}
            ></button>
          </div>
          {/* BULK */}
          <div className="rounded-md bg-blue-200 w-32 h-32 flex flex-col items-center p-2 gap-1 shadow-xl ring-1 ring-black">
            <img
              alt="bulk"
              src="https://www.freepnglogos.com/uploads/dumbbell-png/dumbbell-sponsored-native-company-native-desc-6.png"
              className="w-14 h-14 "
            />
            <h1 className="tracking-wider font-bold">Gain Muscle</h1>
            <button
              className={`w-4 h-4 rounded-full ${
                activeItem === "bulk"
                  ? "bg-black ring-4 w-3 h-3 ring-white"
                  : "bg-white"
              }`}
              value={"bulk"}
              onClick={(e) => clickedItem(e)}
            ></button>
          </div>
          {/* Endurance */}
          <div className="rounded-md bg-blue-200 w-32 h-32 flex flex-col items-center p-2 gap-1 shadow-xl ring-1 ring-black">
            <img
              alt="endurance"
              src="https://i.pinimg.com/originals/87/3e/cf/873ecf0bfe2c64df3d3830452705a374.png"
              className="w-14 h-14 "
            />
            <h1 className="tracking-wider font-bold">Endurance</h1>
            <button
              className={`w-4 h-4 rounded-full ${
                activeItem === "endurance"
                  ? "bg-black ring-4 w-3 h-3 ring-white"
                  : "bg-white"
              }`}
              value={"endurance"}
              onClick={(e) => clickedItem(e)}
            ></button>
          </div>
        </div>
        <div>
          <button
            className="bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-full hover:from-red-600 hover:to-red-500 hover:scale-110 transition duration-100 ease-in"
            onClick={valueHandler}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
