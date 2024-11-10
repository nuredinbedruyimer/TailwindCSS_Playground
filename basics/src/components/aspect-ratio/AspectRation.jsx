import React from "react";
import { one, two, three } from "../../assets/images";

const AspectRation = () => {
  return (
    <div className="flex items-center justify-around w-full">
      <div>
        <p className="text-xl font-bold text-blue-600">For Card Thing</p>
        <img
          src={one}
          className=" aspect-auto w-64 rounded-lg"
          alt="One's Image"
        />
      </div>
      <div className="flex  flex-col items-center  h-96 ">
        <img
          src={two}
          className=" aspect-video h-[500px] object-cover rounded-2xl"
          alt="Two's Image"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold text-blue-600">
          For For Larger Image Staff For Videos
        </p>

        <img
          src={three}
          className="h-64 aspect-video rounded-lg"
          alt="Three's Image"
        />
      </div>
    </div>
  );
};

export default AspectRation;
