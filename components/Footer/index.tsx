import { FaEnvelope, FaTwitter, FaFacebook } from "react-icons/fa";
import Skeleton from "../Skeleton";
import Image from "next/image";
import Brand from "@/public/assets/plotigo-favicon.svg";
import WTS from "@/public/assets/wts-1.png";
import Link from "next/link";
import Item from "./Item";

export default function Navbar() {
    return (
        <footer data-cy="footer" id="footer" className="relative bottom-0 pt-5 mt-auto bg-cs-white-100 flex flex-col overflow-y-hidden">
            <div className="container flex items-start phone:flex-col phone:items-center phone:gap-6 w-full py-10 justify-between">
                <div className="brands flex flex-col gap-4 w-full">
                    <Image src={Brand} alt="plotigo" className="w-[4rem] phone:w-[3rem] h-auto" loading="lazy" />

                    <p className="text-sm text-[#555]">We are happy to get your feedback</p>

                    <div className="social flex justify-start phone:text-sm gap-4 items-center text-3xl text-[#888]">
                        <Link href="" className="hover:opacity-75 transition-all duration-200">
                            <FaEnvelope></FaEnvelope>
                        </Link>

                        <Link href="" className="hover:opacity-75 transition-all duration-200">
                            <FaTwitter></FaTwitter>
                        </Link>

                        <Link href="" className="hover:opacity-75 transition-all duration-200">
                            <FaFacebook></FaFacebook>
                        </Link>
                    </div>

                    <p className="text-sm text-[#555]">Feel free to contact us</p>
                </div>

                <div className="footer__link flex gap-4 w-full justify-between">
                    <div className="footer__link">
                        <div className="link__heading mb-2">
                            <h2 className="uppercase font-bold text-xl phone:text-base text-[#333]">COMPANY</h2>
                        </div>
                        <div className="items flex flex-col gap-1 text-base text-[#888]">
                            <Item href="">About Us</Item>
                            <Item href="">FAQ</Item>
                            <Item href="">Blog</Item>
                            <Item href="">Support</Item>
                        </div>
                    </div>

                    <div className="footer__link">
                        <div className="link__heading mb-2">
                            <h2 className="uppercase font-bold text-xl phone:text-base text-[#333]">APPS</h2>
                        </div>
                        <div className="items flex flex-col gap-1 text-base text-[#888]">
                            <Item href="">Driver App</Item>
                            <Item href="">Bus Service</Item>
                            <Item href="">School</Item>
                        </div>
                    </div>

                    <div className="footer__link">
                        <div className="link__heading mb-2">
                            <h2 className="uppercase font-bold text-xl phone:text-base text-[#333]">LEGAL</h2>
                        </div>
                        <div className="items flex flex-col gap-1 text-base text-[#888]">
                            <Item href="">Privacy</Item>
                            <Item href="">Terms</Item>
                            <Item href="">Copyright</Item>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" border-t border-[#555] border-opacity-20">
                <div className="container font-medium py-5 text-[#555] w-full flex justify-center items-center relative gap-2 phone:flex-col">
                    <p className="type-body-sm">© 2023 Plotigo. All rights reserved.</p>
                    <span className="phone:hidden">|</span>
                    <p className="type-body-sm flex justify-end items-center gap-2">
                        Powered by{" "}
                        <Link href="#" className="hover:opacity-75 transition-all duration-100">
                            <Image className="h-[2rem] w-auto" alt="WTS" src={WTS} />
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
