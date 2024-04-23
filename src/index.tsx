import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginMain from "./components/loginScreen/LoginMain";
import MainPage from "./components/homePage/firstDetails/MainPage";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Profile from "./components/Profile/Profile";
import PersonalData from "./components/Profile/PersonalData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginMain />,
  },
  {
    path: "/homepage",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/personalData",
    element: <PersonalData />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
