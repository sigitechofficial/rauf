import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function InsightCard(props) {
  return (
    <div>
      <div
        className={`relative before:absolute before:${props.backgroundColor} before:bg-center before:bg-cover before:w-full before:h-full before:top-0 before:left-0 before:rounded-tl-2xl before:rounded-tr-2xl`}
      >
        <Image
          src={`/insight-${props.image}.webp`}
          alt={`insight-${props.image}`}
          width={400}
          height={400}
          className="w-full h-full rounded-tl-2xl rounded-tr-2xl"
        />
      </div>
      <div className="bg-themeGray p-5 space-y-6 rounded-bl-2xl rounded-br-2xl">
        <div className="space-y-3">
          <div className="text-black text-[10px] font-light flex items-center gap-2">
            <span>Blog</span>
            <span>
              <FaArrowRight />
            </span>
            <span>{props.blog}</span>
          </div>
          <p>{props.title}</p>
        </div>
        <div className="text-xs">16-02-2024</div>
      </div>
    </div>
  );
}
