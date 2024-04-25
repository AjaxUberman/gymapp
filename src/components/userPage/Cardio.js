import React from "react";

const Cardio = () => {
  /* Selection */
  const selectedWorkout = localStorage.getItem("selection");

  return (
    <div className="px-6 py-14">
      {selectedWorkout === "fatloss" ? (
        <div className="opacity-70 px-4 py-2 bg-black rounded-full flex text-center">
          <span className="text-white font-light">
            You should do <span className="font-bold">45 min LISS Cardio</span>{" "}
            after your workout every GYM day.
          </span>
        </div>
      ) : selectedWorkout === "endurance" ? (
        <div className="opacity-70 px-4 py-2 bg-black rounded-full flex text-center">
          <span className="text-white font-light">
            You should do <span className="font-bold">30 min HITT Cardio</span>{" "}
            after your workout every day.
          </span>
        </div>
      ) : selectedWorkout === "bulk" ? (
        <div className="opacity-70 px-4 py-2 bg-black rounded-full flex text-center">
          <span className="text-white font-light">
            You should do <span className="font-bold">15 min LISS Cardio</span>{" "}
            after your workout 2 times a week.
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cardio;
