import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import { useNavigate } from "react-router-dom";

const LoginMain = () => {
  const [user, setUser] = useState<boolean | null>(null);
  const navigate = useNavigate();

  if (user === true) {
    navigate("/homepage");
    return null;
  }

  return <LoginScreen setUser={setUser} />;
};

export default LoginMain;
