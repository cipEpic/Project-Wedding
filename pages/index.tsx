import Head from "next/head";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import isClientReady from "@/lib/isClientReady";
import { FaAngleRight } from "react-icons/fa";

//Video
//Image
import changi from "@/public/assets/home/changi-airport.png";
import linered from "@/public/assets/home/linered.png";
import security from "@/public/assets/home/Security-Character-purple1.svg";
import maintenancesoftwaregreen from "@/public/assets/home/Maintenance-Software-green.png";
import iconcheckred from "@/public/assets/home/Vectored.png";
import iconcheckpurple from "@/public/assets/home/iconcheck-purple.png";
import iconcheckgreen from "@/public/assets/home/iconcheck-green.png";
import iconcheckblue from "@/public/assets/home/iconcheck-blue.png";
import Checklistblue from "@/public/assets/home/Checklist-blue.png";
import ContactHero from "@/public/assets/home/contact-bg.png";
import HeroImage from "@/public/assets/home/hero-contentt.png";
import MapSlogan from "@/public/assets/home/map-slogan.png";
import SloganPhone from "@/public/assets/home/slogan-phone-left.png";
import PartnerInfineon from "@/public/assets/home/infenion-logo1.png";
import PartnerFleetManagement from "@/public/assets/home/fm-logo.png";
import PartnerGF from "@/public/assets/home/gf-logo.jpeg";
import PartnerDTE from "@/public/assets/home/dte-logo.png";
import PartnerJP from "@/public/assets/home/jp-logo.png";
import PartnerMicron from "@/public/assets/home/micron-logo.png";
import PartnerPSA from "@/public/assets/home/psa-logo.jpeg";
import PartnerZoo from "@/public/assets/home/zoo-logo.png";
import PartnerSSC from "@/public/assets/home/ssc-logo.png";
import PartnerTwin from "@/public/assets/home/twinvew-logo.png";
import Partner3M from "@/public/assets/home/3m-logo.png";
import PartnerMSD from "@/public/assets/home/msd-logo.png";
import PartnerPioneer from "@/public/assets/home/pioneer-logo.png";
import PartnerBPRS from "@/public/assets/home/bprs-logo.png";
import PartnerHIS from "@/public/assets/home/his-logo.webp";
import PartnerPLS from "@/public/assets/home/pls-logo.png";
import PartnerWS from "@/public/assets/home/ws-logo.png";
import PartnerDW from "@/public/assets/home/dw-logo-2.png";
import PartnerSAIS from "@/public/assets/home/sais-logo.png";
import PartnerIFS from "@/public/assets/home/ifs-logo.png";
// import Feature1 from "@/public/assets/home/feature-1.png";
// import Feature2 from "@/public/assets/home/feature-2.png";
// import Feature3 from "@/public/assets/home/feature-3.jpg";
// import Wave from "@/public/assets/home/wave.svg";

//Components
import Body from "@/components/Body";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
// import Partner from "@/components/Home/Partner";
// import Feature from "@/components/Feature";
// import PartnerSlider from "@/components/Home/PartnerSlider";
// import { SwiperSlide } from "swiper/react";
// import MarginBorder from "@/components/MarginBorder";

export default function Home() {
  const heroText = ["Easier", "Faster", "Better"];

  let [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (!isClientReady) return;
    let interval = setInterval(() => setTextIndex((i) => i + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <Meta />
        <meta
          name="google-site-verification"
          content="0mpLFCflX5eoinzJeEOw4x9ojyviSgQ_aTMcF3qwU84"
        />
        <title>Plotigo - Home</title>
      </Head>
      <Body>
        <Navbar home={true} />

        {/* HERO SECTION */}
        <div
          data-cy="hero"
          id="hero"
          className="relative min-h-screen flex justify-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-bg"
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "100vh",
              objectFit: "cover",
            }}
          >
            <source src="/assets/home/hero-bg-fhd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="container flex items-center md:px-20  h-screen absolute  phone:justify-start phone:pt-0 phone:top-0 padding top-10">
            <div className="content flex flex-col justify-start phone:w-full  gap-7 w-1/2   aspect-video rounded-md bg-opacity-20">
              <h1 className="drop-shadow-[0_0_.1rem_rgb(0_0_0)] header-title  text-white rounded-md  leading-[4rem]">
                Make Your Business{" "}
                <span className="text-accent-400 phone:text-accent-400">
                  <TextTransition inline springConfig={presets.stiff}>
                    {heroText[textIndex % heroText.length]}
                  </TextTransition>
                </span>
              </h1>
              <p className="text-white rounded-md header-text  drop-shadow-[0_0_.1rem_rgb(0_0_0)] pb-4">
                Join businesses of all sizes and industries who have boosted
                productivity with Plotigo&apos;s innovative software solutions,
                streamlining operations successfully.
              </p>

              <div className="btns flex gap-4 phone:flex-wrap ">
                <Link
                  href="/about"
                  className="btnss px-4 py-2 phone:text-sm rounded-[10px] hover:gap-3 select-none shadow-lg backdrop-blur-sm text-base transition-all duration-300
                             w-max hover:opacity-75 underline-offset-2 text-white bg-[#DC0032] flex items-center md:px-6 gap-4"
                >
                  Learn More <FaAngleRight />
                </Link>
                <Link
                  href="/contact"
                  className="btnss px-4 py-2 phone:text-sm  justify-center outline outline-offset-12 outline-10 hover:gap-3 select-none shadow-lg text-base transition-all
                            duration-300 w-max hover:opacity-75 underline-offset-1 text-[#DC0032] bg-transparent flex items-center md:px-6 gap-2 rounded-[10px]"
                >
                  Contact us <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <main>
          {/* SLOGAN SECTION */}
          <div
            id="slogan"
            className="h-screen flex flex-col justify-center items-center bg-[#F6F9FC] drop-shadow-md"
          >
            <Section>
              <div className="wrapper flex flex-col md:flex-row justify-center items-center relative gap-5 pb-[4rem] px-4 md:px-0 top-10">
                <div
                  data-cy="slogan-content"
                  className="content w-full md:w-1/2 text-center md:text-left md:pl-16"
                >
                  <h1 className="text-[#0A2540] font-black  md:leading-[5rem] type-head-1">
                    <span className="headingss inline-block md:leading-10 lg:leading-normal md:text-center lg:text-left md:ml-0">
                      Smoothing your journey with Plotigo
                    </span>
                  </h1>
                  <div className="wrapper type-body-base">
                    <p className="text-[#555] mt-8  ml-[-4rem] header-textt">
                      Rich experience in transportation industry. Tailored
                      solutions for unique challenges. Cutting-edge technology
                      for smoother operations.
                    </p>
                  </div>
                  <div className="phone:flex justify-center ml-[-3rem] phone:mx-auto">
                    <Button
                      type="anchor"
                      href="/about"
                      title="Learn More"
                      className="btnsss ml-[-1.2rem] mt-8 px-4 py-2 phone:text-sm rounded-[10px] hover:gap-3 select-none shadow-lg backdrop-blur-sm text-base transition-all duration-300 w-max hover:opacity-75 underline-offset-2 text-white bg-accent flex items-center md:px-6 gap-2  "
                    >
                      Learn more
                      <FaAngleRight />
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div className="hero-image-wrapper">
                    <Image
                      data-cy="hero-image"
                      loading="lazy"
                      src={HeroImage}
                      alt="Hero Image"
                      className="phoneimages w-[80%] h-auto object-cover object-center rounded-xl"
                      style={{ right: "0", maxHeight: "150vh" }}
                    />
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* FEATURES SECTION */}
          <div data-cy="feature" id="features" className="bg-white py-20 z-10">
            <Section
              className="py-1"
              title="What can we do "
              subtitle="Gather all you needs, provide the simplest guide for you to process your business"
            >
              <div className="selection-feat">
                <Image
                  className="selection-feat-img"
                  alt={"Checklist blue"}
                  src={Checklistblue}
                />{" "}
                <div className="selection-feat-content">
                  <div className="selection-title-2">
                    Evaluation and Selection
                  </div>
                  <div className="selection-checklist">
                    <div className="selection-list">
                      <Image
                        className="selection-img-"
                        alt={"Iconcheck blue"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        Evaluate current software
                      </div>{" "}
                    </div>
                    <div className="selection-list">
                      <Image
                        className="selection-img-"
                        alt={"Iconcheck blue"}
                        src={iconcheckred}
                      />
                      <p className="selection-text-wrapper-2">
                        Compare existing solution in market
                      </p>{" "}
                    </div>
                    <div className="selection-list">
                      <Image
                        className="selection-img-"
                        alt={"Iconcheck blue"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        Determine the best solution
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="selection-feat">
                <div className="selection-feat-content w-3/6 gap-4">
                  <div className="selection-title-2">
                    Implementation and Maintenance
                  </div>
                  <div className="selection-checklist">
                    <div className="selection-list">
                      <Image
                        className="selection-img-2"
                        alt={"Iconcheck green"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        Data migration
                      </div>
                    </div>
                    <div className="selection-list">
                      <Image
                        className="selection-img-2"
                        alt={"Iconcheck green"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        User training
                      </div>
                    </div>
                    <div className="selection-list">
                      <Image
                        className="selection-img-2"
                        alt={"Iconcheck green"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        Monitoring performance
                      </div>
                    </div>
                    <div className="selection-list">
                      <Image
                        className="selection-img-2"
                        alt={"Iconcheck green"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        Collect user feedback
                      </div>
                    </div>
                    <div className="selection-list">
                      <Image
                        className="selection-img-2"
                        alt={"Iconcheck green"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        Optimize software solutions
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  className="selection-feat-img"
                  alt={"Maintenance software green"}
                  src={maintenancesoftwaregreen}
                />
              </div>

              <div className="selection-feat">
                <Image
                  className="selection-feat-img"
                  alt={"Security character purple"}
                  src={security}
                />
                <div className="selection-feat-content">
                  <div className="selection-title-2">Security</div>
                  <div className="selection-checklist">
                    <div className="selection-list">
                      <Image
                        className="selection-img-3"
                        alt={"Iconcheck purple"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        Data encryption
                      </div>
                    </div>
                    <div className="selection-list">
                      <Image
                        className="selection-img-3"
                        alt={"Iconcheck purple"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        Access control
                      </div>
                    </div>
                    <div className="selection-list">
                      <Image
                        className="selection-img-3"
                        alt={"Iconcheck purple"}
                        src={iconcheckred}
                      />
                      <div className="selection-text-wrapper-2">
                        Disaster recovery plans
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* PARTNER SECTION */}

          <div
            id="partner"
            className="pt-12 pb-6 mb-8 bg-[#F6F9FC]"
            data-cy="partner"
          >
            <Section
              title="Proven track record"
              subtitle="Clients benefit from Plotigo's innovative and effective numerical solutions."
            >
              <div
                data-cy="partner-list"
                className="grid grid-flow-col grid-rows-3 gap-2 gap-partner-list sm-phone:pb-[1rem] sm-phone:grid-rows-3"
              >
                <div className="flex items-center md:px-6 z-10">
                  <Image
                    src={PartnerFleetManagement}
                    alt="Partner Fleet Management"
                  />
                </div>
                <div className="flex items-center md:px-6 z-10">
                  <Image src={PartnerDTE} alt="Downtown East CMS" />
                </div>
                <div className="flex items-center md:px-1 z-10">
                  <Image src={PartnerGF} alt="Partner GF" />
                </div>

                <div className="flex items-center md:px-1 z-10">
                  <Image src={changi} alt="Changi AIrport" />
                </div>

                <div className="flex items-center md:px-1 md:h-12 z-10">
                  <Image src={PartnerJP} alt="Partner JP" />
                </div>

                <div className="flex items-center md:px-1 z-10">
                  <Image src={PartnerMicron} alt="Partner Micron" />
                </div>
                <div className="flex items-center md:px-1 z-10">
                  <Image src={PartnerPSA} alt="Partner PSA" />
                </div>
                <div className="flex items-center md:px-1 z-10">
                  <Image src={PartnerZoo} alt="Partner Zoo" />
                </div>
                <div className="flex items-center md:px-1 z-10">
                  <Image src={PartnerInfineon} alt="Partner Infineon" />
                </div>
                <div className="flex items-center md:px-1 md:pl-[3rem]  z-10">
                  <Image src={PartnerSSC} alt="Partner SSC" />
                </div>
                <div className="flex items-center md:px-1 md:pl-[2rem] z-10">
                  <Image src={PartnerTwin} alt="Partner Twin" />
                </div>
                <div className="flex items-center md:px-1 md:pl-[2rem]  z-10">
                  <Image src={Partner3M} alt="Partner 3M" />
                </div>
                <div className="flex items-center md:px-1 md:pl-[1rem]  z-10">
                  <Image src={PartnerMSD} alt="Partner MSD" />
                </div>
                <div className="flex items-center md:px-1 md:pl-[3rem] z-10">
                  <Image src={PartnerPioneer} alt="Partner Pioneer" />
                </div>
                <div className="flex items-center md:px-1 z-10">
                  <Image src={PartnerBPRS} alt="Partner BPRS" />
                </div>
                <div className="flex items-center md:px-1 z-10">
                  <Image src={PartnerPLS} alt="Partner PLS" />
                </div>
                <div className="flex items-center md:px-1 z-10">
                  <Image src={PartnerHIS} alt="Partner HIS" />
                </div>
                <div className="flex items-center md:px-1 z-10">
                  <Image src={PartnerWS} alt="Partner WS" />
                </div>

                <div className="flex items-center md:px-1 md:pl-[2rem] z-10">
                  <Image src={PartnerDW} alt="Partner DW" />
                </div>
                <div className="flex items-center md:px-1 md:pl-[5rem] md:h-[4rem] z-10">
                  <Image src={PartnerIFS} alt="Partner IFS" />
                </div>
                <div className="flex items-center md:px-1 md:pl-[3rem] z-10">
                  <Image src={PartnerSAIS} alt="Partner SAIS" />
                </div>
              </div>
            </Section>
          </div>

          {/* OUR WORK SECTION */}
          <div
            data-cy="hero"
            id="hero"
            className="relative min-h-screen flex justify-center"
          >
            <Image
              loading="lazy"
              src={ContactHero}
              alt=""
              className="object-cover object-center scale-[1.4] h-full relative object-no-repeat pt-[4rem] pbb"
              style={{ filter: "brightness(0.6)" }}
            />

            <div className="container h-full flex items-center md:px-20 absolute  gap-[3rem] phone:justify-start phone:pt-0">
              <div className="content flex flex-col justify-start phone:w-full gap-9 w-1/2  aspect-video rounded-md bg-opacity-20 py-[8rem]">
                <div className="selection-list">
                  <Image
                    className="imagesred"
                    alt={"Iconcheck purple"}
                    src={linered}
                  />
                  <h1 className="header-title drop-shadow-[0_0_.1rem_rgb(0_0_0)] text-white rounded-md">
                    Check our works
                  </h1>
                </div>

                <p className="text-white rounded-md header-text  animate-delayed drop-shadow-[0_0_.1rem_rgb(0_0_0)]">
                  Explore our impressive portfolio of software solutions and
                  witness the expertise and innovation we bring to each project.
                </p>

                <div className="btns flex gap-2 phone:flex-wrap animate-delayedd">
                  <Link
                    href="/case-study"
                    className="btnssss px-0 py-2 phone:text-sm  justify-center outline outline-offset-2 outline-2 hover:gap-3 select-none shadow-lg text-base transition-all
                            duration-300 w-max hover:opacity-75 underline-offset-2 text-[#CE0000] bg-transparent flex items-center md:px-6 gap-2 rounded-[10px]"
                  >
                    Learn more <FaAngleRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Body>
    </>
  );
}
