import Head from "next/head";
import Image from "next/image";
import BusSVG from "@/public/assets/case-study/bus-stop.png";
// import CS1 from "@/public/assets/case-study/case-1.png";
// import CS2 from "@/public/assets/case-study/case-2.png";
import HC from "@/public/assets/case-study/hp-full.png";
import Phone from "@/public/assets/case-study/phone-1.png";
import HeaderWave from "@/public/assets/case-study/wave.svg";
import Person from "@/public/assets/case-study/Person1.png";
import Ex1 from "@/public/assets/case-study/Ex1.png";
import isClientReady from "@/lib/isClientReady";
import HeaderBg from "@/public/assets/case-study/Bg-Header.png";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import CS1 from "@/public/assets/case-study/case1.png";
import CS2 from "@/public/assets/case-study/case2.png";
import CS3 from "@/public/assets/case-study/case3.png";


//Components
import Filter from "@/components/CaseStudy/Filter";
import FilterItem from "@/components/CaseStudy/Filter/FilterItem";
import Body from "@/components/Body";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Skeleton from "@/components/Skeleton";
import Section from "@/components/Section";
import SectionCase from "@/components/SectionCase";
import CardStudy from "@/components/CaseStudy/CardStudy";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import {
  Dots,
  FadedDots,
  RFadedDots,
  Triangle,
  Circle,
} from "@/components/Decorations/SVG";
import { BGH1, BGH2, BGH3, BGH3U, HRBUS } from "@/components/CaseStudy/Template/Svg";
import { useState, useEffect, useRef } from "react";
import Slo from "@/components/CaseStudy/CaseStudyCard";



export default function CaseStudy() {
  return (
    <>
      <Head>
        <Meta />
        <title>Plotigo - Case Study</title>
      </Head>
      <Body>
        <Navbar />
        <main>
          <div data-cy="header" id="header" className="relative min-h-screen flex pb-12 z-10">
            <Section className="relative h-auto flex items-center z-10 overflow-y-hidden shadow-lg1">
              <div className="hero__image absolute w-[100%] h-[100%] right-0 top-0 bottom-0 z-[-1] object-cover">
                {/* <Image src={BG07} alt="" loading="lazy" data-cy="hero-background" className="w-[100%] h-full object-cover phone:mr-auto" /> */}

                <Image src={HeaderBg} alt="" loading="lazy" data-cy="hero-background" className="w-full h-full object-cover phone:object-center phone:object-center"
                  style={{ objectPosition: '75% center' }} />
              </div>
              <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))`, zIndex: -1 }}></div>
              <div className="flex w-full">
                <div className="relative h-[90%]   isolate flex items-center  tablet:pt-[0px] tablet:pb-[0px] phone:flex-col phone:gap-6">
                  <div className="content w-[53%] flex flex-col justify-center gap-[15px] phone:w-full phone:gap-[10px]">
                    <div className="text flex flex-col">
                      <h1 className="type-head-1 font-extrabold text-cs-dark phone:text-center" style={{ color: "#FFFFFF" }}>
                        Case <span style={{ color: "#DC0032" }}>Study</span>
                      </h1>
                    </div>

                    <div className="type-head-5 text__group flex flex-col gap-3 mt-2 ml-1 phone:text-center" style={{ color: "#FFFFFF" }}>
                      <p className="content w-1/2 phone:w-full">While our roots are in transportation, we have expanded our focus to include various industries, and we remain committed to developing software solutions that empower our clients to achieve their goals.</p>
                    </div>
                  </div>

                </div>
              </div>
            </Section>
          </div>


          {/* Case study Section */}
          <div data-cy="Slogan" id="slogan" className="pb-12">
            <Section
              className=""
              title="Our works"
              subtitle="See the works we have done."
            >
              <div className="content text-black wrapper grid justify-center flex-wrap items-center gap-16 phone:gap-8 ">
                <Slo
                  src={CS1}
                  alt="icon"
                  title="Reliable Employee Transportation"
                  text="Revolutionize Employee Commutes with Next-Generation Mobility for Unparalleled Convenience and Productivity!"
                  buttonLabel="View Case Study ->"
                  onClick={() => {
                    // Handle the button click event here
                    window.location.href = "/case-study/article-1"

                  }}
                />
                <Slo
                  src={CS2}
                  alt="icon"
                  title="Safe School Bus Transportation"
                  text="Redefining School Bus Transportation with Advanced Mobility Solutions for Safer and Smoother Journeys!"
                  buttonLabel="View Case Study ->"
                  onClick={() => {
                    // Handle the button click event here
                    window.location.href = "/case-study/article-2"
                  }}
                />
                <Slo
                  src={CS3}
                  alt="icon"
                  title="Convenient Airport Shuttle Service"
                  text="Elevate Your Airport Experience with Cutting-Edge Mobility Solutions for Seamless and Stress-Free Transfers!"
                  buttonLabel="View Case Study ->"
                  onClick={() => {
                    // Handle the button click event here                
                    window.location.href = "/case-study/article-3"
                  }}
                />
              </div>

            </Section>
          </div>


          {/* Case study Section */}
          <div data-cy="Slogan" id="slogan" className="bg-[#F6F9FC]">
            <SectionCase
              className="flex flex-col justify-start phone:w-full gap-9 rounded-md bg-opacity-20 py-[16rem]"
              title="Create Digital Future!"
              subtitle="Contact us and let’s build something special together!"
            >


              <div className="btns flex gap-2 phone:flex-wrap animate-delayedd justify-center">
                <Link
                  href="/contact"
                  className="red-button px-4 py-2 phone:text-sm justify-centerhover:gap-3 select-none shadow-lg text-base transition-all duration-300 w-max hover:opacity-75 underline-offset-2 bg-transparent flex items-center md:px-6 gap-2 rounded-[10px]"
                >
                  Connect With Plotigo!
                </Link>
              </div>

            </SectionCase>
          </div>
        </main>
        <Footer />
      </Body>
    </>
  );
}
