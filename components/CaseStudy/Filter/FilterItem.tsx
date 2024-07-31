import Image from "next/image";
import Link from "next/link";

export type FilterType = "transportation" | "delivery" | "ride_hailing" | "cms" | "logistic";

interface IProps {
    src: string;
    tag: FilterType;
    title: string;
}

export default function FilterItem({ src, tag, title }: IProps) {
    return (
        <div key={title} className="w-full h-auto aspect-video relative" title={title}>
            <Image loader={(s) => src} alt={title} src={src} fill className="object-cover" />
        </div>
    );
}
