import React from "react";
import GridItem from "./GridItem";

const Grid = () => {
  return (
    <div className=" w-full grid grid-cols-1 gap-6 m-12 md:grid-cols-2 lg:grid-cols-3 aspect-auto rounded-md">
      <GridItem aspect="aspect-square" width="64" />
      <GridItem aspect="aspect-video" hight="32" />
      <GridItem aspect="aspect-video" />
      <GridItem aspect="aspect-square" width="64" />
      <GridItem aspect="aspect-video" />
      <GridItem aspect="aspect-video" />
    </div>
  );
};

export default Grid;
