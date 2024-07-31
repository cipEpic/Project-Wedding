import Image from "next/image";
import { StaticImageData } from "next/image";

interface IProps {
  src?: string;
  imgSrc1: StaticImageData;
  imgSrc2: StaticImageData;
  alt?: string;
  text?: string;
  title?: string;
  className?: string;
}

export default function VMCard({
  src,
  imgSrc1,
  imgSrc2,
  alt = "",
  text = "",
  title = "",
  className,
}: Omit<IProps, "arrowright" | "arrowleft">) {
  return (
    <div
      data-cy="vmcard"
      className={`group/w-card relative bg-white w-1/2 h-auto px-[20px] py-[2%] flex flex-col  shadow-[2px_2px_2rem_rgb(0_0_0_/_.2)] border-accent-600 border-l-[9px] rounded-md isolate tablet:w-1/2 phone:w-full phone:h-[31rem] phone:gap-3 ${className}`}
    >
      <div className="flex items-center">
        <Image
          src={imgSrc1}
          alt={alt}
          className="icon w-[55px] phone:mt-[3%] tablet:mt-[4%]"
        />
        <Image src={imgSrc2}
          alt={alt}
          className="icon w-[55px] phone:mt-[3%] tablet:mt-[4%] ml-auto" />
      </div>
      <p className="text type-head-3 w-[85%] font-bold mt-[2%] phone:text-[32px] phone:mt-[3%] tablet:mt-[3%] tablet:text-2xl">
        {title}
      </p>

      <div className="h-[60%] pb-[1%] mt-[2%] flex justify-center phone:mt-[2%]">
        <p className="text type-body-lg w-[96%] font-light phone:text-[18px] tablet:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}
