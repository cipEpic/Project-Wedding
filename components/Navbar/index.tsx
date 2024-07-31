import BrandImage from "@/public/assets/brand.png";
import BrandImagePhone from "@/public/assets/plotigo-favicon.svg";
import Image from "next/image";
import NavItem from "./NavItems";
import { useEffect, useState } from "react";
import isClientReady from "@/lib/isClientReady";
import Hamburger from "./Hamburger";
import Button from "../Button";
import Link from "next/link";

export default function Navbar({ home = false }: { home?: boolean }) {
    const [isHome, setHome] = useState(home);
    const [isNavOpen, setNavOpen] = useState(false);

    function handleClick() {
        setNavOpen(!isNavOpen);
    }

    useEffect(() => {
        if (!isClientReady || !home) return;
        let hero = document.querySelector("#hero");

        let observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) return setHome(true);
                    setHome(false);
                }),
            { threshold: 0.9 }
        );

        if (hero) observer.observe(hero);

        return () => observer.disconnect();
    });

    return (
        <nav data-cy="nav" id="navbar" className={`${home ? "bg-transparent fixed phone:sticky" : "sticky"} left-0 right-0 top-0 z-[1000]`}>
            {/* Mobile Nav */}
            <div
                data-cy="nav-items"
                className={`${
                    isNavOpen ? "translate-y-0" : "-translate-y-full"
                } z-[-1] transition-all duration-500 nav__items phone:flex py-4 itmes-start gap-2 absolute flex-col bg-cs-white-200 shadow-sm left-0 right-0 top-full nav__items hidden`}
            >
                <NavItem href="/">Home</NavItem>
                <NavItem href="/about">About Us</NavItem>
                <NavItem href="/service">Services</NavItem>
                <NavItem href="/case-study">Case Study</NavItem>
                <NavItem href="/contact">Contact Us</NavItem>
            </div>

            <div className={`wrapper ${isHome ? "" : "bg-white shadow-lg"} phone:bg-white phone:shadow-lg transition-all duration-300  isolate`}>
                <div className="container flex justify-between items-center py-3">
                    <Link href="/" data-cy="nav-brand" className="brand phone:hidden flex gap-4 items-center flex-start">
                        <Image src={BrandImagePhone} alt="brand" className="h-[2.5rem] w-auto" />
                        {isHome ? <h1 className="text-[1.5rem] brand text-white !font-black">Plotigo</h1> : <h1 className="text-[1.5rem] brand text-cs-dark !font-black">Plotigo</h1>}
                        {/* {isHome ? <Image src={BrandImage} alt="brand" className="h-[3rem] brightness-50 invert w-auto" /> : <Image src={BrandImage} alt="brand" className="h-[3rem] w-auto" />} */}
                    </Link>
                    <Link href="/" data-cy="nav-brand" className="brand hidden phone:block">
                        <Image src={BrandImagePhone} alt="brand" className="h-[2.5rem] w-auto" />
                    </Link>

                    <Hamburger onClick={handleClick} className="phone:block hidden" state={isNavOpen} />

                    {/* Desktop Nav */}
                    <div data-cy="nav-items" className={` nav__items flex itmes-start gap-1 phone:hidden`}>
                        <NavItem dark={isHome} href="/">
                            Home
                        </NavItem>
                        <NavItem dark={isHome} href="/about">
                            About Us
                        </NavItem>
                        <NavItem dark={isHome} href="/service">
                            Services
                        </NavItem>
                        <NavItem dark={isHome} href="/case-study">
                            Case Study
                        </NavItem>
                        <NavItem dark={isHome} contact href="/contact">
                            Contact Us
                        </NavItem>
                    </div>
                </div>
            </div>
        </nav>
    );
}
