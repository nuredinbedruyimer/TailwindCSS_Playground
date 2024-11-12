import React from "react";
import VideoCards from "./VideoCards";
import Sidebar from "./Sidebar";
import RowButtons from "./RowButtons";
import Navbar from "./Navbar";
const Youtube = () => {
  return (
    <div className="w-full bg-black">
      <div className="flex flex-row gap-6">
        <Sidebar />
        <div className="flex flex-col gap-6">
          <Navbar />

          <RowButtons />
          <VideoCards />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
