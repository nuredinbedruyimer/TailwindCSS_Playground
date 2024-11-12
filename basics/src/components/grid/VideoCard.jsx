import React from "react";

const VideoCard = () => {
  return (
    <div className="  aspect-video  bg-purple-500 rounded-md">
      <iframe
        className="w-[350px] rounded-md"
        src="https://www.youtube.com/embed/2h9CqRlHzrc?si=i92ndG-eyzx4zwpX"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
