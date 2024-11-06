import React from "react";
import Image from "next/image";

export default function Values(props) {
  return (
    <div className="space-y-2">
      <Image
        src={`/company/${props.image}.webp`}
        alt={props.image}
        className="w-full h-[164px]"
      />
      <h3 className="text-2xl font-medium">{props.title}</h3>
      <p className="text-base text-[#00000099]">{props.description}</p>
    </div>
  );
}
