import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IProps {
  href: string;
  title: string;
  description: string;
  src: StaticImageData;
}

export default function CardStudy({ href, title, description, src }: IProps) {
  return (
    
    <Link href={href} className="rounded-md w-full aspect-[4/3] p-0">
      
      <div className="content gap-4 flex flex-col justify-end items-start h-full relative ">
      <Image src={src} alt="" className="z-[-1] absolute object-contain h-[436px] "/>
        <h1 className=" text-xs text-[#ddd] opacity-75 uppercase text-center absolute h-[70px] pl-10  ">{title}</h1>
        <p className="text-xs text-white text-left absolute h-[110px] pl-10 pr-9 ">{description}</p>
      </div>
    </Link>
    
  );
}
