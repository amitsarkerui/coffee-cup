import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Coffee Updated Successfully!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Yeah !",
          });
        }
        form.reset();
      });
  };
  return (
    <div className="container mx-auto py-20">
      <Link to={"/"}>
        <span className="flex items-center gap-2">
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
      <div className="bg-gray-200 mt-10 px-10 p-12 rounded-xl">
        <h2 className="text-2xl text-center">Update Coffee</h2>
        <p className="text-center max-w-2xl mx-auto my-5 text-gray-600">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <div>
          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <div className="">
              <label className="mb-3 ml-1 block text-base font-medium text-black">
                Name
              </label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              />
            </div>
            <div className="">
              <label className="mb-3 ml-1 block text-base font-medium text-black">
                Chef
              </label>
              <input
                type="text"
                defaultValue={chef}
                name="chef"
                className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              />
            </div>
            <div className="">
              <label className="mb-3 ml-1 block text-base font-medium text-black">
                Supplier
              </label>
              <input
                type="text"
                defaultValue={supplier}
                name="supplier"
                className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              />
            </div>
            <div className="">
              <label className="mb-3 ml-1 block text-base font-medium text-black">
                Taste
              </label>
              <input
                type="text"
                defaultValue={taste}
                name="taste"
                className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              />
            </div>
            <div>
              <label className="mb-3 block text-base font-medium text-black">
                Category
              </label>
              <div className="relative">
                <select
                  name="category"
                  defaultValue={category}
                  className="border-form-stroke text-body-color focus:border-primary active:border-primary w-full appearance-none rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                >
                  <option value="Rose Coffee">Rose Coffee</option>
                  <option value="Mac Coffee">Mac Coffee</option>
                  <option value="Nafa Cafe">Nafa Cafe</option>
                </select>
                <span className="border-body-color absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2"></span>
              </div>
            </div>
            <div className="">
              <label className="mb-3 ml-1 block text-base font-medium text-black">
                Details
              </label>
              <input
                type="text"
                defaultValue={details}
                name="details"
                className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              />
            </div>
            <div className="col-span-2">
              <label className="mb-3 ml-1 block text-base font-medium text-black">
                Photo URL
              </label>
              <input
                type="text"
                defaultValue={photo}
                name="photo"
                className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              />
            </div>
            <input
              className="btn btn-block col-span-2 my-5"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
