import React, { useState, useEffect } from "react";
import library from "../../datas/exerciseLibrary.json";
import { MdClose } from "react-icons/md";

const WorkoutPage = ({ active, setActive }) => {
  const [randomExercise, setRandomExercise] = useState(null);
  const [randomIso, setRandomIso] = useState(null);
  const [randomIso2, setRandomIso2] = useState(null);

  useEffect(() => {
    selectRandomExercise();
  }, [active]);

  /* Close  */
  const closeHandler = () => {
    setActive(null);
  };

  const selectRandomExercise = () => {
    /* Random Workouts */
    if (library[active] && library[active].exercises) {
      const strengthExercises = library[active].exercises.filter(
        (exercise) => exercise.type === "strength"
      );
      /* STR */
      if (strengthExercises.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * strengthExercises.length
        );
        const randomExercise = strengthExercises[randomIndex];
        setRandomExercise(randomExercise);
      } else {
        setRandomExercise(null);
        setRandomIso(null);
      }
      /* ISo */
      const isoExercises = library[active].exercises.filter(
        (exercise) => exercise.type === "isolate"
      );
      if (isoExercises.length > 0) {
        const randomIndex2 = Math.floor(Math.random() * isoExercises.length);
        const randomIndex3 = Math.floor(Math.random() * isoExercises.length);
        const randomIsoExercise = isoExercises[randomIndex2];
        const secondExercise = isoExercises[randomIndex3];
        if (randomIsoExercise !== secondExercise) {
          setRandomIso(randomIsoExercise);
          setRandomIso2(secondExercise);
        } else {
          if (randomExercise !== isoExercises[1]) {
            setRandomIso(randomIsoExercise);
            setRandomIso2(isoExercises[1]);
          } else {
            setRandomIso(randomIsoExercise);
            setRandomIso2(isoExercises[2]);
          }
        }
      } else {
        setRandomIso(null);
      }
    }
  };

  return (
    <div className="h-fit flex items-center justify-center p-4 relative">
      <div className="bg-workout-bg border-2 border-black rounded-xl h-fit w-80 absolute top-10">
        <button
          className="text-white text-2xl absolute left-4 top-4"
          onClick={closeHandler}
        >
          <MdClose />
        </button>
        <div className="">
          <h2 className=" text-red-400 text-center capitalize text-2xl font-bold pt-10">
            Your {active} Workout
          </h2>
          {randomExercise && (
            <div className="px-4 py-6 flex flex-col gap-5">
              <div className="border-2 bg-gray-200 border-black rounded-md p-4 flex flex-col gap-2 items-center">
                <p className="font-semibold text-dark-bg  text-xl">
                  {randomExercise.name}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={randomExercise.img}
                    className="w-20 h-20 object-cover shadow-xl"
                    alt={randomExercise.name}
                  />
                  <p className="font-bold">3 SETS</p>
                  <p className="font-semibold opacity-75">6-8 REP</p>
                </div>
              </div>
              {randomIso && (
                <div className="border-2 bg-gray-200 border-black rounded-md p-4 flex flex-col gap-2 items-center">
                  <p className="font-semibold text-dark-bg text-xl">
                    {randomIso.name}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={randomIso.img}
                      className="w-20 h-20 object-cover shadow-xl"
                      alt={randomIso.name}
                    />
                    <p className="font-bold">4 SETS</p>
                    <p className="font-semibold opacity-75">12-15 REP</p>
                  </div>
                </div>
              )}
              {randomIso2 && (
                <div className="border-2 bg-gray-200 border-black rounded-md p-4 flex flex-col gap-2 items-center">
                  <p className="font-semibold text-dark-bg text-xl">
                    {randomIso2.name}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={randomIso2.img}
                      className="w-20 h-20 object-cover shadow-xl"
                      alt={randomIso2.name}
                    />
                    <p className="font-bold">3 SETS</p>
                    <p className="font-semibold opacity-75">12-15 REP</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
