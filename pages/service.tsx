import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Logo1 from "@/public/assets/service/logo1.svg";
import Logo2 from "@/public/assets/service/logo2.svg";
import Logo3 from "@/public/assets/service/logo3.svg";
import Logo4 from "@/public/assets/service/logo4.svg";
import Logo5 from "@/public/assets/service/logo5.svg";
import Logo6 from "@/public/assets/service/logo6.svg";
import Bgtech from "@/public/assets/service/bgtech2.svg";
import Phone from "@/public/assets/service/phone.png";

//Components
import Body from "@/components/Body";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Section from "@/components/Section";
import Slo from "@/components/Service/Slogan";

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

                    <div data-cy="header" id="header" className="pt-12 relative isolate h-auto">
                        <Section className="pb-0 z-10 h-auto">
                            {/* <div className=" slide slide-up absolute right-0 bottom-6 w-[100%] z-[-1] phone:hidden"> */}
                            <div
                                data-cy="Tech"
                                className="absolute overflow-hidden right-0 top-0 w-[100%] h-[100%] z-[-1] phone:hidden"
                            ></div>
                            <div className="wrapper flex w-full">
                                <div className="w-1/2 relative slide slide-up flex phone:flex-col justify-between gap-6 items-center">
                                    <div className="content w-full phone:w-full flex flex-col justify-center text- center gap-4 pb-12 phone:pb-0">
                                        <h1 className="type-head-2 font-extrabold text-black">Our Services</h1>

                                        <p className="type-head-5 text-black">
                                            Plotigo help business leverage technology to optimize workflow, enhance data
                                            security, and drive growth.
                                        </p>
                                    </div>
                                </div>
                                <Image src={Phone} alt="" className="w-1/2 h-auto" />
                            </div>
                        </Section>
                    </div>

                    {/* Slogan Section */}
                    <div data-cy="Slogan" id="slogan" className="py-12 bg-[#F6F9FC] mt-[100px]">
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
                    </div>
                </main>
                <Footer />
            </Body>
        </>
    );
}
