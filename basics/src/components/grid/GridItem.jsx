import React from "react";
import { Play } from "lucide-react";

const GridItem = ({ aspect, width, hight }) => {
  let widthClass = width ? "w-" + width : "";
  let hightClass = hight ? "h-" + width : "";

  return (
    <div
      className={`${aspect} ${hightClass} cursor-pointer rounded-md bg-gray-400 flex flex-row items-center justify-center ${widthClass} `}
    >
      {" "}
      <Play className="bg-white p-2 rounded-md" />
    </div>
  );
};

export default GridItem;
