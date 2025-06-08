"use client";

import { FeaturedNewsCard, SideNewsCard } from "@/components/ui/card";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const News = () => {
	const sideNews = [
		{
			title: "Mountain Peak Adventures",
			date: "10 February, 2024",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
		},
		{
			title: "Desert Safari Experience",
			date: "21 February, 2024",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
		},
		{
			title: "Forest Trail Discovery",
			date: "24 February, 2024",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
		},
		{
			title: "Beachside Relaxation",
			date: "28 February, 2024",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
		},
	];

	return (
		<header className="w-full py-20 bg-gray-50">
			<div className="container mx-auto px-6 lg:px-10">
				<h1 className="text-xl md:text-3xl font-bold text-center mb-12">
					Latest News About <br />
					Our <span className="text-[#134B70]">Tourist Destinations</span>
				</h1>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<FeaturedNewsCard />

					<div className="hidden lg:flex flex-col justify-between gap-5">
						{sideNews.map((news, index) => (
							<SideNewsCard key={index} news={news} />
						))}
					</div>

					<div className="lg:hidden relative">
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
								768: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
							}}
							className="h-[370px] md:h-[260px]"
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
							{sideNews.map((news, index) => (
								<SwiperSlide key={index}>
									<SideNewsCard news={news} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</header>
	);
};

export default News;
