import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ServicesCard(props) {
  return (
    <div
      className="p-4 bg-white rounded-md shadow-md hover:bg-themeBlue [&>div>div>h3]:hover:text-white
      [&>div>div>h4]:hover:text-white [&>div>p]:hover:text-white [&>div>button]:hover:underline 
      duration-200"
    >
      <div className="space-y-3">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">{props.titleOne}</h3>
          <h4 className="text-xl md:text-2xl font-semibold">{props.titleTwo}</h4>
        </div>
        <p className="text-[#00000099] text-sm">
          Work with our outstanding engineers and integrate them into your
          processes.
        </p>

        <button className="flex items-center gap-3 text-themeOrange">
          <span>Learn more</span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}
