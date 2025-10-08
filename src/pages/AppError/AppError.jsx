import React from "react";
import errorImg from "../../assets/App-Error.png";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen col-span-full mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center ">
          <img src={errorImg} alt="" />
          <p className="text-center text-xl font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent mt-5">
            No apps found
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-sm text-white py-3 px-4"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppError;
