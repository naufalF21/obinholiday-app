"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TransportCard from "@/components/ui/card/transport-card";
import { TransportationData } from "@/data/transportation";

const OtherTransport = () => {
	return (
		<div className="flex flex-col gap-5">
			<h3 className="font-semibold capitalize text-2xl text-black">
				Pilihan Transportasi Lainnya
			</h3>
			<div>
				<Swiper
					spaceBetween={20}
					loop={false}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					breakpoints={{
						480: {
							slidesPerView: 1,
						},
						// when window width is >= 640px
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
					className="h-[500px] md:h-[470px]"
					style={
						{
							"--swiper-pagination-color": "#134B70",
							"--swiper-pagination-bullet-inactive-color": "#999999",
							"--swiper-pagination-bullet-inactive-opacity": "1",
							"--swiper-pagination-bullet-size": "10px",
							"--swiper-pagination-bottom": "0",
							"--swiper-pagination-bullet-horizontal-gap": "6px",
						} as React.CSSProperties
					}
				>
					{TransportationData.map((transport, index) => (
						<SwiperSlide key={index}>
							<TransportCard key={index} transport={transport} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default OtherTransport;
