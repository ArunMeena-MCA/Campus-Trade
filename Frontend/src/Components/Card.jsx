import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <NavLink to={'/productdetails'} className="w-[22vw] h-[40vh] data={data}">
      <div className="w-full h-[70%] bg-black">
        {/* <img src="" alt="" className='w-full h-[70%] bg-white' /> */}
      </div>
      <div className="w-full h-[30%] bg-zinc-300 flex flex-col justify-center items-start px-5">
        <h1 className="text-xl">Product price</h1>
        <p className="text-gray-600">{data.title}</p>
      </div>
    </NavLink>
  );
};

export default Card;
