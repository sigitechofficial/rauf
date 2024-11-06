"use client";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import Header from "@/app/components/Header";
import Partners from "@/app/components/Partners";
import ReviewsCard from "@/app/components/ReviewsCard";
import ServeCard from "@/app/components/ServeCard";
import SoftwareSolutions from "@/app/components/SoftwareSolutions";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaArrowRight } from "react-icons/fa";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Select from "react-select";
import Footer from "@/app/components/Footer";

export default function page() {
  return (
    <ChakraProvider>
      <main>
        <section className="bg-themeBlue relative h-screen">
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

          <div className="relative z-20 w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-20">
            <div className="space-y-5">
              <h1 className="text-[34px] leading-snug md:text-[54px] text-white font-semibold max-w-4xl">
                Custom Software Development Services
              </h1>

              <p className="text-lg md:text-xl text-white max-w-4xl">
                We create Solutions that solve business problems, meet
                requirements, respond to market needs, and transform internal
                operations.
              </p>

              <div>
                <button className="group relative h-12 w-40 overflow-hidden rounded-full bg-themeOrange md:text-lg shadow">
                  <div className="absolute inset-0 w-0 bg-themeDarkOrange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-white font-medium group-hover:text-white">
                    Contact with us
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 md:pt-10 lg:pt-14">
          <div className="w-11/12 lg:w-5/6 mx-auto space-y-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              Featured Partners & Clients
            </h2>
            <p className="text-black lg:text-xl">
              Clients and partners we’ve worked with frequently recommend us to
              others thanks to our individual approach to tech problems
            </p>
          </div>

          <Marquee play={true} direction="left" speed={40} loop={0}>
            <div className="grid grid-cols-9 gap-5 items-center pt-8">
              <Partners image="allforcar" />
              <Partners image="fomino" />
              <Partners image="antrak" />
              <Partners image="truckxpress" />
              <Partners image="shippinghack" />
              <Partners image="express-ease" />
              <Partners image="havoc" />
              <Partners image="mussico" />
              <Partners image="pps" />
            </div>
          </Marquee>
        </section>

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              Crafting Custom Software Solutions
            </h2>
            <p className="text-black lg:text-xl">
              At Sigi Technologies, we accompany you through every stage of the
              software development life-cycle: from product discovery to
              deployment and post-release support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-8 md:pt-10 lg:pt-14">
            <SoftwareSolutions
              image="mobile-app"
              title="Mobile app development"
              description="Our mobile developers at Sigi Technologies implement well-proven agile practices and adopt a client-oriented approach to craft custom mobile apps. These apps are designed to showcase your brand identity, attract customers, and address everyday business challenges."
              stackOne="IOS app development"
              stackTwo="Android app development"
              stackThree="Flutter app development"
            />
            <SoftwareSolutions
              image="web-app"
              title="Web app development"
              description="At Sigi Technologies, our expertise in building web applications has been honed through collaborations with companies across diverse business models and industries, including FinTech and e-Commerce domains."
              stackOne="PWA development"
              stackTwo="Website and web app creation"
              stackThree="Responsive design"
            />
            <SoftwareSolutions
              image="ui-ux"
              title="UI/UX design"
              description="Our UI/UX design team at Sigi Technologies leverages expertise and creativity to materialize the product you envision. We adhere to established standards, utilize proven tools, and deeply comprehend your business goals throughout the design process."
              stackOne="Wireframing and prototyping"
              stackTwo="UX consulting"
              stackThree="Product design"
            />
            <SoftwareSolutions
              image="qa"
              title="QA services"
              description="At Sigi Technologies, we conduct manual and automated tests employing various approaches throughout the development life-cycle. Our goal is to eradicate issues and bugs, optimize performance, and refine business logic and design."
              stackOne="Software testing"
              stackTwo="Functional testing"
              stackThree="Non-functional testing"
            />
            <SoftwareSolutions
              image="devops"
              title="DevOps services"
              description="Integrate new code and features seamlessly into your products with our seasoned DevOps engineers at Sigi Technologies. We prioritize reducing time to market while upholding reliability, security, and compliance standards."
              stackOne="Cloud Infrastructure service"
              stackTwo="CI/CD services"
              stackThree="Cloud cost optimization"
            />
            <SoftwareSolutions
              image="staff"
              title="Staff augmentation"
              description="At Sigi Technologies, we offer staff augmentation services to bolster your team with skilled and seasoned professionals. Access our iOS, Android, and Web developers, DevOps and QA engineers, as well as UI/UX designers promptly to enhance your projects."
              stackOne="Dedicated team"
              stackTwo="Team augmentation"
              stackThree="Flexible cooperation"
            />
            <SoftwareSolutions
              image="startup"
              title="Startup services"
              description="For courageous startups seeking to validate their ideas, we specialize in bringing them to fruition. As a software engineering company, we possess extensive experience in developing MVP projects, facilitating a quicker time-to-market."
              stackOne="Discovery phase"
              stackTwo="MVP development"
              stackThree="CTO as a service"
            />
          </div>
        </section>

        <section className="bg-contactUs relative">
          <div className="before:absolute before:bg-heroBgOne before:bg-no-repeat before:bg-cover before:bg-center before:w-[200px] md:before:w-[400px] lg:before:w-[600px] before:h-full before:top-0 before:left-0"></div>
          <div className="before:absolute before:bg-heroBgTwo before:bg-no-repeat before:bg-cover before:bg-center before:w-[200px] md:before:w-[400px] lg:before:w-[600px] before:h-full before:top-0 before:right-0"></div>

          <div className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14 space-y-5 md:space-y-8">
            <div className="space-y-2 relative z-20">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center text-white">
                Got any tech challenges
              </h2>
              <p className="lg:text-xl text-center text-white">
                Schedule a meeting to get consultanted about the software
                development services you need.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="group relative h-12 w-40 overflow-hidden rounded-full bg-themeOrange md:text-lg shadow">
                <div className="absolute inset-0 w-0 bg-themeDarkOrange transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white font-medium group-hover:text-white">
                  Contact us
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14 space-y-5 md:space-y-10">
          <div className="space-y-2 relative z-20">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center">
              Our Development Process
            </h2>
            <p className="lg:text-xl text-center">
              At Sigi Technologies, we adhere to a well-defined Software
              Development Life Cycle (SDLC) to construct a cost-effective
              product tailored to meet your specific requirements and market
              demands.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-4">
            <DevelopmentProcess title="First contact" image="contact" />
            <DevelopmentProcess title="Discovery phase" image="discovery" />
            <DevelopmentProcess title="UI/UX design" image="uiux" />
            <DevelopmentProcess
              title="Development process"
              image="development"
            />
            <DevelopmentProcess title="Quality assurance" image="testing" />
            <DevelopmentProcess title="Launch" image="launch" />
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

        <section className="bg-contactUs relative">
          <div className="before:absolute before:bg-heroBgOne before:bg-no-repeat before:bg-cover before:bg-center before:w-[200px] md:before:w-[400px] lg:before:w-[600px] before:h-full before:top-0 before:left-0"></div>
          <div className="before:absolute before:bg-heroBgTwo before:bg-no-repeat before:bg-cover before:bg-center before:w-[200px] md:before:w-[400px] lg:before:w-[600px] before:h-full before:top-0 before:right-0"></div>

          <div className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-4 relative z-20">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
                  Make Your Vision a Reality
                </h2>
                <p className="lg:text-xl text-white">
                  At Sigi Technologies, we don&apos;t just create software.We bring
                  dreams to life. Let&apos;s bring yours to reality
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="category" className="text-white">
                    Choose <span className="font-semibold">category</span> of
                    your project:
                  </label>
                  <Select />
                </div>
                <div className="space-y-2">
                  <label htmlFor="category" className="text-white">
                    What are you{" "}
                    <span className="font-semibold">looking to do?</span>
                  </label>
                  <Select />
                </div>
                <div className="space-y-2">
                  <label htmlFor="category" className="text-white">
                    What are you <span className="font-semibold">Budget?</span>
                  </label>
                  <Select />
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
