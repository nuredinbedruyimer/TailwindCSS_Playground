import { House, Layers2, Menu, TvMinimalPlay, User } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className=" px-4 justify-items-center text-white mt-6 grid grid-cols-1">
      <div>
        <span className="flex justify-center">
          <Menu />
        </span>
        <span>Home</span>
      </div>
      <div>
        <span className="flex justify-center">
          <House />
        </span>
        <span>Home</span>
      </div>
      <div>
        <span className="flex justify-center">
          <Layers2 />
        </span>
        <span>Short</span>
      </div>
      <div>
        <span className=" flex justify-center">
          <TvMinimalPlay />
        </span>
        <span>Subscription</span>
      </div>
      <div>
        <span className=" flex justify-center">
          <User />
        </span>
        <span>You</span>
      </div>
    </div>
  );
};

export default Sidebar;
