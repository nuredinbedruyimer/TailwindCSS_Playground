import React from "react";

const PriceCard = ({ cardProps }) => {
  console.log(cardProps.memebershipType);
  return (
    <div className="max-w-[360px] rounded-md shadow-md justify-center w-full border flex flex-col gap-4 border-gray-400">
      <div className="mt-8 flex justify-center items-center">
        <h1
          className={`text-2xl ${cardProps.titleColor} font-extrabold tracking-tight`}
        >
          {cardProps.memebershipType}
        </h1>
      </div>

      <div className="py-4 text-center bg-sky-400 mt-8">
        <p className={`text-2xl ${cardProps.priceColor} font-bold`}>
          {cardProps.memberPrice}
        </p>
      </div>

      <div className="flex justify-center flex-col mx-8 gap-4">
        <p className="text-center">{cardProps.description}</p>

        <button
          className={`py-3 ${cardProps.buttonColor} rounded-md text-white`}
        >
          {cardProps.buttenText}
        </button>
      </div>

      <div className="text-center mx-8">
        {cardProps.texts &&
          cardProps.texts.map((text, index) => (
            <p key={index} className="mt-2">
              {text}
            </p>
          ))}
      </div>
    </div>
  );
};

export default PriceCard;
