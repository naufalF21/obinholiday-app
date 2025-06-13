"use client";

import { DestinationCard } from "@/components/ui/card";
import { LocalData } from "@/data/destination/local";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PopulerDestination = () => {
	return (
		<header className="w-full pt-16">
			<div className="container mx-auto px-6 lg:px-10">
				<div className="flex justify-between items-center">
					<div className="w-full">
						<h2 className="font-semibold capitalize text-2xl md:text-3xl text-black mb-12">
							populer <span className="text-[#134B70]">destination</span> Obin Holiday
						</h2>
					</div>
				</div>
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
						className="h-[460px] md:h-[470px]"
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
						{LocalData.map((destination, index) => (
							<SwiperSlide key={index}>
								<DestinationCard destination={destination} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</header>
	);
};

export default PopulerDestination;
