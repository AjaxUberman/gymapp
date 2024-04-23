import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";

const NavBar = () => {
  return (
    <div>
      <div className="p-6 flex justify-between items-center">
        <div className="flex items-center font-bold gap-2">
          <img
            alt=""
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className="w-10 h-10 rounded-full"
          />
          <h2>Welcome!</h2>
        </div>
        <div className="flex gap-3 text-xl text-gray-700">
          <IoIosNotifications />
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
