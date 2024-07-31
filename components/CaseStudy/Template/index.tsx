import Title from "./Title";
import Content from "./Content";
import Skeleton from "@/components/Skeleton";
import Carousel from "./Carousel";
import Image from "next/image";
import React from "react";

export interface IProps {
    variant: "1" | "2" | "3" | "4" | "5";

    title: string;

    description: string;

    sections: {
        name: string;
        title: string;
        content: string[];
    }[];

    images: {
        title: string;
        url: string;
    }[];
}

export default function Template({ variant, images, sections, title, description }: IProps) {
    if (images.length < 3) throw new RangeError("The images must be at least 3");
    if (sections.length < 1) throw new RangeError("The sections must be at least 1");
    if (images.length < sections.length - 1) throw new RangeError("The images must be at least equal to sections length - 1");

    switch (variant) {
        case "1": {
            return (
                <div className="wrapper py-12 flex flex-col gap-[10rem] phone:gap-[5rem] justify-start items-start">
                    <Title title={title} description={description} />
                    {sections.map((e, i) => {
                        return (
                            <React.Fragment key={i}>
                                {i == sections.length - 1 && <Carousel images={images} />}
                                <div id={`section-${e.name}`} className="isolate slide slide-up relative w-full min-h-[none] group/even">
                                    {i != sections.length - 1 && (
                                        <>
                                            <Image
                                                width="700"
                                                height="700"
                                                className="z-[-1] absolute w-1/2 h-full phone:hidden top-0 group-even/even:left-0 group-odd/even:right-0 group-even/even:rounded-tr-[1rem] group-even/even:rounded-br-[1rem] group-odd/even:rounded-tl-[1rem] group-odd/even:rounded-bl-[1rem] object-cover bg-gray-400 shadow-2xl"
                                                loader={() => images[i].url}
                                                src={images[i].url}
                                                alt={images[i].title}
                                                loading="lazy"
                                            />

                                            <Image width="700" height="700" className="z-[-1] w-full h-auto aspect-[16/12] hidden phone:block object-cover bg-gray-400" loader={() => images[i].url} src={images[i].url} alt={images[i].title} loading="lazy" />
                                        </>
                                    )}

                                    <div className="container w-full pt-6 flex justify-start group-even/even:justify-end">
                                        <div className="content group-even/even:pl-12 group-odd/even:pr-12 flex flex-col w-1/2 phone:w-full phone:!px-0 group-last/even:w-full gap-6">
                                            <div className="heading flex items-center gap-[3rem] phone:gap-[1rem] phone:text-2xl text-4xl w-full font-extrabold">
                                                <Skeleton className="text-4xl w-full" variant="rounded">
                                                    <div className="rounded-full aspect-square h-[5rem] phone:h-[3rem] text-white overflow-hidden grid place-items-center bg-cs-dark">
                                                        <span>{i + 1}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h1>{e.title}</h1>
                                                        <p className="text-xl uppercase font-bold text-cs-dark opacity-30">{e.name}</p>
                                                    </div>
                                                </Skeleton>
                                            </div>

                                            <Content>
                                                {e.content.map((el, ind) => (
                                                    <p key={ind}>{el}</p>
                                                ))}
                                            </Content>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            );
        }

        case "2": {
            return (
                <div className="wrapper py-12 flex flex-col phone:gap-[5rem] gap-[10rem] justify-start items-start">
                    <Title title={title} description={description} />
                    {sections.map((e, i) => {
                        return (
                            <React.Fragment key={i}>
                                {i == sections.length - 1 && <Carousel type="cards" images={images} />}
                                <div id={`section-${e.name}`} className="isolate relative w-full min-h-[none] group/even">
                                    <div className="container w-full phone:!flex-col pt-6 flex justify-center group-even/even:flex-row-reverse gap-12 relative">
                                        {i != sections.length - 1 && <Image width="700" height="700" className="flex-grow object-cover block w-1/2 phone:w-full h-full slide slide-up rounded-[1rem] bg-gray-400 shadow-2xl" loader={() => images[i].url} src={images[i].url} alt={images[i].title} loading="lazy" />}

                                        <div className="content flex w-1/2 phone:w-full group-last/even:w-full flex-col gap-6">
                                            <div className="heading flex items-center slide slide-up gap-[2rem] text-4xl phone:text-2xl w-full font-extrabold">
                                                <Skeleton className="text-4xl phone:text-2xl w-full" variant="rounded">
                                                    <div className="aspect-square h-[5rem] phone:h-[4rem] shadow-[.5rem_.5rem_0_0_#777] text-white overflow-hidden grid place-items-center bg-cs-dark">
                                                        <span>{i + 1}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h1>{e.title}</h1>
                                                        <p className="text-xl uppercase font-bold text-cs-dark opacity-30">{e.name}</p>
                                                    </div>
                                                </Skeleton>
                                            </div>

                                            <Content>
                                                {e.content.map((el, ind) => (
                                                    <p key={ind}>{el}</p>
                                                ))}
                                            </Content>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            );
        }

        case "3": {
            return (
                <div className="wrapper py-12 flex flex-col gap-[10rem] phone:gap-[5rem] justify-start items-start">
                    <Title title={title} description={description} />
                    {sections.map((e, i) => {
                        return (
                            <React.Fragment key={i}>
                                {i == sections.length - 1 && <Carousel type="coverflow" images={images} />}
                                <div id={`section-${e.name}`} className="isolate relative w-full min-h-[none] group/even">
                                    <div className="container w-full pt-6 flex justify-center flex-col gap-12">
                                        {i != sections.length - 1 && <Image width="700" height="700" className="z-[-1] slide slide-up object-cover h-full top-0 rounded-[1rem] bg-gray-400 shadow-2xl w-full" loader={() => images[i].url} src={images[i].url} alt={images[i].title} loading="lazy" />}

                                        <div className="content flex flex-col gap-6 ">
                                            <div className="heading flex items-center slide slide-up gap-[2rem] phone:gap-[1rem] text-4xl phone:text-2xl w-full font-extrabold">
                                                <Skeleton className="text-4xl phone:text-2xl w-full" variant="rounded">
                                                    <div className="aspect-square h-[5rem] phone:h-[3rem] border-r-[5px] border-cs-dark text-6xl phone:text-4xl text-accent overflow-hidden grid place-items-center">
                                                        <span>{i + 1}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h1>{e.title}</h1>
                                                        <p className="text-xl uppercase font-bold text-cs-dark opacity-30">{e.name}</p>
                                                    </div>
                                                </Skeleton>
                                            </div>

                                            <Content>
                                                {e.content.map((el, ind) => (
                                                    <p key={ind}>{el}</p>
                                                ))}
                                            </Content>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            );
        }

        case "4": {
            return (
                <div className="wrapper py-12 flex flex-col gap-[10rem] phone:gap-[5rem] justify-start items-start">
                    <Title title={title} description={description} />
                    {sections.map((e, i) => {
                        return (
                            <>
                                {i == sections.length - 1 && <Carousel images={images} />}
                                <div id={`section-${e.name}`} key={i} className="isolate slide slide-up relative w-full min-h-[none] group/even">
                                    <div className="container w-full pt-6 flex phone:!flex-col justify-center group-even/even:flex-row-reverse gap-6">
                                        {i != sections.length - 1 && <Image width="700" height="700" className="object-cover w-1/2 phone:w-full h-full top-0 rounded-[1rem] bg-gray-400 shadow-2xl" loader={() => images[i].url} src={images[i].url} alt={images[i].title} loading="lazy" />}

                                        <div className="content w-1/2 phone:w-full group-last/even:w-full group-last/even:phone:!border-[5px] group-last/even:phone:!px-6 flex flex-col gap-6 group-even/even:border-r-[5px] group-last/even:border-x-[5px] phone:!border-0 phone:!px-0 phone:!py-6 phone:!border-t-[5px] group-last/even:px-6 border-opacity-50 group-even/even:pr-6 group-odd/even:border-l-[5px] group-odd/even:pl-6 border-dashed border-cs-dark-100">
                                            <div className="heading flex items-center gap-[2rem] text-4xl phone:text-2xl w-full font-extrabold">
                                                <Skeleton className="text-4xl phone:text-2xl w-full" variant="rounded">
                                                    <div className="shadow-[.5rem_.5rem_0_0_#777] aspect-square h-[5rem] phone:h-[4rem] text-white overflow-hidden grid place-items-center bg-cs-dark">
                                                        <span>{i + 1}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h1>{e.title}</h1>
                                                        <p className="text-xl uppercase font-bold text-accent opacity-50">{e.name}</p>
                                                    </div>
                                                </Skeleton>
                                            </div>

                                            <Content>
                                                {e.content.map((el, ind) => (
                                                    <p key={ind}>{el}</p>
                                                ))}
                                            </Content>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            );
        }

        default: {
            return (
                <div className="wrapper py-12 flex flex-col gap-[10rem] phone:gap-[5rem] justify-start items-start">
                    <Title title={title} description={description} />
                    {sections.map((e, i) => {
                        return (
                            <>
                                {i == sections.length - 1 && <Carousel images={images} />}
                                <div id={`section-${e.name}`} key={i} className="isolate slide slide-up relative w-full min-h-[none] group/even">
                                    <div className="container phone:!flex-col w-full pt-6 flex justify-center group-even/even:flex-row-reverse gap-12">
                                        {i != sections.length - 1 && <Image width="700" height="700" className="object-cover phone:w-full w-1/2 relative h-full top-0 rounded-[1rem] bg-gray-400 shadow-2xl" loader={() => images[i].url} src={images[i].url} alt={images[i].title} loading="lazy" />}

                                        <div className="content w-1/2 phone:w-full group-last/even:w-full flex flex-col gap-6">
                                            <div className="heading flex items-center gap-[3rem] phone:gap-[1rem] phone:text-2xl text-4xl w-full font-extrabold">
                                                <Skeleton className="text-4xl phone:text-2xl w-full" variant="rounded">
                                                    <div className="rounded-full aspect-square h-[5rem] phone:h-[3rem] text-white overflow-hidden grid place-items-center bg-cs-dark">
                                                        <span>{i + 1}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h1>{e.title}</h1>
                                                        <p className="text-xl uppercase font-bold text-accent opacity-50">{e.name}</p>
                                                    </div>
                                                </Skeleton>
                                            </div>

                                            <Content>
                                                {e.content.map((el, ind) => (
                                                    <p key={ind}>{el}</p>
                                                ))}
                                            </Content>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            );
        }
    }
}
