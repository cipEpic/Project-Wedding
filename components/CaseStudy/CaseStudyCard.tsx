
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

interface IProps {
  src: StaticImageData;
  alt: string;
  title: React.ReactNode;
  text: string;
  dark?: boolean;
  buttonLabel: string;
  onClick: () => void;
}

export default function Slo({ src, alt = "", title, text = "", dark, buttonLabel, onClick }: IProps) {
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonHover = () => {
    setButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setButtonHovered(false);
  };

  return (
    <div className="flex flex-row bg-white rounded-[10px] border-t border-r border-l phone:flex-col" style={{ fontWeight: '600', boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.1)' }}>
      <div className="">
        <div className="w-[500px] h-[400px] phone:w-[300px] phone:h-[200px] phone:p-2 bg-white flex items-center justify-center rounded-[10px]">
          <Image src={src} alt={alt} loading="lazy" className="object-contain max-w-full max-h-full phone:w-[300px]" />
        </div>
      </div>
      <div className="ml-[0px]">
        <div
          data-cy="Slogan"
          className="h-[400px] w-[500px] rounded-r-[10px] phone:rounded-b-[10px] phone:rounded-br-[10px] phone:border-t phone:border-l-[0px] phone:w-[300px] phone:h-[200px] slide slide-up border-l phone:rounded-r-[0px] bg-[#F6F9FC] p-2  flex flex-col justify-start relative"
          
        >
          <h1 className={`mb-2 text-[24px] phone:text-[12px]  ${dark ? "text-white" : "text-cs-dark"}`} style={{ fontWeight: '600'}}>{title}</h1>
          <p className="text-[20px] phone:text-[10px] text-[#878787] phone:text-left" style={{ fontWeight: '500', textAlign: 'left'}}>{text}</p>

          <button
            className={`absolute rounded-br-[10px] phone:rounded-bl-[10px] bottom-0 left-0 right-0 h-[80px] text-[#DC0032] text-[23px] phone:text-[14px] phone:h-[50px] ${buttonHovered ? "bg-[#DC0032] text-white" : "bg-[#F6F9FC]"} hover:bg-[#DC0032] border-t `}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={onClick}
            style={{ fontWeight: '600' }}
          >
            {buttonLabel}  
          </button>
        </div>
      </div>
    </div>
  );
}