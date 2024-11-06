"use client";
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";
import ListHead from "./ListHead";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="w-11/12 lg:w-5/6 mx-auto relative">
      <nav className="flex justify-between items-center py-4">
        <Link href={"/"} target="_blank">
          <Image
            src={`/logo.webp`}
            alt="logo"
            width={100}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <div>
          <ul
            className={`lg:flex gap-5 justify-between items-center z-[-1] md:z-50 absolute lg:static
              w-full transition-all ease-in left-0  lg:opacity-100 opacity-0 ${
                open
                  ? "top-[80px] opacity-100 bg-white rounded-md z-[999]"
                  : "top-[-400px]"
              }`}
          >
            <ListHead title="Services" active={open} />
            <ListHead title="Industries" active={open} />
            <ListHead title="Expertise" active={open} />
            <ListHead title="Company" active={open} />
            <ListHead title="Portfolio" active={open} />
            <ListHead title="Blog" active={open} />

            {open ? (
              <div className="px-4 py-3 md:p-4">
                <button className="relative flex px-6 py-2.5 bg-transparent border border-themeOrange text-themeOrange rounded-full overflow-hidden before:absolute before:top-12 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:rounded-full before:bg-themeOrange before:transition-all before:duration-700 hover:before:w-[300px] hover:text-white duration-500 hover:before:h-[300px]">
                  <span className="relative z-50 font-medium">Contact us</span>
                </button>
              </div>
            ) : (
              <></>
            )}
          </ul>
        </div>

        <div className="flex gap-2">
          <button className="relative lg:flex px-6 py-2.5 bg-transparent border border-themeOrange text-themeOrange rounded-full overflow-hidden before:absolute before:top-12 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:rounded-full before:bg-themeOrange before:transition-all before:duration-700 hover:before:w-[300px] hover:text-white duration-500 hover:before:h-[300px] hidden">
            <span className="relative z-50 text-lg font-medium">
              Contact us
            </span>
          </button>

          <button
            className="text-white text-4xl lg:hidden block"
            onClick={() => setOpen(!open)}
          >
            <HiMenu />
          </button>
        </div>
      </nav>
    </header>
  );
}
