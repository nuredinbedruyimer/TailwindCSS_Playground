import React from "react";
import PriceCard from "./PriceCard";

const PriceCards = () => {
  const lists = [
    {
      memebershipType: "Free Membership",
      memberPrice: "Free Price",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptates ullam dolore?",
      buttenText: "Add to cart",
      buttonColor: "bg-blue-500 text-white", // Tailwind classes for button color
      titleColor: "text-blue-500", // Tailwind class for title color
      priceColor: "text-blue-700", // Tailwind class for price color
      texts: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptates ullam dolore?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptates ullam dolore?",
      ],
    },
    {
      memebershipType: "Basic Membership",
      memberPrice: "$56/Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptates ullam dolore?",
      buttenText: "Add to cart",
      buttonColor: "bg-green-500 text-white", // Tailwind classes for button color
      titleColor: "text-green-500", // Tailwind class for title color
      priceColor: "text-green-700", // Tailwind class for price color
      texts: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptates ullam dolore?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptates ullam dolore?",
      ],
    },
    {
      memebershipType: "Advanced Membership",
      memberPrice: "$100/Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptates ullam dolore?",
      buttenText: "Add to cart",
      buttonColor: "bg-red-500 text-white", // Tailwind classes for button color
      titleColor: "text-red-500", // Tailwind class for title color
      priceColor: "text-red-700", // Tailwind class for price color
      texts: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptates ullam dolore?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptates ullam dolore?",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl text-gray-500 text-center font-extrabold">
        Lorem ipsum dolor adipisicing elit. Voluptatum a amet sed.
      </h1>
      <div className=" min-h-screen w-ful gap-6 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 items-center">
        {lists &&
          lists.map((list) => (
            <PriceCard key={list.memebershipType} cardProps={list} />
          ))}
      </div>
    </div>
  );
};

export default PriceCards;
