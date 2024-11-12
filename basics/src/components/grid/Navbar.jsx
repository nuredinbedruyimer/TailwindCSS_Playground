import React from "react";
import { BellDot, Mic, User, Video, Youtube } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex gap-4 px-4 items-center justify-between p-4  mb-4">
      <div className="flex justify-center items-center">
        <span>
          <Youtube size={32} className="   text-red-700 text-2xl " />
        </span>
        <h1 className="text-2xl font-extrabold text-white">Youtube</h1>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          className="w-[500px]  text-white px-6 border-2 border-gray-700 bg-black rounded-3xl flex-1"
        />
        <div>
          <button className="p-2 text-white rounded-full  bg-gray-800">
            <Mic />
          </button>
        </div>
      </div>
      <div className="flex gap-6 text-white items-center">
        <span className="p-3 cursor-pointer rounded-full hover:bg-gray-800">
          <Video />
        </span>
        <span className="p-3 cursor-pointer rounded-full hover:bg-gray-800">
          <BellDot />
        </span>
        <span className="p-3 cursor-pointer rounded-full hover:bg-gray-800">
          <User />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
