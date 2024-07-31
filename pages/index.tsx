import Head from "next/head";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import isClientReady from "@/lib/isClientReady";
import { FaAngleRight } from "react-icons/fa";

//Image
import HeroImage from "@/public/assets/home/hero-content.png";
import MapSlogan from "@/public/assets/home/map-slogan.png";
import SloganPhone from "@/public/assets/home/slogan-phone-left.png";
import PartnerInfineon from "@/public/assets/home/infineon-logo.svg";
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
import PartnerDW from "@/public/assets/home/dw-logo.svg";
import PartnerSAIS from "@/public/assets/home/sais-logo.png";
import PartnerIFS from "@/public/assets/home/ifs-logo.webp";
import Feature1 from "@/public/assets/home/feature-1.png";
import Feature2 from "@/public/assets/home/feature-2.png";
import Feature3 from "@/public/assets/home/feature-3.jpg";
import Wave from "@/public/assets/home/wave.svg";

//Components
import Body from "@/components/Body";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Partner from "@/components/Home/Partner";
import Feature from "@/components/Feature";
import PartnerSlider from "@/components/Home/PartnerSlider";
import { SwiperSlide } from "swiper/react";
import MarginBorder from "@/components/MarginBorder";

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
                <title>Plotigo - Home</title>
            </Head>
            <Body>
                <Navbar home={true} />

                <main>
                    {/* HERO SECTION */}
                    <div data-cy="hero" id="hero" className="relative min-h-[40rem] flex justify-center">
                        <Image src={Wave} data-cy="hero-bg" fill className="absolute !h-[28rem] hero__bg object-bottom phone:w-auto phone:!h-[17rem] pointer-events-none" alt="" />
                        <div className="container h-full justify-start flex absolute phone:flex-col items-start gap-[3rem] phone:justify-start phone:pt-0">
                            <div className="content flex flex-col justify-start phone:w-full pt-20 gap-12 w-1/2 translate-y-[7rem] phone:translate-y-0 aspect-video rounded-md bg-opacity-20">
                                <h1 className="header-title drop-shadow-[0_0_.25rem_rgb(0_0_0)] text-white rounded-md">
                                    Make Your <br className="phone:hidden" /> Business{" "}
                                    <span className="text-primary-400 phone:text-primary-400">
                                        <TextTransition inline springConfig={presets.stiff}>
                                            {heroText[textIndex % heroText.length]}
                                        </TextTransition>
                                    </span>
                                </h1>

                                <p className="text-black rounded-md header-text">
                                    Join businesses of all sizes and industries who have boosted productivity with Plotigo&apos;s innovative software solutions, streamlining operations successfully.
                                </p>

                                <div className="btns flex gap-2 phone:flex-wrap">
                                    <Link
                                        href="/about"
                                        className="px-4 py-2 phone:text-sm rounded-full hover:gap-3 select-none shadow-lg backdrop-blur-sm text-base transition-all duration-300 w-max hover:opacity-75 underline-offset-2 text-white bg-accent flex items-center gap-2"
                                    >
                                        Learn more <FaAngleRight />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-4 py-2 phone:text-sm rounded-full hover:gap-3 select-none shadow-lg backdrop-blur-sm text-base transition-all duration-300 w-max hover:opacity-75 underline-offset-2 text-white bg-cs-dark flex items-center gap-2"
                                    >
                                        Contact us <FaAngleRight />
                                    </Link>
                                </div>
                            </div>
                            <Image
                                data-cy="hero-image"
                                loading="lazy"
                                src={HeroImage}
                                className="w-3/4 phone:p-0 phone:bg-none phone:backdrop-blur-0 object-contain h-[105%] z-[5] phone:h-auto phone:w-full phone:translate-x-0 phone:static phone:translate-y-0 shadow-[0_0_.5rem_rgb(0_0_0_/_.1)] absolute top-1/2 px-4 right-0 translate-x-[40%] -translate-y-1/3 pt-0 rounded-xl bg-white bg-opacity-30 backdrop-blur-sm"
                                alt="Hero Image"
                            />
                        </div>
                    </div>

                    {/* SLOGAN SECTION */}
                    <div id="slogan" className="relative grid mt-[10rem] phone:mt-[12rem] place-items-center min-h-[20rem] pt-12 pb-6">
                        <div className="opacity-70 slogan__bg absolute overflow-hidden left-0 after:bg-gradient-to-r top-0 w-[60%] h-full z-[-2] phone:hidden after:absolute after:left-0 after:top-0 after:w-full after:h-full after:from-transparent after:z-[1] after:to-white">
                            <Image loading="lazy" src={MapSlogan} alt="" className="object-cover object-center scale-[1.4] h-full " />
                        </div>
                        <Section>
                            <div className="wrapper flex justify-end phone:flex-col relative items-center gap-2 h-full pb-12">
                                <div data-cy="slogan-content" className="content w-[60%] phone:w-full flex flex-col gap-5">
                                    <h1 className="text-cs-dark slide slide-left font-black leading-[4rem] phone:leading-none type-head-1">Smoothing your journey with Plotigo</h1>
                                    <div className="wrapper type-body-base flex flex-col">
                                        <p className="text-[#555] slide slide-left">Rich experience in transportation industry. Tailored solutions for unique challenges. Cutting-edge technology for smoother operations.</p>
                                    </div>
                                    <span className="slide slide-left">
                                        <Button
                                            type="anchor"
                                            href="/abpout"
                                            title="Learn More"
                                            className="px-4 py-2 !type-body-sm !type-body-sm rounded-full hover:gap-3 select-none shadow-lg backdrop-blur-sm text-base transition-all duration-300 w-max hover:opacity-75 underline-offset-2 text-white bg-accent flex items-center gap-2"
                                        >
                                            Learn more
                                            <FaAngleRight />
                                        </Button>
                                    </span>
                                </div>
                            </div>
                        </Section>
                        <div className="left-1/2 top-1/2 -translate-y-1/2 -translate-x-[230%] w-[13rem] phone:hidden h-auto phone:w-3/4 absolute phone:relative z-[4] ">
                            <Image className="drop-shadow-[0_0_2rem_rgb(0_0_0_/_.5)] h-auto w-full object-contain slide slide-right " loading="lazy" src={SloganPhone} alt="plotigo-phone" />
                        </div>
                    </div>

                    {/* FEATURES SECTION */}
                    <div data-cy="feature" id="features" className="bg-cs-white-200 py-10">
                        <Section className="py-20" title="What can we do " subtitle="Gather all you needs, provide the simplest guidance for you to process your business">
                            <div className="content mt-16 flex flex-col justify-start gap-[4rem]">
                                <Feature imgSrc={Feature1} title="Evaluation and Selection" description="" list={["Evaluate current software", "Compare existing solution in market", "Determine the best solution"]} />

                                <Feature
                                    imgSrc={Feature2}
                                    title="Implementation and Maintenance"
                                    description=""
                                    list={["Data migration", "User training", "Monitoring performance", "Collect user feedback", "Optimize software solutions"]}
                                    primary={true}
                                />

                                <Feature imgSrc={Feature3} title="Security" description="" list={["Data encryption", "Access control", "Disaster recovery plans"]} />
                            </div>
                        </Section>
                    </div>

                    {/* PARTNER SECTION */}
                    <div id="partner" className="pt-12 pb-6" data-cy="partner">
                        <Section title="Proven track record" subtitle="Clients benefit from Plotigo's innovative and effective numerical solutions.">
                            <div data-cy="partner-list" className="wrapper flex flex-col w-full gap-12">
                                <PartnerSlider id="normal">
                                    <SwiperSlide>
                                        <Partner title="Fleet Management V2" src={PartnerFleetManagement} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="Downtown East CMS" src={PartnerDTE} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="Global Foundries CMS" src={PartnerGF} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="Jurong Port CMS" src={PartnerJP} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="Micron CMS" src={PartnerMicron} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="Tuas Port CMS" src={PartnerPSA} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="WRS CMS" src={PartnerZoo} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="Infineon CMS" src={PartnerInfineon} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="SSC CMS" src={PartnerSSC} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="Twin VEW CMS" src={PartnerTwin} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="3M CMS" src={Partner3M} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="MSD MERCK CMS" src={PartnerMSD} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Partner title="Pioneer Primary School CMS" src={PartnerPioneer} />
                                    </SwiperSlide>
                                </PartnerSlider>

                                <PartnerSlider reverse id="school-client">
                                    <SwiperSlide>
                                        <Partner title="Bukit Panjang Primary School" src={PartnerBPRS} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Partner title="Pathlight School (Campus 1)" src={PartnerPLS} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Partner title="Holland International School" src={PartnerHIS} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Partner title="The Winstedt School" src={PartnerWS} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Partner title="Dulwich College (Singapore)" src={PartnerDW} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Partner title="International French School" src={PartnerIFS} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Partner title="Stamford American International School" src={PartnerSAIS} />
                                    </SwiperSlide>
                                </PartnerSlider>
                            </div>
                        </Section>
                    </div>
                </main>
                <Footer />
            </Body>
        </>
    );
}
