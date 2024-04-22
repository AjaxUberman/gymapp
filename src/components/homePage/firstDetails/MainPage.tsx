import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import UserScreen from "../../userPage/UserScreen";

const MainPage = () => {
  const datas = useSelector((state: RootState) => state.datas);
  const bmr = localStorage.getItem("bmr");

  return (
    <div className="">
      {bmr && bmr !== null ? (
        <UserScreen />
      ) : datas.firstSelection !== null ? (
        <div className="overflow-y-hidden overflow-x-hidden">
          <SecondPage />
        </div>
      ) : (
        <FirstPage />
      )}
    </div>
  );
};

export default MainPage;
