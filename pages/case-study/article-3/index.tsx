import Head from "next/head";
import Image from "next/image";

//Components
import Body from "@/components/Body";
import { config } from "./__config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import TemplateCaseStudy from "@/components/CaseStudy/Template";
import Section from "@/components/Section";
import SectionCaseContact from "@/components/SectionCaseContact";
import ChallengeCard from "@/components/CaseStudy/CardChallenge";
import SolutionCard from "@/components/CaseStudy/CardSolution";
import Challenge from "@/components/CaseStudy/Challenge";
import ChallengeSlider from "@/components/CaseStudy/ChallengeSlider";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import Section1 from "@/components/Section1";

import review3 from "@/public/assets/case-study/review3.png";
import contact from "@/public/assets/case-study/Contact.png";
import potential from "@/public/assets/case-study/potential.png";
import { V1, V2, V3, V4, V5, V6, BG02, BG03, BG04, BG05, BG06, BG07, checkB, checkBD, checkP, keyP1, keyP2, keyP3 } from "@/components/CaseStudy/SVG";
import ch01 from "@/public/assets/case-study/ch07.png";
import ch02 from "@/public/assets/case-study/ch08.png";
import ch03 from "@/public/assets/case-study/ch09.png";
import Scope from "@/components/CaseStudy/Scope";
import Potential from "@/components/CaseStudy/potential";

export default function CaseStudy() {
    return (
        <>
            <Head>
                <Meta />
                <title>Case Study - Article 3</title>
            </Head>
            <Body>
                <Navbar />
                <main>
                    {/* Header Section */}
                    <div data-cy="header" id="header" className="pt-40 relative isolate h-auto phone:pt-0 bg-[#F1E3FF]">
                        <Section className="pt-10 pb-[160px] z-10 h-auto phone:pb-[60px]">

                            <div
                                data-cy="Tech"
                                className="absolute overflow-hidden right-0 top-0 w-[100%] h-[100%] z-[-1] phone:hidden"
                            ></div>
                            <div className="wraper1 flex w-full relative isolate items-center tablet:pt-[0px] tablet:pb-[0px] phone:flex-col phone:gap-6 phone:flex-col-reverse">
                                <div className="w-1/3 relative flex phone:flex-col justify-between gap-6 items-center phone:w-full">

                                    <div className="content w-full phone:w-full flex flex-col justify-center phone:text-center gap-4 pb-12 phone:pb-0">
                                        <div className="text flex flex-col">
                                            <h1 className="type-head-5 font-semibold text-[25px] text-[#858585] phone:type-head-2 phone:text-[18px] tracking-wide pb-[32px] phone:pb-[16px]">
                                                Case Study
                                            </h1>

                                            <h1 className="type-head-2 font-bold text-[#890084] text-[35px] phone:type-head-2 phone:text-[20px] ">
                                                Convenient  <span style={{ color: "#0A2540" }}> Airport </span> Shuttle Service
                                            </h1>
                                        </div>

                                        <div className="type-head-4 text-[22px] text__group flex flex-col gap-3 mt-2 phone:mt-0 ml-1 phone:text-[15px] phone:text-center text-[#233B53] font-medium ">
                                            <p className="content">Elevate Your Airport Experience with Cutting-Edge Mobility Solutions for Seamless and Stress-Free Transfers!</p>
                                        </div>
                                    </div>
                                </div>
                                <Image src={review3} alt="" className="w-[648px] h-auto phone:w-full" />
                            </div>
                        </Section>
                    </div>

                    {/* Challenge Section */}

                    <div data-cy="values" id="values" className="relative min-h-[25rem] pb-2 z-10">

                        <Section title="" subtitle="" className="py-[0px] pt-[50px] bg-white phone:pt-[25px]">
                            <div className="pl-[150px] pr-[150px] phone:pl-0 phone:pr-0">
                                <div className="text flex flex-col text-center">
                                    <h1 className="type-head-3 text-[35px] font-bold text-[#09213A] phone:type-head-2 phone:text-[20px]">
                                        Challenge
                                    </h1>
                                </div>

                                <div>
                                    <div className="text flex flex-col text-center pt-8 phone:pt-4">
                                        <h1 className="type-head-5 font-medium text-[#0A2540] phone:type-head-5 phone:text-[15px]">
                                            The airport party faced significant challenges in managing their services efficiently. Manual booking processes were <span style={{ color: "#890084" }}>time-consuming</span> and <span style={{ color: "#890084" }}>prone to errors</span>, hindering their ability to handle a <span style={{ color: "#890084" }}>large volume of bookings</span> effectively. Moreover, the absence of a 24-hour online presence limited potential customers from making <span style={{ color: "#890084" }}>bookings outside regular business hours</span>, restricting revenue opportunities. Additionally, the lack of a centralized system made it difficult for administrators to track and analyze <span style={{ color: "#890084" }}>booking statistics</span>, hampering their decision-making process and service optimization efforts.
                                        </h1>
                                    </div>
                                </div>

                                {/* list challenge */}




                            </div>

                        </Section>
                    </div>

                    {/* new challenger slider */}
                    <div id="proven" className="pt-0 pb-0" data-cy="proven">
                        <Section1 title="" subtitle="">
                            <div data-cy="partner-list" className="wrapper flex flex-col w-full  gap-12">
                                <ChallengeSlider id="normal">
                                    <SwiperSlide>
                                        <Challenge title="Fleet Management V2" src={ch01} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Challenge title="Downtown East CMS" src={ch02} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Challenge title="Global Foundries CMS" src={ch03} />
                                    </SwiperSlide>
                                </ChallengeSlider>
                            </div>
                        </Section1>
                    </div>

                    {/* Unlock Potential section */}

                    <div data-cy="values" id="values" className="relative min-h-[15rem] pb-1 z-10 phone:pb-3">

                        <Section title="" subtitle="" className="pt-[0rem] bg-white">
                            <div className="">

                                <div className="w-full text flex flex-row text-left phone:flex-col">
                                    <h1 className="w-[395px] text-[35px] type-head-3 font-bold text-[#09213A] phone:type-head-2 phone:text-[20px] phone:text-center phone:w-full">
                                        Unlock<span style={{ color: "#890084" }}> Potential </span>
                                    </h1>

                                    <div className="blue-line-container phone:ml-0 ml-auto text-right">
                                        <hr className="purple-line" />
                                        <h1 className="type-head-3 w-full text-[16px] font-bold text-[#858585] phone:type-head-2 phone:text-[15px] phone:text-left phone:ml-4">
                                            Stress-Free Travel Made Simple
                                        </h1>
                                    </div>
                                </div>

                                <div className="w-1/2 phone:w-full">
                                    <div>
                                        <div className="text flex flex-col text-left pt-8 phone:pt-4">
                                            <h1 className=" type-head-5 font-medium text-[#0A2540] phone:type-head-5 phone:text-[15px] phone:text-center">
                                                Plotigo provided a comprehensive web application solution that addressed the challenges faced by the airport party, unlocking its potential for efficient service management.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Section>
                    </div>


                    {/* Key feature Delivered section */}
                    <div data-cy="scope" id="scope" className="pt-40 relative isolate h-auto phone:pt-0 bg-[#F1E3FF] tablet:pt-20">
                        <Section className="pb-[80px] z-10 h-auto phone:pb-[60px] tablet:pb-[40px]">

                            <div className="wrapper1 flex w-full relative isolate items-center tablet:pt-[0px] tablet:pb-[0px] phone:flex-col phone:gap-12 phone:flex-col-reverse">
                                <div className="w-full relative flex phone:flex-col justify-between gap-6 items-center phone:w-full ">

                                    <div className="content w-full phone:w-full flex flex-col justify-center phone:text-center gap-4 pb-12 phone:pb-0">
                                        <div className="text flex flex-col mt-[20px] phone:mt-0 w-1/2 phone:w-full tablet:w-full tablet:mt-0">
                                            <h1 className="type-head-2 font-bold text-[#890084] phone:type-head-2 phone:text-[20px] ">
                                                Key Featured <span style={{ color: "#0A2540" }}>Delivered</span>
                                            </h1>
                                        </div>

                                        <div className="flex flex-col gap-4 tablet:gap-4 phone:grid-cols-[repeat(auto-fit,minmax(15rem,20rem))] tablet:grid-cols-2 grid-cols-3 mt-[10px] phone:mt-0 mb-[60px] phone:mt-[20px] phone:mb-[-10px]">

                                            <Scope alt="number" src={checkP} title="User-Friendly Booking Interface" text="Intuitive interface for seamless bookings, enhancing user experience" />
                                            <Scope alt="number" src={checkP} title="24-Hour Website Hosting" text="Continuous accessibility for round-the-clock bookings, maximizing revenue and satisfaction." />
                                            <Scope alt="number" src={checkP} title="Comprehensive Administrative Dashboard" text="Centralized system for efficient booking management and data-driven decision-making" />
                                        </div>
                                    </div>
                                </div>
                                <Image src={keyP3} alt="" className="w-[500px] h-auto phone:w-[250px] phone:mt-[20px]" />
                            </div>
                        </Section>
                    </div>


                    {/* potential section */}

                    <Section className="relative h-auto flex items-center z-10 overflow-y-hidden pt-[200px] pb-[200px] phone:pt-[50px] phone:pb-[50px] " title=""
                        subtitle="">

                        <Potential text="By unlocking the potential of web application solution, Plotigo transformed the airport party's service management process. This resulted in streamlined booking processes, extended customer reach, improved revenue opportunities, and enhanced data-driven decision-making." />


                        <div className="hero__image absolute w-[100%] h-[100%] right-0 top-0 bottom-0 z-[-1] object-cover">
                            <Image
                                src={potential}
                                alt=""
                                loading="lazy"
                                data-cy="hero-background"
                                className="w-full h-full object-cover phone:object-center tablet:object-center"
                            // style={{ objectPosition: '100% center' }}
                            />
                        </div>


                    </Section>


                    {/* contact section */}
                    <div data-cy="header" id="header" className="relative min-h-screen flex pb-0 z-10">
                        <SectionCaseContact className="relative h-auto flex items-center z-10 overflow-y-hidden " title="Build Your Software In Plotigo’s House" dark
                            subtitle="">
                            <div className="btns flex gap-2 phone:flex-wrap animate-delayedd">
                                <Link
                                    href="/contact"
                                    className="red-button px-4 py-2 phone:text-sm justify-center hover:gap-3 select-none text-base transition-all duration-300 w-max hover:opacity-75 underline-offset-2 bg-transparent flex items-center md:px-6 gap-2 rounded-[10px]"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            <div className="hero__image absolute w-[100%] h-[100%] right-0 top-0 bottom-0 z-[-1] object-cover">

                                <Image src={contact} alt="" loading="lazy" data-cy="hero-background" className="w-full h-full object-cover phone:object-center phone:object-center"
                                    style={{ objectPosition: '100% center' }} />
                            </div>
                            <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))`, zIndex: -1 }}></div>

                        </SectionCaseContact>
                    </div>
                    {/* <TemplateCaseStudy {...config} /> */}
                </main>
                <Footer />
            </Body>
        </>
    );
}
