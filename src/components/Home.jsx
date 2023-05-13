import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
    </div>
  );
};

export default Home;
