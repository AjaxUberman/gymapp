import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

const MainPage = () => {
  const datas = useSelector((state: RootState) => state.datas);
  return (
    <div>{datas.firstSelection !== null ? <SecondPage /> : <FirstPage />}</div>
  );
};

export default MainPage;
