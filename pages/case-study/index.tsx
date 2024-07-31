import Head from "next/head";
import Image from "next/image";
import BusSVG from "@/public/assets/case-study/bus-stop.png";
import CS1 from "@/public/assets/case-study/case-1.png";
import CS2 from "@/public/assets/case-study/case-2.png";
import HC from "@/public/assets/case-study/hp-full.png";
import Phone from "@/public/assets/case-study/phone-1.png";
import HeaderWave from "@/public/assets/case-study/wave.svg";
import Person from "@/public/assets/case-study/Person1.png";
import Ex1 from "@/public/assets/case-study/Ex1.png";
import isClientReady from "@/lib/isClientReady";
import HeaderBg from "@/public/assets/case-study/Bg-Header.png";

//Components
import Filter from "@/components/CaseStudy/Filter";
import FilterItem from "@/components/CaseStudy/Filter/FilterItem";
import Body from "@/components/Body";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Skeleton from "@/components/Skeleton";
import Section from "@/components/Section";
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
          <div data-cy="header">
            <Section className="relative flex items-center h-auto z-10 overflow-hidden phone:h-auto pt-0 content">
              <div>
                 <Image
                  src={HRBUS}
                  alt="Bg-Header"
                  data-cy="svg"
                  className="absolute right-[-7%] h-[100%] tablet:translate-x-[200px] phone:hidden  "
                ></Image> 
              </div>
          <div className="slide slide-up">
              <div className="pb-3 pt-3 type-head-2 font-extrabold text-cs-dark-400 ">
                <h1>Case Study</h1>
              </div>
              <div className="flex justify-center gap-3 flex-col w-[60%] phone:w-auto">
                <div className=" type-head-5 tablet:text-sm">
                  <p>
                    Our journey began as a transportation app startup, where we
                    developed software solutions to simplify private bus operations. As we progressed, we recognized the need for
                    custom software solutions across various industries. With
                    our expertise in software development, we expanded our
                    offerings to provide tailored solutions that cater to the
                    specific needs of clients in different industries.
                  </p>
                </div>

                <div className=" type-head-5 tablet:text-sm">
                  <p>
                  Today, we are proud to have developed a comprehensive suite of solutions for employee transportation, school bus operations, and much more. Our ability to understand the unique needs of
                    different industries and craft customized solutions has
                    enabled us to drive innovation and streamline operations for
                    businesses across multiple sectors.
                  </p>
                </div>

                <div className=" type-head-5 tablet:text-sm">
                  <p>
                    While our roots are in transportation, we have expanded our
                    focus to include various industries, and we remain committed
                    to developing software solutions that empower our clients to
                    achieve their goals. Our goal is to continue expanding our
                    offerings to new industries while remaining focused on
                    delivering personalized solutions that meet the specific
                    needs of each client.
                  </p>
                </div>
                </div>
              </div>
            </Section>
          </div>

          <div data-cy="filter">
          <Section
            title="Portfolio."
            subtitle="See everything we offers to help your business thrive and grows."
          >
            <div className="contentf slide slide-up phone:grid-flow-col flex">
              <Filter>
  {/*delivery*/}
                <FilterItem
                  src="https://source.unsplash.com/random/500x500?business"
                  title="delivery"
                  
                  tag={"delivery"}
                ></FilterItem>
                <FilterItem
                  src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=1060&t=st=1680241626~exp=1680242226~hmac=cef78cbead6f87578b5550e9ee56e9a98a92927bbac366896f65ec3593d796e8"
                  title="delivery"
                
                  tag={"delivery"}
                ></FilterItem>
                <FilterItem
                  src="https://img.freepik.com/free-photo/3d-illustration-smartphone-with-delivery-scooter-boxes-paper-bags_58466-14576.jpg?w=900&t=st=1680242850~exp=1680243450~hmac=0f474e2e06ddb1c4729dadbaab6d79ece79d00da3aca6f0bd14c4316f8dcf936"
                  title="delivery"
                 
                  tag={"delivery"}
                ></FilterItem>
                <FilterItem
                  src="https://img.freepik.com/premium-vector/phone-city-map-landing-page-mobile-delivery-application-interface-online-tracking-courier-route-urban-plan-website-ui-design-smartphone-service-with-buttons-vector-web-mockup_176516-3741.jpg?w=1380"
                  title="delivery"
                 
                  tag={"delivery"}
                ></FilterItem>
  {/*CMS*/}
                <FilterItem
                  src="https://source.unsplash.com/random/500x500?website"
                  title="CMS"
                 
                  tag={"cms"}
                ></FilterItem>

                <FilterItem
                  src="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?w=1060&t=st=1679249631~exp=1679250231~hmac=6e5c047ba8df34d9b9d5f81ef6ef7fdfbf28484941ef8d70a8a01ed8bb74e7d5"
                  title="CMS"
                
                  tag={"cms"}
                ></FilterItem>

                  <FilterItem
                  src="https://kinsta.com/wp-content/uploads/2018/03/content-management-system-2.png"
                  title="CMS"
                 
                  tag={"cms"}
                ></FilterItem>

                 <FilterItem
                  src="https://www.jojonomic.com/wp-content/uploads/2020/08/CMS.jpg"
                  title="CMS"
                 
                  tag={"cms"}
                ></FilterItem>

  {/*transportation*/}
                <FilterItem
                  src="https://i.pinimg.com/564x/aa/46/e8/aa46e8a2fd3cba94d0401cc425d8c262.jpg"
                  title="Transportation"
                 
                  tag={"transportation"}
                ></FilterItem>

                 <FilterItem
                  src="https://images.unsplash.com/photo-1602604953727-254e9efb7348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  title="Transportation"
                  
                  tag={"transportation"}
                ></FilterItem>

                 <FilterItem
                  src="https://img.freepik.com/free-vector/delivery-logistics-shipment-isometric-conceptual-composition-with-smartphone-screen-delivery-truck-with-parcels-text-illustration_1284-29126.jpg?w=900&t=st=1680244116~exp=1680244716~hmac=69779a28695fdf9e0d4907b08021b390aa515b12a2b2c8710fbba7da6e4add0e"
                  title="Transportation"
                  
                  tag={"transportation"}
                ></FilterItem>

                  <FilterItem
                  src="https://img.freepik.com/free-vector/young-man-wanted-travel-run-errands-so-he-used-application-his-mobile-phone-call-taxi-call-taxi-service-online-mobile-application-vector-cartoon-illustration-flat-design_1150-56219.jpg?w=1060&t=st=1680244202~exp=1680244802~hmac=58d2eb13bd32bdd499dbcc6e3efb0f68b84a5d6cf5d49c827b7ff1b904c91bbe"
                  title="Transportation"
                 
                  tag={"transportation"}
                ></FilterItem>
              

   {/* ride_hailing */}
                <FilterItem
                  src="https://plus.unsplash.com/premium_photo-1661501256336-1936e26734ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1237&q=80"
                  title="RideHailing"
                  
                  tag={"ride_hailing"}
                ></FilterItem>

                <FilterItem
                  src="https://images.unsplash.com/photo-1554260570-47e791ab2fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  title="RideHailing"
                  
                  tag={"ride_hailing"}
                ></FilterItem>

                  <FilterItem
                  src="https://img.freepik.com/premium-photo/asian-businessman-using-their-mobile-phones-view-applications_73503-2828.jpg?w=1060"
                  title="RideHailing"
                 
                  tag={"ride_hailing"}
                ></FilterItem>

                  <FilterItem
                  src="https://img.freepik.com/free-photo/casual-teenager-browsing-her-phone_23-2148804605.jpg?w=1060&t=st=1680243512~exp=1680244112~hmac=2b61eaf25df11211cd466f955cfc2201e83ac02a892c52d8a91bcd3aa3868612"
                  title="RideHailing"
                 
                  tag={"ride_hailing"}
                ></FilterItem>

    {/*Logistic*/}
                <FilterItem
                  src="https://img.freepik.com/free-vector/logistic-workers-delivering-meds-warehouse-employees-loading-truck-with-pills-flat-illustration_74855-14097.jpg?w=1060&t=st=1679249161~exp=1679249761~hmac=8ba4adcfc2ace5e1e4fa44d7103521205ab6a71b66a304603fd4bdbe599b3195"
                  title="Logistic"
                
                  tag={"logistic"}
                ></FilterItem>
                <FilterItem
                  src="https://img.freepik.com/free-vector/isometric-logistics-flowchart-composition-with-isolated-images-delivery-techniques-vehicles-human-characters-with-text-vector-illustration_1284-30930.jpg?w=2000"
                  title="Logistic"
                 
                  tag={"logistic"}
                ></FilterItem>
                  <FilterItem
                  src="https://img.freepik.com/free-photo/container-operation-port-series_1150-8332.jpg?w=1060&t=st=1680241405~exp=1680242005~hmac=2fbed0e20ec1a2655e6b6775a01244d5d05ae339413f1b3d6a1b108fa4587e21"
                  title="Logistic"
                  
                  tag={"logistic"}
                ></FilterItem>
                <FilterItem
                src="https://img.freepik.com/free-photo/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market_342744-1481.jpg?w=1060&t=st=1680241432~exp=1680242032~hmac=4196b25c7dbf5ed27fde48790ce4937b7962782e7bd0512ece01dfb4ad0998d8"
                title="Logistic"
                
                tag={"logistic"}
                ></FilterItem>

              </Filter>
            </div>
          </Section>
          </div>
        </main>
        <Footer />
      </Body>
    </>
  );
}
