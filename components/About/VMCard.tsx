// import Image from "next/image";
// import { StaticImageData } from "next/image";

// interface IProps {
// 	src?: string;
// 	imgSrc: StaticImageData;
// 	alt?: string;
// 	text?: string;
// 	title?: string;
// 	className?: string;
// 	redText?: boolean; // new prop
// }

// export default function VMCard({ src, imgSrc, alt = "", text = "", title = "", className, redText }: Omit<IProps, "arrowright" | "arrowleft">) {
// 	return (
// 		<div data-cy="vmcard" className={`group/w-card relative bg-white w-1/2 h-auto px-[20px] py-[2%] flex flex-col justify-center items-center shadow-[2px_2px_2rem_rgb(0_0_0_/_.2)] border-accent-600 rounded-md isolate tablet:w-1/2 phone:w-full phone:h-[16rem] phone:mb-[10px] phone:gap-3 ${className}`}>
// 			<Image src={imgSrc} alt="" className="icon w-[55px] phone:mt-[3%] tablet:mt-[4%]" />
// 			<p className="text type-head-3 w-[85%] font-bold mt-[2%] text-center phone:text-[32px] phone:mt-[3%] tablet:mt-[3%] tablet:text-2xl">{title}</p>

// 			<div className="h-[60%] pb-[1%] mt-[2%] flex justify-center phone:mt-[2%]" >
// 				<p className="text type-body-lg w-[96%] text-center font-light phone:text-[18px] tablet:text-base">{text}</p>
// 			</div>
// 		</div>
// 	);
// }


import Image from "next/image";
import { StaticImageData } from "next/image";
import '@fontsource/poppins/900.css';

interface IProps {
	src?: string;
	imgSrc: StaticImageData;
	alt?: string;
	textV?: string;
	titleV?: string;
	className?: string;
	redText?: boolean;
}

export default function VMCard({
	src,
	imgSrc,
	alt = "",
	textV = "",
	titleV = "",
	className,
	redText,
}: IProps) {
	return (
		<div
			data-cy="vmcard"
			className={`group/w-card relative bg-white w-1/2 h-auto px-[20px] py-[2%] flex flex-col justify-center items-center shadow-[2px_2px_2rem_rgb(0_0_0_/_.2)] border-accent-600 rounded-md isolate tablet:w-1/2 phone:w-full phone:h-[16rem] phone:mb-[10px] phone:gap-3 ${className || ""
				} ${redText ? "redText" : ""}`}
		>
			<Image src={imgSrc} alt={alt} className="icon w-[55px] phone:mt-[3%] tablet:mt-[4%]" />
			<p className="textV type-head-3 w-[85%] font-bold mt-[2%] text-center phone:text-[20px] phone:mt-[3%] tablet:mt-[3%] tablet:text-2xl" >{titleV}</p>

			<div className={`h-[60%] pb-[1%] mt-[2%] flex justify-center phone:mt-[2%]`}>
				<p className="textV type-body-lg w-[96%] text-center font-light phone:text-[15px] tablet:text-base" >
					{textV.split(' ').map((word, i) => (
						<span key={i} className={word === 'innovative' || word === 'solutions' || word === 'trusted' || word === 'partnerships' ? 'text-accent' : ''}>
							{word}{' '}
						</span>
					))}
				</p>
			</div>
		</div>
	);
}
