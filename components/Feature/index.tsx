import Image, { StaticImageData } from "next/image";
import Skeleton from "../Skeleton";
import List from "./checklist";
import Button from "../Button";

interface IProps {
    imgSrc: StaticImageData;
    dark?: boolean;
    primary?: boolean;
    list: string[];
    title: string;
    description: string;
    className?: string;
}

export default function Feature({ imgSrc, dark, title, primary, list, description, className = "" }: IProps) {
    return (
        <div
            data-cy="feature-card"
            className={`${className}  slide isolate relative slide-up flex phone:even:flex-col phone:flex-col group/checklist odd:justify-end justify-between items-start phone:rounded-md phone:bg-gradient-to-tl rounded-md phone:overflow-hidden cs-gradient-3`}
        >
            <div className="w-[60%] aspect-[45/32] feature__image group-even/checklist:phone:pl-0 aspect phone:overflow-hidden phone:w-full">
                <Image
                    src={imgSrc}
                    loading="lazy"
                    alt=""
                    className="rounded-md brightness-50 phone:rounded-none phone:w-full group-odd/checklist:mr-auto group-even/checklist:ml-auto shadow-xl w-auto h-full overflow-hidden object-cover object-center"
                />
            </div>
            <div className="content p-6 phone:bg-none bg-gradient-to-bl group-odd/checklist:bg-gradient-to-tr rounded-md cs-gradient-3 w-1/2 phone:w-full phone:!left-0 phone:!right-0 flex flex-col min-h-[20rem] phone:min-h-0 shadow-[0_1rem_5rem_rgb(0_0_0_/_.3)] absolute phone:relative phone:translate-y-0 group-even/checklist:right-12 group-odd/checklist:left-12 top-1/2 phone:top-0 -translate-y-1/2 gap-2 phone:gap-2">
                <div className={`title type-head-3 font-[800] text-white`}>{title}</div>
                <div className={`description phone:text-base type-body-lg text-[#555]`}>{description}</div>

                <div className="flex flex-col gap-2 mt-4 feature__checklist">
                    {list.map((e, i) => (
                        <List key={i} primary={primary} dark>
                            {e}
                        </List>
                    ))}
                </div>
            </div>
        </div>
    );
}

// export default function Feature({ imgSrc, dark, title, primary, list, description, className = "" }: IProps) {
//     return (
//         <div data-cy="feature-card" className={`${className} group-checklist min-h-[30rem] relative isolate bg-cs-dark flex justify-end items-center py-4`}>
//             <Image src={imgSrc} alt="" fill className="absolute after:inset-0 z-[-1] after:bg-gradient-to-r after:from-transparent " />
//         </div>
//     );
// }
