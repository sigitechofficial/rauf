import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ReviewsCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-5">
      <div className="lg:col-span-2">
        <Image src="/review.png" alt="review" width={600} height={500} className="w-full"/>
      </div>

      <div className="lg:col-span-3 space-y-5 lg:max-w-lg mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className="text-3xl font-medium">Henrik Loop</h4>
            <p className="text-[#00000099]">
              Director of Software Engineering of Mastercard
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-themeGray2 py-2 px-4 rounded-full">
              <div>
                <Image
                  src={`/panama.webp`}
                  alt={`panama`}
                  width={18}
                  height={18}
                />
              </div>
              <div className="text-xs text-themeDarkGray">Panama</div>
            </div>
          </div>
        </div>

        <div className="text-[#00000099]">
        &quot;We&apos;re very happy with Sigi Technologies. They seem to work in the way
          that we do, and we have a close collaboration with them. Every day we
          talk to the developers and outline what needs to be done.&quot;
        </div>

        <div>
          <button className="group relative h-12 w-44 md:w-48 overflow-hidden rounded-full bg-themeOrange md:text-lg shadow  flex justify-center items-center gap-2">
            <div className="absolute inset-0 w-0 bg-themeDarkOrange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-white font-medium group-hover:text-white">
            View case study
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
