import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/img/Logo.png";

const Footer = () => {
  return (
    <div className="bg-amber-800">
      <footer className="footer p-10 text-base-content container mx-auto">
        <Link>
          <img className="w-72" src={Logo} alt="" />
        </Link>
        <div className="text-white">
          <span className="text-lg font-bold mb-8">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="text-white">
          <span className="text-lg font-bold mb-8">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="text-white">
          <span className="text-lg font-bold mb-8">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
