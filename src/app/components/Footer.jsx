import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaMobileScreenButton } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-themeBlue">
      <div className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10">
        <div className="space-y-5 md:space-y-10">
          <Link href={"/"} target="_blank">
            <Image src={`/logo.webp`} alt="logo" width={100} height={40} />
          </Link>

          <div className="space-y-2">
            <div className="w-72 md:w-80 h-[1px] bg-white"></div>
            <h3 className="text-white font-semibold text-lg uppercase">
              Contacts
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="md:flex gap-10 space-y-5 md:space-y-0">
              <div className="flex gap-2 text-white">
                <FaMobileScreenButton className="mt-1"/>
                <div>+92 123 456 789</div>
              </div>
              <div className="flex gap-2 text-white">
                <FaEnvelope className="mt-1"/>
                <div>info@sigitechnologies.com</div>
              </div>
            </div>

            <div className="md:flex justify-between space-y-5 md:space-y-0">
              <div className="flex flex-col">
                <div className="text-white">Main Office</div>
                <div className="text-[#FFFFFF99]">
                  Sher Ali Road, Kiberia Town, Raiwind Road Lahore
                </div>
              </div>
              <div className="flex flex-col text-white">
                <div className="text-white">London Office</div>
                <div className="text-[#FFFFFF99]">
                  Sher Ali Road, Kiberia Town, Raiwind Road Lahore
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:justify-between gap-y-5 gap-x-10 md:gap-10 flex-wrap">
            <div className="space-y-4">
              <h4 className="text-[#FFFFFF99] uppercase">Company</h4>
              <ul className="space-y-4">
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="/about_us">About us</Link>
                </li>
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="/why_choose_us">Why Sigi Tech</Link>
                </li>
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="/team">Meet the Team</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[#FFFFFF99] uppercase">Services</h4>
              <ul className="space-y-4">
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="">Dedicated Development Team</Link>
                </li>
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="/ui_ux_design_services">
                    Custom Software Development
                  </Link>
                </li>
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="/mobile_app_services">
                    Mobile App Development
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[#FFFFFF99] uppercase">Success Stories</h4>
              <ul className="space-y-4">
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="/case_studies">Case Studies</Link>
                </li>
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="">Testimonials</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[#FFFFFF99] uppercase">Technologies</h4>
              <ul className="space-y-4">
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="/case_studies">.NET</Link>
                </li>
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="">Node.js</Link>
                </li>
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="">React js</Link>
                </li>
                <li className="text-white font-medium text-sm lg:text-base">
                  <Link href="">ML & AI</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-5/6 mx-auto py-5 border-t">
        <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
          <div className="flex gap-5 justify-center">
            <Link
              href="/blogs"
              className="text-white font-medium text-sm lg:text-base"
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className="text-white font-medium text-sm lg:text-base"
            >
              Careers
            </Link>
          </div>

          <div>
            <p className="text-white text-center font-medium text-sm tracking-wider">
              ©2020-2023 Sigi Technologies. All rights reserved.{" "}
              <span className="underline cursor-pointer">Privacy policy.</span>{" "}
            </p>
          </div>

          <div>
            <ul className="flex space-x-4 justify-center">
              <Link href="https://www.facebook.com">
                <FaFacebookF className="text-white text-xl cursor-pointer" />
              </Link>
              <Link href="https://twitter.com">
                <FaTwitter className="text-white text-xl cursor-pointer" />
              </Link>
              <Link href="https://instagram.com">
                <AiFillInstagram className="text-white text-xl cursor-pointer" />
              </Link>
              <Link href="https://youtube.com">
                <FaYoutube className="text-white text-xl cursor-pointer" />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
