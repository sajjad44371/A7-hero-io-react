import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#f2f2f2] min-h-screen col-span-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center ">
            <img
              src={errorImg}
              alt=""
              className="w-[300px] md:w-[400px] xl:w-[500px]"
            />
            <h2 className="text-4xl md:text-5xl font-semibold text-[#001931]">
              Oops, page not found!
            </h2>
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
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
