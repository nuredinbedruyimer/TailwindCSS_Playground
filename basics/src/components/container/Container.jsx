import React from "react";
import { one, two, three } from "../../assets/images";

const Container = () => {
  return (
    <div className=" container bg-gray-200 flex flex-col items-center gap-12   ">
      <div>
        <img src={one} alt="" className=" aspect-video w-96 bg-gray-300 " />
      </div>
      <div>
        <img src={two} alt="" className=" aspect-video w-96 bg-gray-300 " />
      </div>
      <div>
        <img src={three} alt="" className=" aspect-video w-96 bg-gray-300 " />
      </div>
    </div>
  );
};

export default Container;
