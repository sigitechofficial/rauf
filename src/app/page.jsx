"use client";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import ServicesCard from "./components/ServicesCard";
import ServeCard from "./components/ServeCard";
import { FaArrowRight } from "react-icons/fa6";
import CaseStudy from "./components/CaseStudy";
import InsightCard from "./components/InsightCard";
import TechnologyCard from "./components/TechnologyCard";
import ReviewsCard from "./components/ReviewsCard";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <ChakraProvider>
      <main>
        <section className="bg-themeBlue relative">
          <div className="before:absolute before:bg-heroBgOne before:bg-no-repeat before:bg-cover before:bg-center before:w-[200px] md:before:w-[400px] lg:before:w-[600px] before:h-full before:top-0 before:left-0"></div>
          <div className="before:absolute before:bg-heroBgLogo before:bg-no-repeat before:bg-contain before:bg-center before:w-[200px] md:before:w-[400px] lg:before:w-[600px] before:h-full before:top-0 before:left-1/2 before:-translate-x-1/2"></div>
          <div className="before:absolute before:bg-heroBgTwo before:bg-no-repeat before:bg-cover before:bg-center before:w-[200px] md:before:w-[400px] lg:before:w-[600px] before:h-full before:top-0 before:right-0"></div>

          <Header />

          <div className="fixed bottom-4 right-6 z-[30]">
            <Image
              src="/whatsapp-icon.webp"
              alt="whatsapp"
              width={40}
              height={40}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-20 w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-3">
                <h1 className="text-[34px] leading-snug md:text-[54px] text-white font-semibold max-w-2xl underline decoration-2 underline-offset-4 decoration-themeOrange">
                  Software consulting and development for your digital success
                </h1>

                <p className="text-lg md:text-xl text-white max-w-xl">
                  Sigi Technologies leverages exceptional software engineering
                  talent to digitalize small and medium-sized businesses.
                </p>
              </div>

              <div>
                <button className="group relative h-12 w-40 overflow-hidden rounded-full bg-themeOrange md:text-lg shadow">
                  <div className="absolute inset-0 w-0 bg-themeDarkOrange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-white font-medium group-hover:text-white">
                    Contact with us
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-5 md:flex gap-5">
                <Image
                  src="/goodfirm.webp"
                  alt="goodfirm"
                  width={60}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/Clutch.webp"
                  alt="clutch"
                  width={60}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/App Future.webp"
                  alt="futura"
                  width={60}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/Mobile App Daily.webp"
                  alt="mobile-app"
                  width={60}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/Sortlist.webp"
                  alt="sortlist"
                  width={60}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="hidden lg:block">
              <Swiper
                slidesPerView={1}
                effect={"fade"}
                modules={[EffectFade, Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false}
                speed={2500}
                loop={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src="/food.webp"
                    alt="food"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/laundry.webp"
                    alt="laundry"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/real-estate.webp"
                    alt="real-estate"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/fintech.webp"
                    alt="fintech"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/taxi.webp"
                    alt="taxi"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/booking.webp"
                    alt="booking"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/on-demand.webp"
                    alt="demand"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/delivery.webp"
                    alt="delivery"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/logistics.webp"
                    alt="logistics"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/beauty.webp"
                    alt="beauty"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/e-commerce.webp"
                    alt="commerce"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/grocery.webp"
                    alt="grocery"
                    width={240}
                    height={0}
                    className="mx-auto h-[450px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="bg-themeGray py-8 md:py-10 lg:py-14">
          <div className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold capitalize">
            <h2>Services we provide</h2>
          </div>

          <div className="w-11/12 lg:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-8 md:pt-10 lg:pt-14">
            <ServicesCard titleOne="Dedicated" titleTwo="Development Team" />
            <ServicesCard titleOne="Mobile" titleTwo="App Development" />
            <ServicesCard titleOne="Custom Software" titleTwo="Development" />
            <ServicesCard titleOne="IoT Application" titleTwo="Development" />
            <ServicesCard titleOne="Search Engine" titleTwo="Optimization" />
            <ServicesCard titleOne="CRM" titleTwo="Development" />
            <ServicesCard titleOne="Front End" titleTwo="Development" />
            <ServicesCard titleOne="Quality" titleTwo="Assurance" />
          </div>
        </section>

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14">
          <div className="flex justify-between">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              Case Studies
            </h2>

            <button className="group relative h-12 w-36 md:w-40 overflow-hidden rounded-full bg-themeOrange md:text-lg shadow  flex justify-center items-center gap-2">
              <div className="absolute inset-0 w-0 bg-themeDarkOrange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-white font-medium group-hover:text-white">
                More project
              </span>
              <span className="relative text-white font-medium group-hover:text-white">
                <FaArrowRight size={16} />
              </span>
            </button>
          </div>

          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={80}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <CaseStudy
                  title="Finance Tracking App for Budget Management"
                  description="Personal Finance Management Application designed to streamline finances by creating budgets and setting achievable financial goals."
                  image="1"
                  flag="australia"
                  tagOne="Australia"
                  tagTwo="Fintech"
                  tagThree="Budgeting App"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudy
                  title="Meal Distribution System with Budget Tracking and Reporting"
                  description="Student Meal Program offers a cloud-based solution for efficiently delivering nutritious meals to students, while also enabling data-driven decision-making within the Jamaican school system."
                  image="2"
                  flag="jamaica"
                  tagOne="Jamaica"
                  tagTwo="Fintech"
                  tagThree="CRM"
                  tagFour="Dashboard"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudy
                  title="Shipping and Freight Forwarding Software with Warehousing"
                  description="Seamless parcel forwarding from the USA to Puerto Rico with online payment options, advanced integration with DHL and FedEx, and efficient warehousing solutions."
                  image="3"
                  flag="usa"
                  tagOne="USA"
                  tagTwo="Logistics App"
                  tagThree="Logistics Web"
                  tagFour="CRM"
                  tagFive="Dashboard"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CaseStudy
                  title="Logistics System for Warehousing and Deliveries"
                  description="DHL-like platform that not only addresses the unique challenges of Panama's house address system but also ensures seamless deliveries through efficient route planning."
                  image="4"
                  flag="panama"
                  tagOne="Panama"
                  tagTwo="Logistics App"
                  tagThree="Logistics Web"
                  tagFour="CRM"
                  tagFive="Dashboard"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold capitalize">
              Empowering Technology Stack
            </h2>
            <p className="text-black lg:text-xl text-center max-w-3xl mx-auto">
              Our development team employs cutting-edge, scalable technologies
              to craft innovative mobile and web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-8 md:pt-10 lg:pt-14">
            <TechnologyCard
              title="Web Technologies"
              color="text-themeBlue"
              stack="Backend"
              stackTwo="Frontend"
            />
            <TechnologyCard
              title="Mobile Technologies"
              color="text-themeOrange"
              stack="IOS"
              stackTwo="Cross platform"
            />
          </div>
        </section>

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14 space-y-8">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center max-w-4xl mx-auto">
              Learn about Sigi Technologies expertise in Projects Portfolio.
            </h2>
          </div>
          <div className="flex justify-between">
            <h4 className="text-2xl md:text-3xl font-semibold text-themeOrange">
              Our Clients Say About Us
            </h4>

            <div>
              <button className="relative lg:flex px-6 py-2.5 bg-transparent border border-themeOrange text-themeOrange rounded-full overflow-hidden before:absolute before:top-12 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:rounded-full before:bg-themeOrange before:transition-all before:duration-700 hover:before:w-[300px] hover:text-white duration-500 hover:before:h-[300px] hidden">
                <span className="relative z-50 font-medium flex items-center gap-2">
                  More reviews
                  <FaArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>

          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={80}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <ReviewsCard />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewsCard />
              </SwiperSlide>
              <SwiperSlide>
                <ReviewsCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="bg-themeGray py-8 md:py-10 lg:py-14">
          <div className="w-4/5 lg:w-3/4 mx-auto">
            <div>
              <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold capitalize">
                We proudly serve clients across a diverse range of industries
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-7 md:pt-10 lg:pt-14">
              <ServeCard
                title="Marketplaces"
                description="B2B, B2C, C2C platforms hat help to enlarge the business value"
              />
              <ServeCard
                title="Media"
                description="Streaming and entertainment software: mobile, Desktops, TVs"
              />
              <ServeCard
                title="Retail"
                description="CRM, POS, RMS, and similar software for stores and retail chains"
              />
              <ServeCard
                title="Travel"
                description="Booking platforms, HMS, and TMS software for hospitality and tourism"
              />
              <ServeCard
                title="Social"
                description="Innovation platforms designed for your business goals and model"
              />
              <ServeCard
                title="Education"
                description="Education system, LMS, AR/VR, and all the digitals to learn and teach"
              />
            </div>
          </div>
        </section>

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14">
          <div className="flex justify-between">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              Latest Insights
            </h2>

            <button className="group relative h-12 w-36 md:w-40 overflow-hidden rounded-full bg-themeOrange md:text-lg shadow  flex justify-center items-center gap-2">
              <div className="absolute inset-0 w-0 bg-themeDarkOrange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-white font-medium group-hover:text-white">
                Read more
              </span>
              <span className="relative text-white font-medium group-hover:text-white">
                <FaArrowRight size={16} />
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-5 pt-5 lg:pt-10">
            <InsightCard
              image="1"
              title="Shipping from china made easy"
              blog="Logistic"
              backgroundColor="bg-insightOne"
            />
            <InsightCard
              image="2"
              title="An on demand food delivery platform"
              blog="Food delivery"
              backgroundColor="bg-insightTwo"
            />
            <InsightCard
              image="3"
              title="Shipping from china made easy"
              blog="Logistic"
              backgroundColor="bg-insightThree"
            />
          </div>
        </section>

        <section className="py-8 md:py-10 lg:py-14">
          <div className="w-5/6 lg:w-4/5 2xl:w-[77%] mx-auto">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold capitalize">
                Who we are
              </h2>
              <p className="text-black lg:text-xl">
                Sigi Technologies, a custom application development company, has
                been empowering global clients since its inception in 2016. Our
                diverse industry proficiency and client-centric approach enhance
                business value, ensuring digital products align perfectly with
                your needs.
              </p>
            </div>

            <div className="mt-8 md:mt-10 lg:mt-14">
              <Image src="/video.webp" alt="video" width={1000} height={500} />
            </div>

            <div className="lg:flex justify-between space-y-6 lg:space-y-0 my-8 md:my-8 lg:my-14">
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-4xl lg:text-5xl text-themeOrange font-semibold">
                  100+
                </h4>
                <p className="text-lg xl:text-xl font-medium">
                  Delivered projects
                </p>
              </div>

              <div className="flex items-center justify-between gap-4">
                <h4 className="text-4xl lg:text-5xl text-themeOrange font-semibold">
                  15+
                </h4>
                <p className="text-lg xl:text-xl font-medium">
                  Countries with clients
                </p>
              </div>

              <div className="flex items-center justify-between gap-4">
                <h4 className="text-4xl lg:text-5xl text-themeOrange font-semibold">
                  20+
                </h4>
                <p className="text-lg xl:text-xl font-medium">
                  Achievements
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[2px] bg-themeOrange"></div>

          <div className="w-4/5 lg:w-3/4 mx-auto pt-8 md:pt-10 lg:pt-14">
            <div className="grid grid-cols-5 gap-3">
              <Image
                src="/goodfirm.webp"
                alt="goodfirm"
                className="object-contain"
                width={100}
                height={80}
              />
              <Image
                src="/Clutch.webp"
                alt="goodfirm"
                className="object-contain"
                width={100}
                height={80}
              />
              <Image
                src="/App Future.webp"
                alt="goodfirm"
                className="object-contain"
                width={100}
                height={80}
              />
              <Image
                src="/Mobile App Daily.webp"
                alt="goodfirm"
                className="object-contain"
                width={100}
                height={80}
              />
              <Image
                src="/Sortlist.webp"
                alt="goodfirm"
                className="object-contain"
                width={100}
                height={80}
              />
            </div>
          </div>
        </section>

        <section className="bg-contactUs relative">
          <div className="before:absolute before:bg-heroBgOne before:bg-no-repeat before:bg-cover before:bg-center before:w-[200px] md:before:w-[400px] lg:before:w-[600px] before:h-full before:top-0 before:left-0"></div>
          <div className="before:absolute before:bg-heroBgTwo before:bg-no-repeat before:bg-cover before:bg-center before:w-[200px] md:before:w-[400px] lg:before:w-[600px] before:h-full before:top-0 before:right-0"></div>

          <div className="w-4/5 lg:w-[77%] mx-auto py-8 md:py-10 lg:py-14 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5">
              <div>
                <h2 className="text-white text-2xl md:text-3xl font-medium">
                  Contact us
                </h2>

                <div className="flex flex-col items-center gap-3 pt-5">
                  <div>
                    <Image
                      src={`/zeeshan-nawaz.webp`}
                      alt="video"
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white text-2xl font-semibold text-center">
                      Zeeshan Nawaz
                    </h4>
                    <p className="text-white text-center font-medium">
                      CEO & Co-Founder
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="group relative h-12 w-40 md:w-48 overflow-hidden rounded-full bg-themeOrange md:text-lg shadow  flex justify-center items-center gap-2">
                      <div className="absolute inset-0 w-0 bg-themeDarkOrange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className="relative text-white font-medium group-hover:text-white">
                        Book a meeting
                      </span>
                      <span className="relative text-white font-medium group-hover:text-white">
                        <FaArrowRight size={16} />
                      </span>
                    </button>

                    <div className="text-3xl border-2 border-themeOrange text-white p-1 rounded-md">
                      <FaLinkedinIn />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-white">
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-transparent border-b border-white outline-none w-full text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-white">
                      Company*
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="bg-transparent border-b border-white outline-none w-full text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-white">
                      Email address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-transparent border-b border-white outline-none w-full text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="text-white">
                      Phone number*
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      className="bg-transparent border-b border-white outline-none w-full text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="project" className="text-white">
                      About a project
                    </label>
                    <input
                      type="text"
                      name="project"
                      id="project"
                      className="bg-transparent border-b border-white outline-none w-full text-white"
                    />
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="nda"
                    id="nda"
                    className="outline-white border-2 border-white bg-none w-4 h-4"
                  />
                  <label
                    htmlFor="nda"
                    className="text-white text-sm font-medium"
                  >
                    Sent me NDA
                  </label>
                </div>

                <div className="text-white font-medium text-sm">
                  By sending this form I confirm that I have read and accept the{" "}
                  <span className="underline">Privacy Policy</span>
                </div>

                <div className="flex items-center gap-3">
                  <button className="group relative h-12 w-full overflow-hidden rounded-full bg-themeOrange md:text-lg shadow  flex justify-center items-center gap-2">
                    <div className="absolute inset-0 w-0 bg-themeDarkOrange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-white font-medium group-hover:text-white">
                      Send Message
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ChakraProvider>
  );
}
