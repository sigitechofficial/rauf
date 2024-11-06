import React from "react";

export default function LanguageCard(props) {
  return (
    <div className="space-y-1">
      <div
        className="bg-white rounded-md h-14 border border-[#DDDDDD] w-full flex justify-center 
        items-center"
      >
        <div className={`${props.color} text-3xl`}>{props.icon}</div>
      </div>
      <div className={`${props.color} text-sm font-medium text-center`}>
        {props.language}
      </div>
    </div>
  );
}
