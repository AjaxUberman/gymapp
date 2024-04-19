import React, { useState } from "react";

const SignUp = ({
  setSigned,
  setActiveScreen,
}: {
  setSigned: React.Dispatch<React.SetStateAction<boolean | null>>;
  setActiveScreen: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [email, setEmail] = useState<boolean | null>(null);
  const [emailStorage, setEmailStorage] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [correctPass, setCorrectPass] = useState<boolean | null>(null);
  const [sign, setSign] = useState<boolean | null>(null);

  /* Password Checker */
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordLength = e.target.value.length;
    const password = e.target.value;
    setPassword1(password);
    if (passwordLength >= 6 && passwordLength <= 15) {
      const hasNumber = /\d/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasSpecialC = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
        password
      );
      if (hasNumber && hasUpperCase && hasSpecialC) {
        setCorrectPass(true);
      } else {
        setCorrectPass(false);
      }
    } else {
      setCorrectPass(false);
    }
  };

  /* Sign Handler */
  const signHandler = () => {
    setCorrectPass(true);
    if (password1 === password2) {
      setSign(true);
      setSigned(true);
      /* Local Storage Datas */
      const userDetails = {
        email: emailStorage,
        password: password1,
      };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    } else {
      setSign(false);
    }
  };
  /* Back Button */

  const backHandler = () => {
    setActiveScreen("login");
  };

  /* Mail Checker */
  const mailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mail = e.target.value;
    if (
      mail.includes("gmail.com") ||
      mail.includes("hotmail.com") ||
      mail.includes("outlook.com")
    ) {
      setEmail(true);
      setEmailStorage(mail);
    } else {
      setEmail(false);
    }
  };

  return (
    <div className="bg-white-bg h-screen flex flex-col gap-4 px-6 justify-center items-center font-nato">
      <div className="bg-gray-50 border-2 border-black rounded-md w-60 h-80 flex flex-col justify-center gap-7 items-center px-4 relative shadow-xl ">
        <img
          alt=""
          src="https://static.vecteezy.com/system/resources/previews/008/846/788/non_2x/frog-exercise-cute-character-free-download-transparent-image-illustration-clipart-free-png.png"
          className="absolute -top-24 w-32 h-32 -z-2"
        />
        <div className="flex flex-col gap-5 ">
          <input
            placeholder="e-mail"
            type="email"
            className="py-2 rounded-md px-2 ring-1 ring-black focus:shadow-mavi-neon focus:outline-none focus:ring-green-500 shadow-md"
            onChange={mailHandler}
          ></input>
          <input
            placeholder="password"
            type="password"
            className="py-2 rounded-md px-2 ring-1 ring-black focus:shadow-mavi-neon focus:outline-none focus:ring-green-500 shadow-md"
            onChange={passwordHandler}
            disabled={email === false || !email}
          ></input>
          <input
            placeholder="password again"
            type="password"
            className="py-2 rounded-md px-2 ring-1 ring-black focus:shadow-mavi-neon focus:outline-none focus:ring-green-500 shadow-md"
            onChange={(e) => setPassword2(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                signHandler();
              }
            }}
            disabled={correctPass === false || !password1}
          ></input>
        </div>
        <div className="flex gap-5">
          <button
            className="rounded-md bg-white px-4 py-2 border-2 border-blue-500 font-semibold uppercase hover:scale-110 transition duration-100 ease-in hover:bg-slate-200"
            onClick={backHandler}
          >
            Back
          </button>
          <button
            className="rounded-md bg-blue-500 px-4 py-2 border-2 border-white-bg font-semibold uppercase text-white hover:scale-110 transition duration-100 ease-in hover:bg-blue-400 shadow-md disabled:bg-slate-400"
            value={"signup"}
            onClick={signHandler}
            disabled={!password2}
          >
            Sign Up
          </button>
        </div>
      </div>
      {/* Mail Checker */}
      {email === false ? (
        <div className="text-black text-sm text-center">
          Please enter a valid email adress.
        </div>
      ) : (
        ""
      )}
      {/* Password Checker */}
      {correctPass === false ? (
        <div className="text-black text-sm text-center">
          Your password must include uppercase, number and special char and
          between 6-15 character length.
        </div>
      ) : (
        ""
      )}
      {/* Pass Match */}
      {sign !== null && sign === false ? (
        <div className="text-black text-sm text-center">
          Your passwords didn't match.
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SignUp;
