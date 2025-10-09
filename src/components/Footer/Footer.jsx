import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <div className="max-w-7xl mx-auto">
        <footer className="footer sm:footer-horizontal p-10 text-white">
          <div className="w-[300px] sm:w-[200px] lg:w-[300px] flex flex-col">
            <div className="flex justify-start items-center gap-3">
              <img src={logo} alt="" className="w-10 slow-spin" />
              <p className="font-bold text-white uppercase">AppVibe</p>
            </div>
            <p className="mt-3">
              At AppVibe, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact
            </p>
          </div>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Android</a>
            <a className="link link-hover">iOS</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact us</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Terms & Conditions</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="grid grid-flow-col gap-4">
              <a className="text-xl cursor-pointer hover:scale-105">
                <FaGithub />
              </a>
              <a className="text-xl cursor-pointer hover:scale-105">
                <FaXTwitter />
              </a>
              <a className="text-xl cursor-pointer hover:scale-105">
                <FaFacebook />
              </a>
            </div>
          </nav>
        </footer>
        <div className="flex justify-center py-5 border border-transparent border-t-gray-100 px-5 lg:px-0">
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <span className="font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent uppercase">
              AppVibe
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
