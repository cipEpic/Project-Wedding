import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface IProps {
  src: StaticImageData;
  alt?: string;
  title: string;
  text: string;
}

export default function Scope({ src, alt = "", title = "", text = "" }: IProps) {
  let [isOpen, setOpen] = useState(false);

  function handleClick(e: any) {
    setOpen(!isOpen);
  }

  return (
    <div data-cy="scope" className="w-full bg-transparent phone:h-auto">
      <div className="flex flex-row items-center px-[20px]">
        <div className="z-[1] opacity-90  ">
          <Image src={src} alt="" className="icon w-[48px] phone:w-auto ml-[-16px] " />
        </div>
        <p className="text type-head-5 font-bold text-[22px] text-[#233B53] phone:text-[15px] text-left ">{title}</p>
      </div>
      <p className="mt-2 text px-[20px] text-[20px] font-medium font-medium text-[#858585] leading-[28px] ml-7 phone:text-[15px] text-left phone:ml-6">{`${text}`}</p>
    </div>
  );

}
