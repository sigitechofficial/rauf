/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function SoftwareSolutions(props) {
  return (
    <div className="space-y-4">
      <div className="w-[340px] h-[250px]">
        <img
          src={`/services/${props.image}.webp`}
          alt={props.image}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          {props.title}
        </h3>
        <p className="text-base md:text-lg text-[#222222CC]">
          {props.description}
        </p>
        <ul className="space-y-2">
          <li className="text-lg md:text-xl font-medium underline">
            {props.stackOne}
          </li>
          <li className="text-lg md:text-xl font-medium underline">
            {props.stackTwo}
          </li>
          <li className="text-lg md:text-xl font-medium underline">
            {props.stackThree}
          </li>
        </ul>

        <div>
          <button className="group relative h-12 w-44 md:w-48 overflow-hidden rounded-full bg-themeOrange md:text-lg shadow  flex justify-center items-center gap-2">
            <div className="absolute inset-0 w-0 bg-themeDarkOrange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-white font-medium group-hover:text-white">
              Explore more
            </span>
            <span className="relative text-white font-medium group-hover:text-white">
              <FaArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
