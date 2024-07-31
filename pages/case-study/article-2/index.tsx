import Head from "next/head";
import Image from "next/image";

//Components
import Body from "@/components/Body";
import { config } from "./__config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import TemplateCaseStudy from "@/components/CaseStudy/Template";

export default function CaseStudy() {
    return (
        <>
            <Head>
                <Meta />
                <title>Case Study - Article 2</title>
            </Head>
            <Body>
                <Navbar />
                <main>
                    <TemplateCaseStudy {...config} />
                </main>
                <Footer />
            </Body>
        </>
    );
}
