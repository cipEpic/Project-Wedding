import { IProps as IConfig } from "./index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards, EffectCoverflow, EffectCreative } from "swiper";
import Image from "next/image";

interface IProps {
	images: IConfig["images"];
	type?: "cards" | "coverflow";
}

export default function Carousel({ images, type }: IProps) {
	return (
		<Swiper
			wrapperClass="swiper-wrapper h-[25rem] items-center"
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			centeredSlides={true}
			effect={type == "cards" ? "cards" : type == "coverflow" ? "coverflow" : "slide"}
			spaceBetween={100}
			// slidesPerView={1}
			breakpoints={{
				768: {
					slidesPerView: 2,
				},
			}}
			pagination={{ clickable: false, bulletClass: "swiper-pagination-bullet bg-accent w-2 h-2 aspect-square" }}
			modules={[Pagination, Autoplay].concat(type == "cards" ? [EffectCards] : type == "coverflow" ? [EffectCoverflow] : [])}
			className="w-full bg-cs-white-200 py-24 phone:container"
		>
			{images.map((e, i) => {
				return (
					<SwiperSlide className="grid place-items-center select-none cursor-grab rounded-xl phone:rounded-sm overflow-hidden" key={i}>
						<div className="w-full relative h-auto object-cover shadow-lg">
							<Image loader={() => e.url} src={e.url} alt={e.title} className="w-full rounded-xl phone:rounded-sm h-auto" width="100" height="100" />
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
