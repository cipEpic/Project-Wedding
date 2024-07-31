import { FaCheck, FaCheckCircle } from "react-icons/fa";
import Skeleton from "../Skeleton";

interface IProps {
    children: React.ReactNode;
    primary?: boolean;
    dark?: boolean;
}

export default function Checklist({ children, primary, dark }: IProps) {
    return (
        <div className={`flex slide slide-right phone:w-full gap-4 justify-start items-center type-body-sm text-white`}>
            <FaCheckCircle className="text-[1.5em] shrink-0 text-white" /> <p className={`text-white`}>{children}</p>
        </div>
    );
}
