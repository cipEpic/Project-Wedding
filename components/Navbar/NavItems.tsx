import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ href, children, contact, dark }: { href: string; children: React.ReactNode; contact?: boolean; dark?: boolean }) {
    let route = useRouter();
    let isSamePath = route.asPath == href;

    return (
        <>
            <Link
                href={href}
                className={`nav__item px-4 py-2 phone:pl-4 group/navlink !font-semibold select-none brand bg-gradient-to-r
                ${dark ? `text-white hover:underline underline-offset-[6px] ${isSamePath ? "underline" : ""}` : `text-cs-dark cs-gradient hover:text-unfill ${isSamePath ? "text-unfill" : ""}`}
                ${contact ? `bg-gradient-to-r text-white rounded-full ${dark ? "!from-white !to-white !text-cs-dark " : "!text-fill"}` : `bg-clip-text`}
            
            `}
            >
                {children}
            </Link>
        </>
    );
}
