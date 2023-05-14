import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleCoffee = () => {
  const loadedCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } =
    loadedCoffee;
  return (
    <div className="container mx-auto">
      <Link to={"/"}>
        <span className="flex items-center gap-2 mt-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <h4>Back to home</h4>
        </span>
      </Link>
      <div className=" bg-gray-100 rounded-lg p-10 my-14 flex items-center justify-evenly">
        <img className=" p-10 rounded-md" src={photo} alt="" />
        <div>
          <h4>Name : {name}</h4>
          <p>Chef: {chef}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
          <p>Category: {category}</p>
          <p>Details: {details}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
