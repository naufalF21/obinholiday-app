"use client";

import { DestinationCard } from "@/components/ui/card";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PopulerDestination = () => {
	const destinations = [
		{
			province: "Bali",
			location: "Nusa Dua",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
			rating: 4.5,
			price: 500000,
		},
		{
			province: "Sulawesi Utara",
			location: "Taman Bunaken",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
			rating: 4.4,
			price: 700000,
		},
		{
			province: "NTB",
			location: "Gunung Rinjani",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
			rating: 4.6,
			price: 600000,
		},
		{
			province: "Sumatera Utara",
			location: "Danau Toba",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
			rating: 4.5,
			price: 800000,
		},
	];

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
						{destinations.map((destination) => (
							<SwiperSlide key={destination.location}>
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
