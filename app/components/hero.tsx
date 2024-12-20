import React from "react";
import Avatar from "./avatar";

const Hero = () => {
  return (
    <div className=" flex gap-5 h-[60vh] p-5">
      <div className=" bg-[rgba(255,255,255,0.8)] border-2 border-violet-300 ">
        <Avatar />
      </div>

      <div className="flex-1 bg-[rgba(255,255,255,0.8)] border-2 border-violet-300 ">
        <h1 className="text-5xl">Sandhya Rajwanshi</h1>
      </div>
    </div>
  );
};

export default Hero;
