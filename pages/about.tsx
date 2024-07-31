//Assets
import Head from "next/head";
import Image from "next/image";
import vectorVision from "@/public/assets/about/vectorVision.svg";
import vectorMission from "@/public/assets/about/vectorMission.svg";
import quote from "@/public/assets/about/quote.svg";
import { V1, V2, V3, V4, V5, V6, BG02, BG03, BG04, BG05, BG06 } from "@/components/About/SVG";
import Milestones01 from "@/public/assets/about/Milestones01.jpg";
import Milestones02 from "@/public/assets/about/Milestones02.jpg";
import Milestones03 from "@/public/assets/about/Milestones03.jpg";
import Ptr01 from "@/public/assets/about/ptr01.png";
import Ptr02 from "@/public/assets/about/ptr02.png";
import Ptr03 from "@/public/assets/about/ptr03.png";
import Ptr04 from "@/public/assets/about/ptr04.png";
import Ptr05 from "@/public/assets/about/ptr05.png";
import Ptr06 from "@/public/assets/about/ptr06.png";
import Ptr07 from "@/public/assets/about/ptr07.png";
import Blobs from "@/components/About/Blobs";

//Components
import Body from "@/components/Body";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ValueCard from "@/components/About/ValueCard";
import VMCard from "@/components/About/VMCard";
import FAQList from "@/components/About/FAQList";
import Milestones from "@/components/About/Milestones";
import Proven from "@/components/About/Proven";
import Feature from "@/components/Feature";
import ProvenSlider from "@/components/About/ProvenSlider";
import { SwiperSlide } from "swiper/react";
import MarginBorder from "@/components/MarginBorder";



export default function About() {
    return (
        <>
            <Head>
                <Meta />
                <title>Plotigo - About</title>
            </Head>
            <Body>
                <Navbar />
                <main>
                    {/* Hero Section */}
                    <div data-cy="hero" id="hero" className="relative py-12">
                        <Section className="relative h-auto flex items-center z-10 overflow-y-hidden shadow-lg">
                            <div className="flex w-full">
                                <div className="relative h-[90%] pt-[70px] pb-[130px] isolate flex items-center tablet:pt-[0px] tablet:pb-[0px] phone:flex-col phone:gap-6">
                                    <div className="content w-[53%] flex flex-col justify-center gap-[15px] phone:w-full phone:gap-[10px]">
                                        <div className="text flex flex-col">
                                            <h1 className="type-head-1 font-extrabold slide slide-up text-cs-dark">
                                                About <span style={{ color: "#DC0032" }}>Plotigo</span>
                                            </h1>
                                        </div>

                                        <div className="type-head-5 text__group flex flex-col gap-3 mt-2 ml-1">
                                            <p className="content slide slide-up">Plotigo is the technological arm of Woodlands Transport that focuses on delivering innovative digital solutions to businesses and individuals.</p>
                                        </div>
                                    </div>


                                    <div className="relative isolate flex items-center tablet:pt-[0px] tablet:pb-[0px] phone:flex-col phone:gap-12">
                                        <div className="content slide slide-up w-[100%] flex flex-col justify-center gap-[15px] phone:w-full phone:gap-[10px]">
                                            <Image src={BG04} alt="" loading="lazy" data-cy="hero-background" className="w-[100%] h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>


                    {/* VisionMission Section */}
                    <div data-cy="visionmission" id="visionmission" className="relative bg-white h-[auto] pb-[190px]">
                        <Section title="Who are we?" subtitle="What would we want to be in the future?" className="relative py-[90px] z-9 isolate">
                            <div className="content slide slide-up w-full flex flex-row gap-24 phone:flex-col tablet:gap-5 justify-center text-cs-dark">
                                <VMCard data-vmleft imgSrc1={vectorVision} imgSrc2={quote} title="Our Vision" text="To be a leading software vendor, known for innovative solutions and trusted partnerships with clients" />
                                <VMCard data-vmleft imgSrc1={vectorMission} imgSrc2={quote} title="Our Mission" text="To help businesses streamline operations and drive growth through innovative software solutions" />
                            </div>
                        </Section>
                    </div>

                    {/* Values Section */}
                    <div data-cy="values" id="values" className="relative min-h-[25rem] pb-12 z-10">
                        <Section title="Our values" subtitle="What drives us to be a better company everyday?" className="pt-[3rem]" dark>
                            <div className="hero__image absolute w-[100%] h-[100%] right-0 top-0 bottom-0 z-[-1] object-cover">
                                <Image src={BG03} alt="" loading="lazy" data-cy="hero-background" className="w-[100%] h-full object-cover" />
                            </div>
                            <div className="content slide slide-up grid gap-4 tablet:gap-4 phone:grid-cols-[repeat(auto-fit,minmax(15rem,20rem))] tablet:grid-cols-2 grid-cols-3 mt-[120px] mb-[60px]">
                                <div className="left-border">
                                    <ValueCard src={V4} alt="number" title="Innovative" text="Strive to stay ahead of the curve by creating new and exciting products." />
                                </div>
                                <div className="left-border">
                                    <ValueCard src={V3} alt="number" title="User centered" text="Designed with the user in mind, through research and testing." />
                                </div>
                                <div className="left-border">
                                    <ValueCard src={V2} alt="number" title="Agility" text="Adapt quickly to the ever-changing world of software development." />
                                </div>
                                <div className="left-border">
                                    <ValueCard src={V6} alt="number" title="Quality" text="Held to the highest standards to ensure customer satisfaction." />
                                </div>
                                <div className="left-border">
                                    <ValueCard src={V1} alt="number" title="Collaboration" text="Work closely with our clients and partners to achieve shared goals." />
                                </div>
                                <div className="left-border">
                                    <ValueCard src={V5} alt="number" title="Integrity" text="Committed to transparency and ethical behavior in our operations." />
                                </div>
                            </div>
                        </Section>
                    </div>


                    {/* Milestones Section */}
                    <div data-cy="milestones" id="milestones" className="relative bg-cs-white-200  h-[auto] overflow-hidden">
                        <Section title="Milestone" subtitle="See our company's journey" className="py-[90px] z-10">
                            <div className="content mt-16 flex flex-col justify-start gap-[4rem]">
                                <Milestones
                                    imgSrc1={Milestones01}
                                    year1="2019"
                                    title1="In-house Software Development"
                                    description1="Rich experience in transportation industry. Tailored solutions for unique challenges. Cutting-edge technology for smoother operations."
                                    imgSrc2={Milestones02}
                                    year2="2021"
                                    title2="Company Establishment and Service Expansion "
                                    description2="After several years of successful in-house software development, the IT team established itself as a sub company from Woodlands Transport and began offering its software services to transportation contractors."
                                    imgSrc3={Milestones03}
                                    year3="2023"
                                    title3="IT Solution Provider"
                                    description3="Today, Plotigo has evolved into a leading IT solution provider, delivering highly customized software solutions that meet the specific business logic requirements of its clients."
                                />
                            </div>
                        </Section>
                    </div>


                    {/* Ptr Section */}
                    <div id="proven" className="pt-12 pb-6 bg-cs-white-200" data-cy="proven">
                        <Section title="" subtitle="" className="">
                            <div data-cy="partner-list" className="wrapper flex flex-col w-[full] gap-12">
                                <Proven title=" " src={Ptr01} />
                            </div>
                        </Section>
                    </div>


                    {/* <div id="proven" className="pt-12 pb-6 bg-cs-white-200" data-cy="proven">
                        <Section title="" subtitle="" className="">
                            <div data-cy="partner-list" className="wrapper flex flex-col w-[full] gap-12">
                                <ProvenSlider id="normal">
                                    <SwiperSlide>
                                        <Proven title=" " src={Ptr02} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Proven title=" " src={Ptr07}  />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Proven title=" " src={Ptr05} />
                                    </SwiperSlide>
                                </ProvenSlider>
                            </div>
                        </Section>
                    </div> */}


                    {/* <div id="proven" className="pt-12 pb-6 bg-cs-white-200" data-cy="proven">
                        <Section title="" subtitle="" className="">
                            <div data-cy="partner-list" className="wrapper flex flex-col w-[full] gap-12">
                                <ProvenSlider id="normal">
                                    <SwiperSlide >
                                        <Proven title=" " src={Ptr01} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Proven title=" " src={Ptr02} />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Proven title=" " src={Ptr03}  />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Proven title=" " src={Ptr06}  />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Proven title=" " src={Ptr04}  />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Proven title=" " src={Ptr05} />
                                    </SwiperSlide>
                                </ProvenSlider>
                            </div>
                        </Section>
                    </div> */}

                    {/* FAQ Section */}
                    <div id="faq" className="py-0 z-10" data-cy="faq">
                        <Section title="Frequently Asked Questions" subtitle="Here is some question that we frequently get about our business and our company" className="relative" dark>
                            <div className="hero__image absolute w-[100%] h-[100%] right-0 top-0 bottom-0 z-[-1] object-cover">
                                <Image src={BG05} alt="" loading="lazy" data-cy="hero-background" className="w-[100%] h-full object-cover" />
                            </div>
                            <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))`, zIndex: -1 }}></div>
                            <div className="wraper flex justify-between phone:flex-col-reverse items-center gap-20">
                                <div className="flex flex-col gap-4 w-full mx-auto phone:w-full">
                                    <FAQList question="What kind of software do Plotigo develop?">
                                        We develop a range of software products, including desktop applications, web applications, mobile apps, and custom software solutions tailored to meet the specific needs of our clients.
                                    </FAQList>
                                    <FAQList question="How long does it take to develop a custom software?">
                                        The development timeline for custom software can vary widely depending on the scope of the project, the complexity of the requirements, and other factors. We work closely with our clients to develop a
                                        realistic timeline and keep them updated throughout the development process.
                                    </FAQList>
                                    <FAQList question="What technologies do Plotigo use to develop software?">
                                        We use a variety of programming languages, frameworks, and tools depending on the requirements of the project. Our team stays up to date with the latest technologies and trends in software development
                                        to ensure we are using the most effective tools and techniques.
                                    </FAQList>
                                    <FAQList question="How do Plotigo ensure the quality of the software?">
                                        We have a comprehensive quality assurance process that includes testing at every stage of development, from requirements gathering to deployment. We use a range of testing tools and techniques to
                                        ensure that our software is reliable, secure, and user-friendly.
                                    </FAQList>
                                    <FAQList question="How do Plotigo handle bugs or other issues with the software?">
                                        We have a dedicated support team that is available to help our clients with any issues they may encounter with our software. We also provide regular updates and patches to fix any bugs or security
                                        vulnerabilities that are discovered.
                                    </FAQList>
                                    <FAQList question="How do Plotigo handle data privacy and security concerns?">
                                        We take data privacy and security very seriously and have strict policies and protocols in place to protect user data. We comply with all relevant data privacy laws and regulations and use encryption
                                        and other security measures to keep user data safe.
                                    </FAQList>
                                    <FAQList question="Do Plotigo offer any training or support for the software?">
                                        Yes, we offer training and support services to help our clients get the most out of our software. We also provide documentation and user guides to help users get started.
                                    </FAQList>
                                    <FAQList question="What kind of clients do Plotigo work with?">
                                        We work with a range of clients, from small startups to large enterprises, in a variety of industries including healthcare, finance, education, and more.
                                    </FAQList>
                                    <FAQList question="What is Plotigo development process like?">
                                        Our development process is iterative and collaborative. We work closely with our clients to understand their needs and requirements and provide regular updates and demos throughout the development
                                        process. We also use agile development methodologies to ensure that we can quickly adapt to changing requirements or feedback.
                                    </FAQList>
                                    <FAQList question="What is Plotigo experience working with third-party integrations?">
                                        We have experience working with a variety of third-party integrations, including APIs, libraries, and other software systems. We work closely with our clients to ensure that integrations are seamless
                                        and meet their specific needs.
                                    </FAQList>
                                    <FAQList question="Can Plotigo's software solutions integrate with other systems?">
                                        Yes, Plotigo&apos;s software solutions are designed to integrate with other systems, such as ERP software, accounting systems, and more. We can work with you to ensure seamless integration with your
                                        existing systems.
                                    </FAQList>
                                </div>
                            </div>
                        </Section>
                    </div>
                </main>
                <Footer />
            </Body>
        </>
    );
}
