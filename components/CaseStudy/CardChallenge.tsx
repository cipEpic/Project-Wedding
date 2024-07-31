import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface IProps {
  src: StaticImageData;
  alt?: string;
  text: string;
}

export default function ChallengeCard({ src, alt = "", text = "" }: IProps) {
  let [isOpen, setOpen] = useState(false);

  function handleClick(e: any) {
    setOpen(!isOpen);
  }

  return (
    <div
      data-cy="challenge-card"
      className="w-full  bg-transparent phone:h-[90px] flip-card mb-[80px]"
    >
      <div className="flip-card-front absolute flex flex-col items-center">
        <div className="px-[14px] opacity-90 phone:px-[11px] ml-[20px] flex items-center">
          <Image
            src={src}
            alt=""
            className="icon w-[48px] phone:w-[36px] ml-[-16px]"
          />
          <p className="mt-2 text w-full type-head-5 font-medium text-[#0A2540] leading-[19px] ml-[20px]">
            {`${text}`}
          </p>
        </div>
      </div>
    </div>
  );
}
