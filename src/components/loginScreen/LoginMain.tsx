import React, { useState, useEffect } from "react";
import LoginScreen from "./LoginScreen";
import { useNavigate } from "react-router-dom";

const LoginMain = () => {
  const [user, setUser] = useState<boolean | null>(null);
  const userCheck = localStorage.getItem("userDetails");
  const navigate = useNavigate();

  useEffect(() => {
    if (userCheck) {
      navigate("/homepage");
    }
  }, [userCheck, navigate]);

  return <LoginScreen setUser={setUser} />;
};

export default LoginMain;
