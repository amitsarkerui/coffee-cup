import React from "react";
import Logo from "../../../public/img/Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-amber-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to={"/"}>
          <img className="w-72" src={Logo} alt="" />
        </Link>

        <ul>
          <Link className="text-white ml-4">Home</Link>
          <Link className="text-white ml-4">About Us</Link>
          <Link className="text-white ml-4">Contact Us</Link>
          <Link to={"/addCoffee"} className="text-white btn glass ml-8">
            Add a coffee
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
