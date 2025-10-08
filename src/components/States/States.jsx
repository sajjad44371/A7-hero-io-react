import React from "react";

const States = () => {
  return (
    <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white flex justify-center items-center">
      <div className="text-center max-w-7xl mx-auto py-[80px] px-5 lg:px-0">
        <h2 className="text-4xl md:text-5xl font-bold">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-6 pt-10 pb-[80px]">
          <div className="px-[70px]">
            <p>Total Downloads</p>
            <h3 className="text-5xl md:text-6xl font-extrabold py-4">29.6M</h3>
            <p>21% more than last month</p>
          </div>
          <div className="px-[70px]">
            <p>Total Reviews</p>
            <h3 className="text-5xl md:text-6xl font-extrabold py-4">906K</h3>
            <p>46% more than last month</p>
          </div>
          <div className="px-[70px]">
            <p>Active Apps</p>
            <h3 className="text-5xl md:text-6xl font-extrabold py-4">132+</h3>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
