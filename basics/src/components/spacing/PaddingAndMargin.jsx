import React from "react";

const PaddingAndMargin = () => {
  return (
    <div className=" space-y-12">
      <div className="flex border-2 border-gray-700 p-4 rounded-md">
        <div className=" text-sm text-white text-center w-12 h-12 font-bold px-16 py-16 rounded-lg mr-12   bg-purple-600"></div>
        <div className=" text-sm text-white text-center font-bold px-16 py-16 rounded-lg mr-12   bg-lime-600"></div>

        <div className=" text-sm text-white text-center font-bold px-16 py-16 rounded-lg   bg-sky-600"></div>
      </div>
      <div className="flex border-2 border-gray-700 p-4 rounded-md">
        <div className=" text-sm text-white text-center font-bold px-16 py-16 rounded-lg mr-12   bg-blue-600"></div>
        <div className=" text-sm text-white text-center font-bold px-16 py-16 rounded-lg mr-12   bg-lime-600"></div>

        <div className=" text-sm text-white text-center font-bold px-16 py-16 rounded-lg   bg-sky-600"></div>
      </div>
      <div className="flex border-2 border-gray-700 p-4 rounded-md">
        <div className=" text-sm text-white text-center font-bold px-16 py-16 rounded-lg mr-12   bg-red-600"></div>
        <div className=" text-sm text-white text-center font-bold px-16 py-16 rounded-lg mr-12   bg-orange-600"></div>

        <div className=" text-sm text-white text-center font-bold px-16 py-16 rounded-lg   bg-slate-600"></div>
      </div>
    </div>
  );
};

export default PaddingAndMargin;
