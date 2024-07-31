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
// import { TextareaAutosize } from "@mui/base";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  createRef,
  useState,
  useEffect,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import isClientReady from "@/lib/isClientReady";
import axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";

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
    let data = (
      await axios.get<ICountry[]>(
        "https://restcountries.com/v3.1/all?fields=altSpellings,name"
      )
    ).data;
    let res = data
      .filter((e) => e.altSpellings[0].length == 2)
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
      .map<ICountry & { flagUrl: string }>((e) => ({
        ...e,
        flagUrl: `https://flagsapi.com/${e.altSpellings[0]}/flat/64.png`,
      }));

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
    const [contact, setContact] = useState("");
    let errorMsg = route.query["errMsg"];
    let success = "success" in route.query;
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [country,setCountry]=useState("");
    const [enquiries,setEnquiries]=useState("");
    const [message,setMessage]=useState("");
    let subject = "Plotigo Site Form";
    let text = `${enquiries} \nName: ${name} \nCountry: ${country} \n \n${message}` 

    const isFormValid = name  && enquiries && message;

    const [isDisable,setIsDisable]=useState(false);
    

    const [mailtoLink,setMailtoLink]=useState("");

    useEffect(() => {
        if (name&&email&&country&&enquiries&&message){
            setMailtoLink(`mailto:${`hello@plotigo.app`}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`)
            setIsDisable(false)
        }
        else {setMailtoLink("")
    setIsDisable(true)}
    },[name,email,country,enquiries,message]);
    

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

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        const form = event.currentTarget;
        const formData = new FormData(form);
    
        const emailBody = Array.from(formData)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
          .join("&");
    
        const mailtoLink = `mailto:hello@plotigo.app?${emailBody}`;
    
        window.location.href = mailtoLink;
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
                            <form  className="bg-[#eee] p-6 rounded-md flex flex-col gap-6 justify-start items-start" id="form">
                                    <div className="mb-2 flex gap-2 w-full">
                                        <FormControl data-cy="choose" fullWidth className="bg-white mb-2">
                                            <InputLabel size="small" id="i-select-label">
                                                Enquiries*
                                            </InputLabel>
                                            <Select onChange={(e:any)=>{setEnquiries(e.target.value)}} size="small" variant="outlined" required labelId="i-select-label" id="i-select" label="Enquiries">
                                                <MenuItem value="General">General</MenuItem>
                                                <MenuItem value="Consultation">Consultation</MenuItem>
                                                <MenuItem value="Media">Media</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl className="bg-white mb-2" fullWidth>
                                            <TextField size="small" variant="outlined" label="Name" required id="i-Iname" name="name" onChange={(e:any)=>{setName(e.target.value)}}/>
                                        </FormControl>
                                    </div>
                                    <div className="mb-2 flex gap-2 w-full">
                                        <FormControl className="bg-white" fullWidth>
                                            <TextField size="small" type="email" variant="outlined" label="Email" required id="i-email" name="email" onChange={(e:any)=>{setEmail(e.target.value)}}/>
                                        </FormControl>

                                        <FormControl className="bg-white" fullWidth>
                                            <InputLabel size="small" htmlFor="i-contact" id="i-contact-label">
                                                Contact *
                                            </InputLabel>
                                            <OutlinedInput
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Select defaultValue="Singapore" size="small" disableUnderline variant="standard" name="country" required id="i-select" onChange={(e:any)=>{setCountry(e.target.value)}}>
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
                                        <TextField inputProps={{ maxLength: 1200,  }} size="small" type="text" minRows={8} multiline variant="outlined" label="Message" required id="i-message" name="message" onChange={(e:any)=>{setMessage(e.target.value)}}/>
                                    </FormControl>

                  {errorMsg && (
                    <div className="w-full mb-4 bg-accent-800 bg-opacity-30 px-4 py-2 rounded-md border text-center border-accent-500 text-accent-700">
                      Failed: {errorMsg}
                    </div>
                  )}
                  {success && (
                    <div className="w-full mb-4 bg-lime-400 bg-opacity-30 px-4 py-2 rounded-md border text-center border-lime-500 text-lime-500">
                      Success
                    </div>
                  )}

                                    <a
                                        href={isFormValid ? mailtoLink : undefined}
                                        className={`rounded-full mb-2 px-6 py-3 ${isFormValid ? 'bg-rose-500 text-white' : 'bg-gray-300 text-gray-500'}`}
                                        >
                                        Submit
                                        </a>
                                </form>

                            </div>
                        </div>
                    </Section>

                    {/*Social Media*/}
                    <Section data-cy="media sosial" className="bg-cs-white-200 phone:w-full" title="We Are Here">
                        <div className="wrapper flex phone:flex-col content w-full phone:w-full justify-evenly items-start gap-4">
                            <Link data-cy="link1" href="tel:+658301730" title="" className="flex items-center text-base gap-6">
                                <Image src={Icon3} alt="" className=" w-[1.25em] h-auto" />
                                <span className="">0830-1730 (UTC+8)</span>
                            </Link>

              <Link
                data-cy="link2"
                href="mailto:hello@plotigo.app"
                title=""
                className="flex items-center text-base gap-6"
              >
                <Image src={Icon2} alt="" className=" w-[1.25em] h-auto" />
                <span className="">hello@plotigo.app</span>
              </Link>
            </div>
          </Section>

          {/*maps*/}
          <Section
            data-cy="maps"
            className="section__heading bg-cs-white-200  phone:w-full pb-[3rem]"
          >
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
