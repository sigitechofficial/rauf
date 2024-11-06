import React from "react";
import LanguageCard from "./LanguageCard";
import { SiRubyonrails, SiTypescript } from "react-icons/si";
import { FaNodeJs, FaJava, FaPython, FaReact, FaAngular } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { GrSwift } from "react-icons/gr";
import { RiFlutterFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export default function TechnologyCard(props) {
  return (
    <div className="bg-themeGray shadow-md rounded-md p-6 space-y-6">
      <h3
        className={`text-xl md:text-3xl lg:text-4xl font-semibold ${props.color} underline`}
      >
        {props.title}
      </h3>

      {props.title === "Web Technologies" ? (
        <>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl lg:text-2xl font-medium">{props.stack}</h4>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
              <LanguageCard
                icon={<SiRubyonrails />}
                language="Ruby"
                color={props.color}
              />
              <LanguageCard
                icon={<FaNodeJs />}
                language="Node JS"
                color={props.color}
              />
              <LanguageCard
                icon={<SiTypescript />}
                language="Type script"
                color={props.color}
              />
              <LanguageCard
                icon={<FaJava />}
                language="Java"
                color={props.color}
              />
              <LanguageCard
                icon={<FaPython />}
                language="Python"
                color={props.color}
              />
              <LanguageCard
                icon={<FaNodeJs />}
                language=".NET"
                color={props.color}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-xl lg:text-2xl font-medium">
                {props.stackTwo}
              </h4>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
              <LanguageCard
                icon={<FaReact />}
                language="React JS"
                color={props.color}
              />
              <LanguageCard
                icon={<SiNextdotjs />}
                language="Next JS"
                color={props.color}
              />
              <LanguageCard
                icon={<IoLogoVue />}
                language="Vue JS"
                color={props.color}
              />
              <LanguageCard
                icon={<FaAngular />}
                language="Angular"
                color={props.color}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl lg:text-2xl font-medium">{props.stack}</h4>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
              <LanguageCard
                icon={<GrSwift />}
                language="Swift"
                color={props.color}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg md:text-xl3 lg:text-2xl font-medium">
                {props.stackTwo}
              </h4>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
              <LanguageCard
                icon={<FaReact />}
                language="React Native"
                color={props.color}
              />
              <LanguageCard
                icon={<RiFlutterFill />}
                language="Flutter"
                color={props.color}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
