import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface IProps {
    question: string;

    /**
     * @description The answer of the question.
     */
    children: React.ReactNode;
}

export default function FAQList({ question, children }: IProps) {
    const [isOpen, setOpen] = useState(false);

    function handleOpen() {
        setOpen(!isOpen);
    }

    return (
        <div data-cy="faq-item" className="faq__list slide slide-up w-full relative">
            <div onClick={handleOpen} className="faq__question z-index-[2] flex items-center text-xl group/faq sm-phone:text-sm px-4 py-2 shadow-md transition-all duration-300 border-l-[.5rem] border-cs-dark hover:border-accent  cursor-pointer">
                <p className="text-cs-dark-500 transition-all duration-300 group-hover/faq:text-accent-500 font-bold text-ellipsis overflow-hidden">{question}</p>
                <FaAngleDown className={`ml-auto transition-all group-hover/faq:text-accent-500 duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </div>
            <div className={`faq__asnwer ${isOpen ? "max-h-[100vh] py-2" : "max-h-0  py-0"} h-max overflow-hidden transition-all duration-300 pr-4 pl-6 shadow-inner faq__answear sm-phone:text-sm bg-cs-white-200`}>{children}</div>
        </div>
    );
}
