import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function CaseStudy(props) {
  return (
    <div className="lg:grid grid-cols-5 items-center gap-5 pt-5 lg:pt-10">
      <div className="col-span-3 space-y-6">
        <div className="space-y-3">
          <h4 className="text-xl md:text-3xl lg:text-4xl max-w-[620px] font-semibold uppercase">
            {props.title}
          </h4>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-themeGray2 py-2 px-4 rounded-full">
              <div>
                <Image
                  src={`/${props.flag}.webp`}
                  alt={`${props.flag}`}
                  width={18}
                  height={18}
                />
              </div>
              <div className="text-xs text-themeDarkGray">{props.tagOne}</div>
            </div>
            <div
              className={`text-xs text-center text-themeDarkGray bg-themeGray2 py-2 px-4 rounded-full ${
                props.tagTwo ? "block" : "hidden"
              }`}
            >
              {props.tagTwo}
            </div>
            <div
              className={`text-xs text-center text-themeDarkGray bg-themeGray2 py-2 px-4 rounded-full ${
                props.tagThree ? "block" : "hidden"
              }`}
            >
              {props.tagThree}
            </div>
            <div
              className={`text-xs text-center text-themeDarkGray bg-themeGray2 py-2 px-4 rounded-full ${
                props.tagFour ? "block" : "hidden"
              }`}
            >
              {props.tagFour}
            </div>
            <div
              className={`text-xs text-center text-themeDarkGray bg-themeGray2 py-2 px-4 rounded-full ${
                props.tagFive ? "block" : "hidden"
              }`}
            >
              {props.tagFive}
            </div>
          </div>
        </div>

        <div className="max-w-xl text-[#22222299]">{props.description}</div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="text-xs text-center text-[#00000066] border border-[#DDDDDD99] py-2 px-4 rounded-full">
            IT consulting
          </div>
          <div className="text-xs text-center text-[#00000066] border border-[#DDDDDD99] py-2 px-4 rounded-full">
            UI/UX design
          </div>
          <div className="text-xs text-center text-[#00000066] border border-[#DDDDDD99] py-2 px-4 rounded-full">
            Mobile App development
          </div>
          <div className="text-xs text-center text-[#00000066] border border-[#DDDDDD99] py-2 px-4 rounded-full">
            Quality Assurance
          </div>
          <div className="text-xs text-center text-[#00000066] border border-[#DDDDDD99] py-2 px-4 rounded-full">
            DevOps
          </div>
        </div>

        <div>
          <button className="relative lg:flex px-6 py-2.5 bg-transparent border border-themeOrange text-themeOrange rounded-full overflow-hidden before:absolute before:top-12 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:rounded-full before:bg-themeOrange before:transition-all before:duration-700 hover:before:w-[300px] hover:text-white duration-500 hover:before:h-[300px] hidden">
            <span className="relative z-50 font-medium flex items-center gap-2">
              Explore More
              <FaArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={`/case-study-${props.image}.webp`}
          alt={`case-study-${props.image}`}
          width={500}
          height={300}
          style={{ margin: "auto" }}
        />
      </div>
    </div>
  );
}
