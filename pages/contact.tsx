import Head from "next/head";
//Components
import Body from "@/components/Body";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { Icon1, Icon2, Icon3 } from "@/components/Contact/Assets";
import { Select, MenuItem, FormControl, InputLabel, TextField, Input, InputAdornment, OutlinedInput, SelectChangeEvent } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { createRef, useState, useEffect, ChangeEventHandler, ChangeEvent } from "react";
import isClientReady from "@/lib/isClientReady";
import axios from "axios";

interface ICountry {
    name: {
        common: string;
        official: string;
        nativeName: {
            [k: string]: {
                official: string;
                common: string;
            };
        };
    };
    altSpellings: string[];
}

interface IProps {
    countries: (ICountry & { flagUrl: string })[];
}

export const getStaticProps: GetStaticProps<IProps> = async (ctx) => {
    try {
        let data = (await axios.get<ICountry[]>("https://restcountries.com/v3.1/all?fields=altSpellings,name")).data;
        let res = data
            .filter((e) => e.altSpellings[0].length == 2)
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map<ICountry & { flagUrl: string }>((e) => ({ ...e, flagUrl: `https://flagsapi.com/${e.altSpellings[0]}/flat/64.png` }));

        return {
            props: { countries: res },
        };
    } catch (e) {
        return {
            props: { countries: [] },
        };
    }
};

export default function Contact({ countries }: IProps) {
    let captchaRef = createRef<any>();
    let contactRef = createRef<any>();
    let route = useRouter();
    let [contact, setContact] = useState("");
    let errorMsg = route.query["errMsg"];
    let success = "success" in route.query;

    useEffect(() => {
        if (isClientReady()) window.history.pushState({}, "", "/contact");
    });

    function handleContactChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        let regex = /[^0-9\-]/;
        let data = contactRef.current.value;

        if (regex.test(data)) return;
        setContact(data);
    }

    return (
        <>
            <Head>
                <Meta />
                <title>Plotigo - Contact</title>
            </Head>
            <Body>
                <Navbar />
                <main>
                    {/*Form*/}
                    <Section data-cy="form" className=" bg-white" title="We Are Open To" subtitle="General | Consultation | Media">
                        <div className="wrapper pt-0 flex justify-center phone:justify-start items-start gap-[5rem]">
                            <div className="content phone:w-full w-full">
                                <form action="/api/contact-submit" method="POST" className="bg-[#eee] p-6 rounded-md flex flex-col gap-6 justify-start items-start" id="form">
                                    <div className="mb-2 flex gap-2 w-full">
                                        <FormControl data-cy="choose" fullWidth className="bg-white mb-2">
                                            <InputLabel size="small" id="i-select-label">
                                                Enquiries*
                                            </InputLabel>
                                            <Select size="small" variant="outlined" required labelId="i-select-label" id="i-select" label="Enquiries">
                                                <MenuItem value="General">General</MenuItem>
                                                <MenuItem value="Consultation">Consultation</MenuItem>
                                                <MenuItem value="Media">Media</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl className="bg-white mb-2" fullWidth>
                                            <TextField size="small" variant="outlined" label="Name" required id="i-Iname" name="name" />
                                        </FormControl>
                                    </div>
                                    <div className="mb-2 flex gap-2 w-full">
                                        <FormControl className="bg-white" fullWidth>
                                            <TextField size="small" type="email" variant="outlined" label="Email" required id="i-email" name="email" />
                                        </FormControl>

                                        <FormControl className="bg-white" fullWidth>
                                            <InputLabel size="small" htmlFor="i-contact" id="i-contact-label">
                                                Contact *
                                            </InputLabel>
                                            <OutlinedInput
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Select defaultValue="Singapore" size="small" disableUnderline variant="standard" name="country" required id="i-select">
                                                            {countries.map((e) => {
                                                                return (
                                                                    <MenuItem
                                                                        key={e.name.official}
                                                                        value={e.name.common}
                                                                        className="group-menuitem flex items-center justify-start gap-2"
                                                                    >
                                                                        <div className="wrapper group/menuitem flex items-center gap-2">
                                                                            <Image loader={(url) => url.src} src={e.flagUrl} alt={e.altSpellings[0]} width={30} height={30} />
                                                                            <span className="group-only/menuitem:hidden">{e.name.common}</span>
                                                                        </div>
                                                                    </MenuItem>
                                                                );
                                                            })}
                                                        </Select>
                                                    </InputAdornment>
                                                }
                                                size="small"
                                                type="text"
                                                label="contact"
                                                required
                                                inputRef={contactRef}
                                                value={contact}
                                                onChange={handleContactChange}
                                                inputMode="tel"
                                                id="i-contact"
                                                name="contact"
                                            />
                                        </FormControl>
                                    </div>
                                    <FormControl fullWidth className="bg-white mb-2">
                                        <TextField size="small" type="text" minRows={8} multiline variant="outlined" label="Message" required id="i-message" name="message" />
                                    </FormControl>

                                    <FormControl fullWidth className="mb-2">
                                        {/* <ReCAPTCHA ref={captchaRef} sitekey="6LcYskMlAAAAAAtTP24y5ls7p584li432gCX8H_1" /> */}
                                    </FormControl>

                                    {errorMsg && (
                                        <div className="w-full mb-4 bg-accent-800 bg-opacity-30 px-4 py-2 rounded-md border text-center border-accent-500 text-accent-700">
                                            Failed: {errorMsg}
                                        </div>
                                    )}
                                    {success && (
                                        <div className="w-full mb-4 bg-lime-400 bg-opacity-30 px-4 py-2 rounded-md border text-center border-lime-500 text-lime-500">Success</div>
                                    )}

                                    <button type="submit" className="rounded-full mb-2 px-6 py-3  bg-rose-500 text-white">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Section>

                    {/*Social Media*/}
                    <Section data-cy="media sosial" className="bg-cs-white-200 phone:w-full" title="We Are Here">
                        <div className="wrapper flex phone:flex-col content w-full phone:w-full justify-evenly items-start gap-4">
                            <Link data-cy="link1" href="" title="" className="flex items-center text-base gap-6">
                                <Image src={Icon1} alt="" className=" w-[1.25em] h-auto" />
                                <span className="">08:30 - 15:30 </span>
                            </Link>

                            <Link data-cy="link2" href="" title="" className="flex items-center text-base gap-6">
                                <Image src={Icon2} alt="" className=" w-[1.25em] h-auto" />
                                <span className="">lorem122@gmail.com</span>
                            </Link>

                            <Link data-cy="link3" href="" title="" className="flex items-center text-base gap-6">
                                <Image src={Icon3} alt="" className=" w-[1.25em] h-auto" />
                                <span className="">+12 8372 8373</span>
                            </Link>
                        </div>
                    </Section>

                    {/*maps*/}
                    <Section data-cy="maps" className="section__heading bg-cs-white-200  phone:w-full pb-[3rem]">
                        <div data-cy="maps" id="maps" className="content phone:w-full">
                            <div data-cy="maps" className="relative w-[100%] h-auto mt-4">
                                <div className="content w-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.769739582194!2d103.67091731493174!3d1.3136253620562524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f57990d8aff%3A0x2aa9c5b5add59002!2sWoodlands%20Transport%20Service%20Pte%20Ltd!5e0!3m2!1sen!2sid!4v1677150124329!5m2!1sen!2sid"
                                        width="100%"
                                        height="600"
                                        loading="lazy"
                                        className="z-[-1]"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </Section>
                </main>
                <Footer />
            </Body>
        </>
    );
}
