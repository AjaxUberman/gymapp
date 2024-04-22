import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import { useNavigate } from "react-router-dom";

const LoginMain = () => {
  const [user, setUser] = useState<boolean | null>(null);
  const userCheck = localStorage.getItem("userDetails");
  const navigate = useNavigate();
  console.log(userCheck);

  if (userCheck) {
    navigate("/homepage");
  }

  return <LoginScreen setUser={setUser} />;
};

export default LoginMain;
