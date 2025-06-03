"use client";

import { DestinationCard } from "@/components/ui/card";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const PopulerDestination = () => {
	const destinations = [
		{
			id: 1,
			province: "Bali",
			name: "Nusa Dua",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
			rating: 4.5,
			price: 500000,
		},
		{
			id: 2,
			province: "Sulawesi Utara",
			name: "Taman Bunaken",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
			rating: 4.4,
			price: 700000,
		},
		{
			id: 3,
			province: "NTB",
			name: "Gunung Rinjani",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
			rating: 4.6,
			price: 600000,
		},
		{
			id: 4,
			province: "Sumatera Utara",
			name: "Danau Toba",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
			rating: 4.5,
			price: 800000,
		},
	];

	return (
		<header className="w-full py-14 min-h-screen">
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
						loop={true}
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
					>
						{destinations.map((destination) => (
							<SwiperSlide key={destination.id}>
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
