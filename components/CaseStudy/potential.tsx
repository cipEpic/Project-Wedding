import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

interface IProps {

  text: string;
}

export default function Potential({  text = "" }: IProps) {
  let [isOpen, setOpen] = useState(false);

  function handleClick(e: any) {
    setOpen(!isOpen);
  }

  return (
    <div data-cy="potential" className="w-full bg-transparent phone:h-auto">

      <p className="type-head-5 font-bold text-[24px] text-center text-[#890084] phone:type-head-5 phone:text-[15px]">{`${text}`}</p>
    </div>
  );

}
