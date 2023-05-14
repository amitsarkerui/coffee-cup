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
  const deleteHandler = (id) => {
    const restCoffee = loadedCoffees.filter((cp) => cp._id !== id);
    setCoffees(restCoffee);
  };
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
      <div className="mb-24">
        <h2 className="text-3xl text-center mt-20 mb-10">
          Our Popular Products
        </h2>
        {/* <span className="w-full">
          <Link
            to={"/addCoffee"}
            className="btn bg-amber-800 ml-8 text-center mx-auto"
          >
            Add a coffee
          </Link>
        </span> */}

        <div className="container mx-auto grid grid-cols-1 gap-7 md:grid-cols-2">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              setCoffees={setCoffees}
              deleteHandler={deleteHandler}
            ></CoffeeCard>
          ))}
        </div>
      </div>
      <div className="container mx-auto mb-24">
        <h2 className="text-3xl text-center mt-20 mb-10">
          Follow us on Instagram
        </h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
          <img
            className="object-contain w-full"
            src="https://i.ibb.co/6XQw64m/Rectangle-9.png"
            alt=""
          />
          <img
            className="object-contain w-full"
            src="https://i.ibb.co/vmF5C6N/Rectangle-10.png"
            alt=""
          />
          <img
            className="object-contain w-full"
            src="https://i.ibb.co/44LtYsy/Rectangle-11.png"
            alt=""
          />
          <img
            className="object-contain w-full"
            src="https://i.ibb.co/0ZXbTs3/Rectangle-12.png"
            alt=""
          />
          <img
            className="object-contain w-full"
            src="https://i.ibb.co/wWmczvX/Rectangle-13.png"
            alt=""
          />
          <img
            className="object-contain w-full"
            src="https://i.ibb.co/tZFgtK1/Rectangle-14.png"
            alt=""
          />
          <img
            className="object-contain w-full"
            src="https://i.ibb.co/BGVKwsZ/Rectangle-15.png"
            alt=""
          />
          <img
            className="object-contain w-full"
            src="https://i.ibb.co/r3XTrKR/Rectangle-16.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
