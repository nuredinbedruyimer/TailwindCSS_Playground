import React from "react";
import Paragraph from "./Paragraph";

const Paragraphs = () => {
  const paraList = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Con elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates laboresectetur necessitatibus atque ratione voluptates labore, accusantium eligendi deserunt harum modi beatae quasi, doloribus tenetur!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Con elit. Constur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates laboresectetur necessitatibus atque ratione voluptates labore, accusantium eligendi deserunt harum modi beatae quasi, doloribus tenetur!",
    "Lorem ipsum dolor sit amessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates laboresectetur necessitatibus atque ratione voluptates labore, accusantiumelit. Con elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates laboresectetur necessitatibus atque ratione voluptates labore, accusantiumccusantium eligendi deserunt harum modi beatae quasi, doloribus tenetur!",
    "Lorem ipsluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates labore elit. Consectetur necessitatibus atque ratione voluptates laboresectetur necessitatibus atque ratione voluptates labore, accusantiumelit. Consectetur necessitatibus atque ratione voluptates labore, accusantium eligendi deserunt harum modi beatae quasi, doloribus tenetur!",
  ];
  return (
    <div className="grid items-start m-12 grid-cols-2 gap-8 justify-items-stretch  ">
      {paraList &&
        paraList.map((paragraph, index) => (
          <Paragraph paragraph={paragraph} order={3 - index} key={index} />
        ))}
    </div>
  );
};

export default Paragraphs;
