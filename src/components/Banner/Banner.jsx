import React from "react";
import appImg from "../../assets/app.png";
import playImg from "../../assets/play.png";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto pt-[80px] px-5 lg:px-0">
        <div className="text-center pb-10">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#001931]">
            We Build <br />{" "}
            <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="md:text-xl text-[#627382] md:leading-8 mt-4 mb-10 px-0 md:px-[50px] xl:px-[130px]">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              className="btn btn-outline py-6 border-gray-300"
            >
              <img src={playImg} alt="play store" className="w-7" /> Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="btn btn-outline py-6 border-gray-300"
            >
              <img src={appImg} alt="app store" className="w-7" /> App Store
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={bannerImg} alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
