import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";

const LoginScreen = ({
  setUser,
}: {
  setUser: React.Dispatch<React.SetStateAction<boolean | null>>;
}) => {
  const [activeScreen, setActiveScreen] = useState("login");
  const [signed, setSigned] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [datachecker, setDataChecker] = useState<boolean | null>(null);

  /* Storage Datas */

  console.log(signed);

  /* Active Screen Control */
  const signHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveScreen(e.currentTarget.value);
  };
  /* Signed Control */
  useEffect(() => {
    if (signed === true) {
      setActiveScreen("login");
    }
  }, [signed]);

  const loginHandler = () => {
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      const userDetails = JSON.parse(storedUserDetails);
      const newData = {
        ...userDetails,
        data: datachecker,
      };
      if (userDetails.email === email && password === userDetails.password) {
        setUser(true);
        setDataChecker(true);
        localStorage.setItem("userDetails", JSON.stringify(newData));
      } else {
        setUser(false);
        setDataChecker(false);
      }
    } else {
      console.log("No datas found in localStorage");
      setDataChecker(false);
    }
  };

  return (
    <>
      {activeScreen === "login" ? (
        <div className="bg-white-bg h-screen flex flex-col gap-4 justify-center items-center font-nato">
          <div className="bg-gray-50 border-2 border-black rounded-md w-60 h-60 flex flex-col justify-center gap-7 items-center px-4 relative ">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/008/846/788/non_2x/frog-exercise-cute-character-free-download-transparent-image-illustration-clipart-free-png.png"
              className="absolute -top-24 w-32 h-32 -z-2"
            />
            <div className="flex flex-col gap-5 ">
              <input
                placeholder="e-mail"
                type="email"
                className="py-2 rounded-md px-2 ring-1 ring-black focus:shadow-mavi-neon focus:outline-none focus:ring-green-500"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                placeholder="password"
                type="password"
                className="py-2 rounded-md px-2 ring-1 ring-black focus:shadow-mavi-neon focus:outline-none focus:ring-green-500"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    loginHandler();
                  }
                }}
              ></input>
            </div>
            <div className="flex gap-5">
              <button
                className="rounded-md bg-white-bg px-4 py-2 border-2 border-blue-500 font-semibold uppercase hover:bg-white hover:scale-110 transition duration-100 ease-in"
                onClick={loginHandler}
              >
                Login
              </button>
              <button
                className="rounded-md bg-blue-500 px-4 py-2 border-2 border-white-bg font-semibold uppercase text-white hover:scale-110 transition duration-100 ease-in hover:bg-blue-400"
                value={"signup"}
                onClick={(e) => signHandler(e)}
              >
                Sign Up
              </button>
            </div>
          </div>
          {datachecker === false ? (
            <div className="text-sm text-black">Wrong password/email.</div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <SignUp setSigned={setSigned} setActiveScreen={setActiveScreen} />
      )}
    </>
  );
};

export default LoginScreen;
