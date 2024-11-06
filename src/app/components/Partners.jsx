import Image from "next/image";
import React from "react";

export default function Partners(props) {
  return (
    <Image
      src={`/services/${props.image}.webp`}
      alt={props.image}
      width={120}
      height={100}
      className="object-contain"
    />
  );
}
