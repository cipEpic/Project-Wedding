import { FilterType } from "./FilterItem";

interface IProps {
	tag?: FilterType;
	activeTag: FilterType | undefined;
	onClick: (v: any) => any;
	children: React.ReactNode;
}

export default function FilterNav({ tag, activeTag, onClick, children }: IProps) {
	let isActive = tag == activeTag;

    return (
        <button
            onClick={onClick}
            data-tag={tag}
            className={`${isActive ? "!bg-accent !text-white" : ""}  rounded-sm text-accent hover:bg-accent hover:bg-opacity-50 hover:text-white border-accent border px-4 py-2 btn outline-none text-base phone:overflow-x-scroll grid-cols-2 `}
        >
            {children}
        </button>
    );
}
