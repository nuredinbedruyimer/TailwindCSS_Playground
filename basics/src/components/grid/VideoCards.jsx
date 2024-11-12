import React from "react";
import VideoCard from "./VideoCard";

const VideoCards = () => {
  const arrList = [1, 2, 3, 4, 5, 6];
  return (
    <div className=" aspect-auto  grid grid-cols-3 gap-6 ">
      {arrList.map((curr, index) => (
        <VideoCard key={index} />
      ))}
    </div>
  );
};

export default VideoCards;
