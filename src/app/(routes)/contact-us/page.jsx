import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 relative z-20 w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-20">
            <div className="space-y-3">
              <h1 className="text-[34px] leading-snug md:text-[54px] text-white font-semibold md:max-w-sm">
                Tell us about your project
              </h1>

              <p className="text-lg md:text-xl text-white md:max-w-md">
                We’ll contact you within a couple of hours to schedule a meeting
                to discuss your goals.
              </p>
            </div>

            <div className="space-y-6">
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

        <section className="w-11/12 lg:w-5/6 mx-auto py-8 md:py-10 lg:py-14">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
              Connect with our Team
            </h2>
            <p className="text-black lg:text-xl">
              Let’s communicate Don’t hesitate to contact us with your projects,
              ideas, and questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8 md:pt-10 lg:pt -14">
            <div className="space-y-2">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                  Have a good idea?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-themeBlue font-medium">
                  Sales@Sigitechnologies.com
                </p>
              </div>
              <div className="text-sm md:text-base lg:text-lg">
                Tell us more about your business idea to get consulted
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                  Got questions to ask?
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-themeBlue font-medium">
                  info@Sigitechnologies.com
                </p>
              </div>
              <div className="text-sm md:text-base lg:text-lg">
                Discuss your project with us. we’re open to question
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
                  We are hiring!
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-themeBlue font-medium">
                  hr@Sigitechnologies.com
                </p>
              </div>
              <div className="text-sm md:text-base lg:text-lg">
                We do more for your career. Come and join us.
              </div>
            </div>
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

        <Footer />
      </main>
    </ChakraProvider>
  );
}
