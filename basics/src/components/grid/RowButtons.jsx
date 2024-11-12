import React from "react";

const RowButtons = () => {
  const texts = [
    "Fox",
    "Lazy dog",
    "Bright stars",
    "Fresh breeze",
    "Morning",
    "Waves",
    "Books",
    "Mountains high",
    "Silence",

    "Steps",
    "Art",
  ];

  return (
    <div className="flex flex-row gap-4">
      {texts &&
        texts.map((text, index) => (
          <button className=" bg-gray-900 hover:bg-white text-white hover:text-black px-2 py-1 rounded-md ">
            {text}
          </button>
        ))}
    </div>
  );
};

export default RowButtons;
