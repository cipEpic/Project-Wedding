import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface IProps {
    children: React.ReactNode;
    id: string;
    reverse?: boolean;
}

export default function PartnerSlider({ children, id, reverse }: IProps) {
    return (
        <Swiper
            id={id}
            loop
            slidesPerView={1}
            autoplay={{ delay: 0, reverseDirection: reverse }}
            modules={[Autoplay]}
            updateOnWindowResize={false}
            freeMode
            spaceBetween={5}
            speed={6000}
            wrapperClass="swiper-wrapper ease-linear"
            breakpoints={{
                568: {
                    slidesPerView: 1,
                },
                800: {
                    slidesPerView: 2,
                },
            }}
            draggable={false}
            allowTouchMove={false}
            className="w-full"
        >
            {children}
            {children}
            {children}
        </Swiper>
    );
}
