import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Partners from "@/app/components/Partners";
import ServeCard from "@/app/components/ServeCard";
import TeamImages from "@/app/components/TeamImages";
import Values from "@/app/components/Values";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function page() {
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 relative z-20 w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-16">
            <div className="space-y-5">
              <h1 className="text-[34px] leading-snug md:text-[54px] text-white font-semibold">
                Who We Are
              </h1>

              <p className="text-lg md:text-xl text-white">
                Sigi Technologies is a global software engineering firm bringing
                together skilled and passionate developers, designers, analysts,
                and managers.
              </p>
              <p className="text-lg md:text-xl text-white">
                Our specialty lies in crafting custom software solutions
                meticulously designed to address specific business challenges.
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

            <div className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label htmlFor="nda" className="text-white text-sm font-medium">
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
        </section>

        <section className="bg-themeGray py-8 md:py-10 lg:py-14">
          <Marquee play={true} direction="left" speed={40} loop={0}>
            <div className="grid grid-cols-9 gap-5 items-center">
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

        <section className="w-5/6 lg:w-4/5 2xl:w-[77%] mx-auto py-8 md:py-10 lg:py-14">
          <div className="lg:flex justify-between space-y-6 lg:space-y-0">
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
              <p className="text-lg xl:text-xl font-medium">Achievements</p>
            </div>
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

        <section className="pt-8 md:pt-10 lg:pt-14">
          <div className="w-5/6 lg:w-4/5 2xl:w-[77%] mx-auto">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold capitalize">
                Our Mission
              </h2>
              <p className="text-black lg:text-xl">
                Drive Your Business Forward with Trusted Software Solutions,
                Backed by Our Proficiency in Leading Technologies and Industry
                Expertise.
              </p>
            </div>

            <div className="my-8 md:my-10">
              <Image src="/video.webp" alt="video" width={1000} height={500} />
            </div>
          </div>
          <div className="w-full h-[2px] bg-themeOrange"></div>
        </section>

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14 space-y-10">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold capitalize">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <Values
              title="Transparency & Accountability"
              description="Transparency, integrity, and continuous communication form the foundation of every project we undertake. We embrace challenges with honesty, taking ownership and fostering open dialogue to find solutions even in the most demanding circumstances."
              image="transparency"
            />
            <Values
              title="Customer Centricity"
              description="At Sigi Technologies, customer satisfaction is paramount in our business operations. We are committed to ensuring each project is successful and competitively advantageous, while remaining aligned with our customers' vision and preferences."
              image="customer"
            />
            <Values
              title="Innovation Creativity"
              description="At Sigi Technologies, we cherish creativity in all aspects of our work. Every technological challenge that lacks a conventional solution is an opportunity for our experts to devise innovative and effective resolutions."
              image="innovation"
            />
            <Values
              title="Talent Development"
              description="Talented and dedicated professionals who are passionate about what they are doing are Light IT Global’s greatest treasure. That’s why we invest in our employees’ professional development and overall well-being."
              image="talent"
            />
          </div>
        </section>

        <section className="bg-themeGray py-8 md:py-10 lg:py-14">
          <div className="w-5/6 lg:w-4/5 2xl:w-[77%] mx-auto">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold capitalize">
                Our Main Industries
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

        <section className="w-5/6 lg:w-4/5 2xl:w-[77%] mx-auto py-8 md:py-10 lg:py-14">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold capitalize">
              Awards & Recognitions
            </h2>
          </div>
          <div className="grid grid-cols-5 gap-3 pt-8 md:pt-10 lg:pt-14">
            <Image
              src="/Goodfirm.webp"
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

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14">
          <div className="">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold capitalize">
              Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-10 md:pt-14 lg:pt-20">
            <div className="space-y-3">
              <div className="bg-themeOrange w-full h-[280px] relative">
                <Image
                  src="/company/zeeshannawaz.webp"
                  alt="owner"
                  className="w-[210px] h-[320px] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
                />
              </div>
              <div>
                <h4 className="text-black font-switzer font-medium text-xl">
                  Zeeshan Nawaz
                </h4>
                <p className="text-paraText font-switzer uppercase">
                  Co-Founder & CEO
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-themeLightBlue w-full h-[280px] relative">
                <Image
                  src="/company/shahnawaz.webp"
                  alt="owner"
                  className="w-[270px] h-[320px] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
                />
              </div>
              <div>
                <h4 className="text-black font-switzer font-medium text-xl">
                  Shah Nawaz
                </h4>
                <p className="text-paraText font-switzer uppercase">
                  Co-Founder & CEO
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 pt-8 md:pt-10 lg:pt-14">
            <TeamImages imgSrc="/company/asad.webp" bg="bg-[#FFB09C]" />
            <TeamImages imgSrc="/company/arslan.webp" bg="bg-[#9BFFCF]" />
            <TeamImages imgSrc="/company/waqar.webp" bg="bg-[#93B5FF]" />
            <TeamImages imgSrc="/company/faisal.webp" bg="bg-[#FFC996]" />
            <TeamImages imgSrc="/company/hamza.webp" bg="bg-[#C2B8FF]" />
            <TeamImages imgSrc="/company/aqib.webp" bg="bg-[#A4F4FF]" />
            <TeamImages imgSrc="/company/danish.webp" bg="bg-[#A1F8AA]" />
            <TeamImages imgSrc="/company/iqra.webp" bg="bg-[#EFEB8A]" />
            <TeamImages imgSrc="/company/aqsa.webp" bg="bg-[#93B5FF]" />
            <TeamImages imgSrc="/company/abdullah.webp" bg="bg-[#EFEB8A]" />
            <TeamImages imgSrc="/company/ali.webp" bg="bg-[#FFB09C]" />
            <TeamImages imgSrc="/company/ayesha.webp" bg="bg-[#9BFFCF]" />
            <TeamImages imgSrc="/company/saira.webp" bg="bg-[#FFDCBA]" />
            <TeamImages imgSrc="/company/kiran.webp" bg="bg-[#FFB09C]" />
            <TeamImages imgSrc="/company/uzair.webp" bg="bg-[#9BFFCF]" />
            <TeamImages imgSrc="/company/tufail.webp" bg="bg-[#C2B8FF]" />
            <TeamImages imgSrc="/company/hamza-junior.webp" bg="bg-[#93B5FF]" />
            <TeamImages imgSrc="/company/zeeshan.webp" bg="bg-[#EFEB8A]" />
            <TeamImages imgSrc="/company/intahar.webp" bg="bg-[#FFC996]" />
            <TeamImages imgSrc="/company/waqar.webp" bg="bg-[#93B5FF]" />
            <TeamImages imgSrc="/company/arbab.webp" bg="bg-[#A4F4FF]" />
            <TeamImages imgSrc="/company/wajeeh.webp" bg="bg-[#C2B8FF]" />
            <TeamImages imgSrc="/company/sana.webp" bg="bg-[#EFEB8A]" />
            <TeamImages imgSrc="/company/ali-hamza.webp" bg="bg-[#A1F8AA]" />
          </div>
        </section>

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              Our Offices
            </h2>
            <p className="text-black lg:text-xl max-w-2xl mx-auto">
              With several offices in Pakistan, London, and beyond, you’re more
              than welcome to visit us at any convenient time and meet your team
              in person.
            </p>
          </div>

          <div>
            <Image
              src="/contact-us/offices.webp"
              alt="offices"
              width={1000}
              height={1000}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <div className="space-y-5">
              <Image
                src="/contact-us/pakistan.webp"
                alt="uk-flag"
                width={80}
                height={80}
              />

              <div>
                <h4 className="text-2xl md:text-3xl font-semibold">
                  Pakistan, lahore
                </h4>
                <p className="text-lg md:text-xl max-w-xs">
                  Sher Ali Road, Kiberia Town, Raiwind Road Lahore
                </p>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-medium">Phone</h4>
                <p className="text-lg md:text-xl">+923695201892</p>
              </div>
            </div>

            <div className="space-y-5">
              <Image
                src="/contact-us/uk-flag.webp"
                alt="uk-flag"
                width={80}
                height={80}
                className="rounded-lg"
              />

              <div>
                <h4 className="text-2xl md:text-3xl font-semibold">
                  London, UK
                </h4>
                <p className="text-lg md:text-xl max-w-xs">
                  Sher Ali Road, Kiberia Town, Raiwind Road Lahore
                </p>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-medium">Phone</h4>
                <p className="text-lg md:text-xl">+4423695201892</p>
              </div>
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
