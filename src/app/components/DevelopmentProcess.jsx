import React from "react";
import Image from "next/image";

export default function DevelopmentProcess(props) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Image
        src={`/services/${props.image}.webp`}
        alt={props.image}
        className="w-16 h-16"
      />
      <div className="font-medium text-center">{props.title}</div>
    </div>
  );
}
