import Head from "next/head";
import styles from "@/styles/Home.module.css";
// import Logo1 from "@/public/assets/service/logo1.svg";
// import Logo2 from "@/public/assets/service/logo2.svg";
// import Logo3 from "@/public/assets/service/logo3.svg";
// import Logo4 from "@/public/assets/service/logo4.svg";
// import Logo5 from "@/public/assets/service/logo5.svg";
// import Logo6 from "@/public/assets/service/logo6.svg";
import Logo1 from "@/public/assets/service/Slo1.svg";
import Logo2 from "@/public/assets/service/Slo2.svg";
import Logo3 from "@/public/assets/service/Slo3.svg";
import Logo4 from "@/public/assets/service/Slo4.svg";
import Logo6 from "@/public/assets/service/Slo6.svg";
import Logo5 from "@/public/assets/service/Slo5.svg";
import Bgtech from "@/public/assets/service/bgtech2.svg";
// import Phone from "@/public/assets/service/phone.png";
import Phone from "@/public/assets/service/phone-rev.png";
import vectorVision from "@/public/assets/about/vectorVision.svg";
import vectorMission from "@/public/assets/about/vectorMission.svg";

//Components
import Body from "@/components/Body";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Section from "@/components/Section";
import SectionService from "@/components/SectionService";
import Slo from "@/components/Service/Slogan";
import SloganCard1 from "@/components/Service/SloganCard1";
import SloganCard2 from "@/components/Service/SloganCard2";
import SloganCard3 from "@/components/Service/SloganCard3";

export default function Service() {
    return (
        <>
            <Head>
                <Meta />
                <title>Plotigo - Service</title>
            </Head>
            <Body>
                <Navbar />
                <main>
                    {/* Header Section */}

                    <div data-cy="header" id="header" className="pt-40 relative isolate h-auto phone:pt-0">
                        <Section className="pt-10 pb-[160px] z-10 h-auto shadow-lg1 phone:pb-[60px]">
                            {/* <div className=" slide slide-up absolute right-0 bottom-6 w-[100%] z-[-1] phone:hidden"> */}
                            <div
                                data-cy="Tech"
                                className="absolute overflow-hidden right-0 top-0 w-[100%] h-[100%] z-[-1] phone:hidden"
                            ></div>
                            <div className="wrapper1 flex w-full relative isolate items-center tablet:pt-[0px] tablet:pb-[0px] phone:flex-col phone:gap-12">
                                <div className="w-1/3 relative flex phone:flex-col justify-between gap-6 items-center phone:w-full">
                                    <div className="content w-full phone:w-full flex flex-col justify-center phone:text-center gap-4 pb-12 phone:pb-0">
                                        <div className="text flex flex-col">
                                            <h1 className="type-head-1 font-extrabold text-cs-dark phone:type-head-1 phone:text-[30px]">
                                                Our <span style={{ color: "#DC0032" }}>Services</span>
                                            </h1>
                                        </div>

                                        <div className="type-head-5 text__group flex flex-col gap-3 mt-2 ml-1 phone:text-[15px]">
                                            <p className="content">Plotigo help business leverage technology to optimize workflow, enhance data
                                                security, and drive growth.</p>
                                        </div>
                                    </div>
                                </div>
                                <Image src={Phone} alt="" className="w-1/2 h-auto phone:w-auto" />
                            </div>
                        </Section>
                    </div>


                    {/* Slogan Section 1 */}
                    <div data-cy="slogancard" id="slogancard" className="relative bg-F6F9FC h-[auto]">
                        <SectionService title="Empowering Your Business with Plotigo" subtitle="Unlock the full potential of your business with our cutting-edge IT solutions" className="relative py-[50px] phone:py-[20px] z-9 isolate ">
                            <div className="content w-full flex flex-row flex-wrap gap-24 phone:flex-col tablet:gap-5 justify-center text-cs-dark py-[50px] phone:py-[5px]">
                                <SloganCard1 data-vmleft imgSrc={Logo1} title="Digital Consulting" text="Providing expert advice on technology-related issues such as system architecture, software selection, cybersecurity, and data management" />
                                <SloganCard1 data-vmleft imgSrc={Logo2} title="Application Integration" text="Integrating multiple software systems to work together seamlessly, optimizing the client's workflow and increasing efficiency" />
                            </div>
                        </SectionService>
                    </div>


                    {/* Slogan Section 2 */}
                    <div data-cy="slogancard" id="slogancard" className="relative bg-white h-[auto]">
                        <Section title="" subtitle="" className="relative py-[90px] phone:py-[20px] z-9 isolate">
                            <div className="content w-full flex flex-row flex-wrap gap-24 phone:flex-col tablet:gap-5 justify-center text-cs-dark">
                                <SloganCard2 data-vmleft imgSrc={Logo3} title="Maintenance & Support" text="Providing ongoing support and maintenance for software solutions, including bug fixes, updates, and technical support" />
                                <SloganCard2 data-vmleft imgSrc={Logo4} title="Software Customisation" text="Developing bespoke software solutions tailored to meet the specific needs of a client's business" />
                            </div>
                        </Section>
                    </div>


                    {/* Slogan Section 3 */}
                    <div data-cy="slogancard" id="slogancard" className="relative bg-F6F9FC h-[auto]">
                        <Section title="" subtitle="" className="relative py-[90px] phone:py-[20px] z-9 isolate">
                            <div className="content w-full flex flex-row flex-wrap gap-24 phone:flex-col tablet:gap-5 justify-center text-cs-dark">
                                <SloganCard3 data-vmleft imgSrc={Logo5} title="Application Development" text="Developing mobile apps for iOS and Android platforms that are intuitive, engaging, and functional" />
                                <SloganCard3 data-vmleft imgSrc={Logo6} title="Website Development" text="Designing and developing websites that are visually appealing, user-friendly, and optimized for search engines" />
                            </div>
                        </Section>
                    </div>


                    {/* Slogan Section */}
                    {/* <div data-cy="Slogan" id="slogan" className="py-12 bg-[#F6F9FC] mt-[100px]">
                        <Section
                            className=""
                            title="Empowering Your Business with Plotigo"
                            subtitle="Unlock the full potential of your business with our cutting-edge IT solutions"
                        >
                            <div className="content text-black wrapper grid-cols-[repeat(auto-fill,minmax(15rem,20rem))] grid justify-center flex-wrap items-center gap-4">
                                <Slo
                                    src={Logo1}
                                    alt="icon"
                                    title="IT Consulting"
                                    text="Providing expert advice on technology-related issues such as system architecture, software selection, cybersecurity, and data management
                                    "
                                />
                                <Slo
                                    src={Logo2}
                                    alt="icon"
                                    title=" Application Integration"
                                    text="Integrating multiple software systems to work together seamlessly, optimizing the client's workflow and increasing efficiency"
                                />
                                <Slo
                                    src={Logo3}
                                    alt="icon"
                                    title=" Maintenance & Support"
                                    text="Providing ongoing support and maintenance for software solutions, including bug fixes, updates, and technical support"
                                />
                                <Slo
                                    src={Logo4}
                                    alt="icon"
                                    title="Software Customisation"
                                    text="Developing bespoke software solutions tailored to meet the specific needs of a client's business "
                                />
                                <Slo
                                    src={Logo5}
                                    alt="icon"
                                    title="Application Development"
                                    text="Developing mobile apps for iOS and Android platforms that are intuitive, engaging, and functional"
                                />
                                <Slo
                                    src={Logo6}
                                    alt="icon"
                                    title=" Website Development"
                                    text="Designing and developing websites that are visually appealing, user-friendly, and optimized for search engines"
                                />
                            </div>
                        </Section>
                    </div> */}
                </main>
                <Footer />
            </Body>
        </>
    );
}
