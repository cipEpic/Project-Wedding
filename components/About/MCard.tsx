import Image from "next/image";
import { StaticImageData } from "next/image";
import '@fontsource/poppins/900.css';

interface IProps {
	src?: string;
	imgSrc: StaticImageData;
	alt?: string;
	textM?: string;
	titleM?: string;
	className?: string;
	redText?: boolean;
}

export default function MCard({
	src,
	imgSrc,
	alt = "",
	textM = "",
	titleM = "",
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
			<p className="textM type-head-3 w-[85%] font-bold mt-[2%] text-center phone:text-[20px] phone:mt-[3%] tablet:mt-[3%] tablet:text-2xl">{titleM}</p>

			<div className={`h-[60%] pb-[1%] mt-[2%] flex justify-center phone:mt-[2%]`}>
				<p className="textM type-body-lg w-[96%] text-center font-light phone:text-[15px] tablet:text-base">
					{textM.split(' ').map((word, i) => (
						<span key={i} className={word === 'streamline' || word === 'operations' || word === 'drive' || word === 'growth' ? 'text-accent' : ''}>
							{word}{' '}
						</span>
					))}
				</p>
			</div>
		</div>
	);
}
