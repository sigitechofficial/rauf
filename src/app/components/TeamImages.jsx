import React from "react";
import Image from "next/image";

export default function TeamImages(props) {
  return (
    <div>
      <div className={`${props.bg} w-full h-[150px]`}>
        <Image
          src={props.imgSrc}
          alt="team"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
