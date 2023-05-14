import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="bg-gray-100 p-10 rounded-xl grid grid-cols-4 items-center gap-4">
      <img className="w-40 h-40 object-contain rounded-md" src={photo} alt="" />
      <div className="col-span-2">
        <h4>Name: {name}</h4>
        <h4>Chef: {chef}</h4>
        <p>{details}</p>
      </div>
      <div className="btn-group btn-group-vertical justify-self-end">
        <Link className="bg-orange-500 p-3 text-white rounded-md">
          <FaEye />
        </Link>
        <Link
          to={`/update/${_id}`}
          className="bg-amber-500 p-3 text-white rounded-md my-3"
        >
          <FaPen />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 p-3 text-white rounded-md"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
