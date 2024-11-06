import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ServeCard(props) {
  return (
    <div
      className="p-4 bg-white rounded-md shadow-md hover:bg-themeBlue [&>div>h3]:hover:text-white
     [&>div>p]:hover:text-white [&>div>button]:hover:text-white duration-200"
    >
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl text-themeBlue font-semibold">{props.title}</h3>

        <p className="text-[#00000099] text-sm">{props.description}</p>

        <button className="w-full flex justify-end text-themeBlue">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
