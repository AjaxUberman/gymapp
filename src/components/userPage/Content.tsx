import React, { useState, useEffect } from "react";
import { GiShinyApple } from "react-icons/gi";
import { GiRoastChicken } from "react-icons/gi";
import { GiAvocado } from "react-icons/gi";

const Content = () => {
  const [carb, setCarb] = useState<string | null>(null);
  const [prot, setProt] = useState<string | null>(null);
  const [fat, setFat] = useState<string | null>(null);

  const [carbwidth, setCarbWidth] = useState<string>("");
  const [protwidth, setProtWidth] = useState<string>("");
  const [fatwidth, setFatWidth] = useState<string>("");

  /* MACRO VALUES */
  useEffect(() => {
    const bmr = localStorage.getItem("bmr");
    if (bmr !== null) {
      /* Carb */
      const carbValue = parseFloat(bmr);
      setCarb((((carbValue / 10) * 4) / 4).toString());
      /* Prot */
      setProt((((carbValue / 10) * 4) / 4).toString());
      /* Fat */
      setFat((((carbValue / 10) * 2) / 4).toString());
    } else {
      console.log("Carb değeri bulunamadı");
    }
  }, []);

  /* Selection */
  const selectedWorkout = localStorage.getItem("selection");

  /* Width */
  useEffect(() => {
    if (carb !== null) {
      const carbNumber = parseFloat(carb);
      setCarbWidth(`${carbNumber / 3}px`);
    }
  }, [carb]);

  useEffect(() => {
    if (prot !== null) {
      const protNumber = parseFloat(prot);
      setProtWidth(`${protNumber / 3}px`);
    }
  }, [prot]);

  useEffect(() => {
    if (fat !== null) {
      const fatNumber = parseFloat(fat);
      setFatWidth(`${fatNumber / 3}px`);
    }
  }, [fat]);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 p-7">
        <div className="flex justify-between items-center">
          {/* Calorie Target */}
          <div className="flex flex-col">
            <h2>
              Your Calorie Target for{" "}
              <span className="capitalize font-bold text-2xl text-orange-500">
                {selectedWorkout}
              </span>
            </h2>
            <h1 className="text-2xl text-item-text-cof font-bold">
              {localStorage.getItem("bmr") !== null
                ? Math.ceil(parseFloat(localStorage.getItem("bmr")!)) //
                : ""}
            </h1>
          </div>

          <div></div>
        </div>
        {/* Macros */}
        <div className="flex flex-col gap-3">
          {/* Carb */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <div className="text-red-500 text-2xl">
                <GiShinyApple />
              </div>
              <h1 className="font-bold tracking-wider text-2xl">Carbs</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-macro-value w-52 h-2 rounded-full shadow-md">
                <div
                  className="bg-red-500 w-40 h-2 z-4 rounded-full"
                  style={{ width: carbwidth }}
                ></div>
              </div>
              <div className="opacity-85 flex gap-1 items-center">
                <div className="font-semibold text-xl">
                  {carb !== null ? Math.ceil(parseFloat(carb)) : ""}
                </div>
                <div className="opacity-70">Grams</div>
              </div>
            </div>
          </div>
          {/* Prot */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <div className="text-purple-500 text-2xl">
                <GiRoastChicken />
              </div>
              <h1 className="font-bold tracking-wider text-2xl">Protein</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-macro-value w-52 h-2 rounded-full shadow-md">
                <div
                  className="bg-purple-500 w-40 h-2 z-4 rounded-full"
                  style={{ width: protwidth }}
                ></div>
              </div>
              <div className="opacity-85 flex gap-1 items-center">
                <div className="font-semibold text-xl">
                  {prot !== null ? Math.ceil(parseFloat(prot)) : ""}
                </div>
                <div className="opacity-70">Grams</div>
              </div>
            </div>
          </div>
          {/* Fat */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <div className="text-yellow-500 text-2xl">
                <GiAvocado />
              </div>
              <h1 className="font-bold tracking-wider text-2xl">Fat</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-macro-value w-52 h-2 rounded-full shadow-md">
                <div
                  className="bg-yellow-500 w-40 h-2 z-4 rounded-full"
                  style={{ width: fatwidth }}
                ></div>
              </div>
              <div className="opacity-85 flex gap-1 items-center">
                <div className="font-semibold text-xl">
                  {fat !== null ? Math.ceil(parseFloat(fat)) : ""}
                </div>
                <div className="opacity-70">Grams</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
