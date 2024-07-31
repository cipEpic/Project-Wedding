// import Image, { StaticImageData } from "next/image";
// import Skeleton from "../Skeleton";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from "swiper";
// import 'swiper/css';

// interface IProps {
// 	imgSrc1: StaticImageData;
// 	imgSrc2: StaticImageData;
// 	imgSrc3: StaticImageData;
// 	dark?: boolean;
// 	primary?: boolean;
// 	year1: string;
// 	year2: string;
// 	year3: string;
// 	title1: string;
// 	title2: string;
// 	title3: string;
// 	description1: string;
// 	description2: string;
// 	description3: string;
// 	className?: string;
// }

// export default function Milestones({ imgSrc1, imgSrc2, imgSrc3, dark, year1, year2, year3, title1, title2, title3, primary, description1, description2, description3, className = "" }: IProps) {
// 	SwiperCore.use([Autoplay])
// 	return (
// 		<div data-cy="milestones" className={`${className} content slide slide-up flex justify-between phone:flex-col`}>
// 			<Swiper
// 				slidesPerView={1}
// 				loop={true}
// 				autoplay={{
// 					delay: 2000
// 				}}
// 			>
// 				<SwiperSlide>
// 				<Skeleton variant="rounded" className="w-full h-full phone:aspect-video">
// 						<div style={{ position: 'relative' }}>
// 							<Image
// 								src={imgSrc1}
// 								loading="lazy"
// 								alt=""
// 								className="rounded-md brightness-75 phone:w-full group-odd/checklist:mr-auto group-even/checklist:ml-auto shadow-xl w-auto h-full overflow-hidden object-cover object-center  w-auto object-contain "
// 								style={{ borderRadius: '20px', objectFit: 'cover' }}
// 							/>
// 							<div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(251, 174, 60, 0.9)', borderRadius: '20px', zIndex: 1 }}></div>
// 							<div className={`year1 type-head-5 font-bold text-[#FFFFFF]`} style={{ position: 'absolute', top: 'calc(65% - 4rem)', left: '2%', zIndex: 2 }}>{year1}</div>
// 							<div className={`title1 type-head-1 font-bold text-[#FFFFFF]`} style={{ position: 'absolute', top: '65%', left: '2%', transform: 'translate(0, -50%)', zIndex: 2 }}>{title1}</div>
// 							<div className={`description1 phone:text-base text-lg text-[#FFFFFF]`} style={{ position: 'absolute', top: 'calc(65% + 2rem)', left: '2%', zIndex: 2 }}>{description1}</div>
// 						</div>
// 					</Skeleton>
// 				</SwiperSlide>


// 				<SwiperSlide>
// 					<Skeleton variant="rounded" className="w-full h-full phone:aspect-video">
// 						<div style={{ position: 'relative' }}>
// 							<Image
// 								src={imgSrc2}
// 								loading="lazy"
// 								alt=""
// 								className="rounded-md brightness-75 phone:w-full group-odd/checklist:mr-auto group-even/checklist:ml-auto shadow-xl w-auto h-full overflow-hidden object-cover object-center  w-auto object-contain "
// 								style={{ borderRadius: '20px', objectFit: 'cover' }}
// 							/>
// 							<div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(220, 0, 50, 0.9)', borderRadius: '20px', zIndex: 1 }}></div>
// 							<div className={`year2 type-head-5 font-bold text-[#FFFFFF]`} style={{ position: 'absolute', top: 'calc(65% - 6rem)', left: '2%', zIndex: 2 }}>{year2}</div>
// 							<div className={`title2 type-head-1 font-bold text-[#FFFFFF]`} style={{ position: 'absolute', top: '65%', left: '2%', transform: 'translate(0, -50%)', zIndex: 2 }}>{title2}</div>
// 							<div className={`description2 phone:text-base text-lg text-[#FFFFFF]`} style={{ position: 'absolute', top: 'calc(65% + 4rem)', left: '2%', zIndex: 2 }}>{description2}</div>
// 						</div>
// 					</Skeleton>
// 				</SwiperSlide>

// 				<SwiperSlide>
// 					<Skeleton variant="rounded" className="w-full h-full phone:aspect-video">
// 						<div style={{ position: 'relative' }}>
// 							<Image
// 								src={imgSrc3}
// 								loading="lazy"
// 								alt=""
// 								className="rounded-md brightness-75 phone:w-full group-odd/checklist:mr-auto group-even/checklist:ml-auto shadow-xl w-auto h-full overflow-hidden object-cover object-center  w-auto object-contain "
// 								style={{ borderRadius: '20px', objectFit: 'cover' }}
// 							/>
// 							<div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10, 37, 64, 0.9)', borderRadius: '20px', zIndex: 1 }}></div>
// 							<div className={`year1 type-head-5 font-bold text-[#FFFFFF]`} style={{ position: 'absolute', top: 'calc(65% - 4rem)', left: '2%', zIndex: 2 }}>{year3}</div>
// 							<div className={`title1 type-head-1 font-bold text-[#FFFFFF]`} style={{ position: 'absolute', top: '65%', left: '2%', transform: 'translate(0, -50%)', zIndex: 2 }}>{title3}</div>
// 							<div className={`description1 phone:text-base text-lg text-[#FFFFFF]`} style={{ position: 'absolute', top: 'calc(65% + 2rem)', left: '2%', zIndex: 2 }}>{description3}</div>
// 						</div>
// 					</Skeleton>
// 				</SwiperSlide>
// 			</Swiper>
// 		</div>
// 	);
// }

import Image, { StaticImageData } from "next/image";
import Skeleton from "../Skeleton";

interface IProps {
  imgSrc1: StaticImageData;
  imgSrc2: StaticImageData;
  imgSrc3: StaticImageData;
  dark?: boolean;
  primary?: boolean;
  year1: string;
  year2: string;
  year3: string;
  title1: string;
  title2: string;
  title3: string;
  description1: string;
  description2: string;
  description3: string;
  className?: string;
}

export default function Milestones({
  imgSrc1,
  imgSrc2,
  imgSrc3,
  dark,
  year1,
  year2,
  year3,
  title1,
  title2,
  title3,
  primary,
  description1,
  description2,
  description3,
  className = "",
}: IProps) {
  return (
    <div
      data-cy="milestones"
      className={`${className} content slide slide-up flex justify-between phone:flex-col`}
    >
      <div className="grid grid-cols-1 gap-6 phone:grid-cols-1">
        <div className="relative">
          <Skeleton variant="rounded" className="w-full h-full phone:aspect-video">
            <div style={{ position: 'relative' }}>
              <Image
                src={imgSrc1}
                loading="lazy"
                alt=""
                className="rounded-md brightness-75 phone:w-full group-odd/checklist:mr-auto group-even/checklist:ml-auto shadow-xl w-auto h-full overflow-hidden object-cover object-center  w-auto object-contain "
                style={{ borderRadius: '20px', objectFit: 'cover' }}
              />
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(251, 174, 60, 0.9)',
                  borderRadius: '20px',
                  zIndex: 1,
                }}
              ></div>
              <div
                className={`year1 type-head-5 font-bold text-[#FFFFFF]`}
                style={{
                  position: 'absolute',
                  top: 'calc(65% - 4rem)',
                  left: '2%',
                  zIndex: 2,
                }}
              >
                {year1}
              </div>
              <div
                className={`title1 type-head-1 font-bold text-[#FFFFFF]`}
                style={{
                  position: 'absolute',
                  top: '65%',
                  left: '2%',
                  transform: 'translate(0, -50%)',
                  zIndex: 2,
                }}
              >
                {title1}
              </div>
              <div
                className={`description1 phone:text-base text-lg text-[#FFFFFF]`}
                style={{
                  position: 'absolute',
                  top: 'calc(65% + 2rem)',
                  left: '2%',
                  zIndex: 2,
                }}
              >
                {description1}
              </div>
            </div>
          </Skeleton>
        </div>
		
		<div className="relative">
          <Skeleton variant="rounded" className="w-full h-full phone:aspect-video">
            <div style={{ position: 'relative' }}>
              <Image
                src={imgSrc2}
                loading="lazy"
                alt=""
                className="rounded-md brightness-75 phone:w-full group-odd/checklist:mr-auto group-even/checklist:ml-auto shadow-xl w-auto h-full overflow-hidden object-cover object-center  w-auto object-contain "
				style={{ borderRadius: '20px', objectFit: 'cover' }}
              />
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(220, 0, 50, 0.9)',
                  borderRadius: '20px',
                  zIndex: 1,
                }}
              ></div>
              <div
                className={`year2 type-head-5 font-bold text-[#FFFFFF]`}
                style={{
                  position: 'absolute',
                  top: 'calc(65% - 6rem)',
                  left: '2%',
                  zIndex: 2,
                }}
              >
                {year2}
              </div>
              <div
                className={`title2 type-head-1 font-bold text-[#FFFFFF]`}
                style={{
                  position: 'absolute',
                  top: '65%',
                  left: '2%',
                  transform: 'translate(0, -50%)',
                  zIndex: 2,
                }}
              >
                {title2}
              </div>
              <div
                className={`description2 phone:text-base text-lg text-[#FFFFFF]`}
                style={{
                  position: 'absolute',
                  top: 'calc(65% + 4rem)',
                  left: '2%',
                  zIndex: 2,
                }}
              >
                {description2}
              </div>
            </div>
          </Skeleton>
        </div>
		<div className="relative">
          <Skeleton variant="rounded" className="w-full h-full phone:aspect-video">
            <div style={{ position: 'relative' }}>
              <Image
                src={imgSrc3}
                loading="lazy"
                alt=""
                className="rounded-md brightness-75 phone:w-full group-odd/checklist:mr-auto group-even/checklist:ml-auto shadow-xl w-auto h-full overflow-hidden object-cover object-center  w-auto object-contain "
                style={{ borderRadius: '20px', objectFit: 'cover' }}
              />
              <div
                className="overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(10, 37, 64, 0.9)',
                  borderRadius: '20px',
                  zIndex: 1,
                }}
              ></div>
              <div
                className={`year1 type-head-5 font-bold text-[#FFFFFF]`}
                style={{
                  position: 'absolute',
                  top: 'calc(65% - 4rem)',
                  left: '2%',
                  zIndex: 2,
                }}
              >
                {year3}
              </div>
              <div
                className={`title1 type-head-1 font-bold text-[#FFFFFF]`}
                style={{
                  position: 'absolute',
                  top: '65%',
                  left: '2%',
                  transform: 'translate(0, -50%)',
                  zIndex: 2,
                }}
              >
                {title3}
              </div>
              <div
                className={`description1 phone:text-base text-lg text-[#FFFFFF]`}
                style={{
                  position: 'absolute',
                  top: 'calc(65% + 2rem)',
                  left: '2%',
                  zIndex: 2,
                }}
              >
                {description3}
              </div>
            </div>
          </Skeleton>
        </div>
		</div>
		</div>
);
}