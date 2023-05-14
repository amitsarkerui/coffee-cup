import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import icon1 from "../../public/img/icons/1.png";
import icon2 from "../../public/img/icons/2.png";
import icon3 from "../../public/img/icons/3.png";
import icon4 from "../../public/img/icons/4.png";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/B40hgST/coffee-beans-top-view-white-background-space-text.jpg')] bg-cover bg-center py-72">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl  ">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="max-w-2xl mx-auto my-8">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div>
        <div className="py-10 container mx-auto grid grid-cols-1 gap-4 md:grid-cols-4">
          <div>
            <img src={icon1} alt="" />
            <h4 className="text-xl my-3">Awesome Aroma</h4>
            <p className="w-60">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src={icon2} alt="" />
            <h4 className="text-xl my-3">High Quality</h4>
            <p className="w-60">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src={icon3} alt="" />
            <h4 className="text-xl my-3">Pure Grades</h4>
            <p className="w-60">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src={icon4} alt="" />
            <h4 className="text-xl my-3">Proper Roasting</h4>
            <p className="w-60">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-7 md:grid-cols-2">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
