"use client";

import { useState } from "react";
import Image from "next/image";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { DestinationInterface } from "@/types/destination";
import { Swiper, SwiperSlide } from "swiper/react";
import { TransportationInterface } from "@/types/transportation";

const Gallery = ({ data }: { data: DestinationInterface | TransportationInterface }) => {
	const { image, images = [], videos = [] } = data;

	const mediaList: string[] = [...images, ...videos];
	const [defaultMedia, setDefaultMedia] = useState<string>(image);

	// ✅ Cek apakah media ini termasuk di daftar videos
	const isVideo = (url: string): boolean => {
		return videos.includes(url);
	};

	const handleMediaChange = (item: string): void => {
		setDefaultMedia(item);
	};

	return (
		<div className="flex flex-col gap-6">
			{/* ✅ Media utama */}
			{isVideo(defaultMedia) ? (
				<video
					src={defaultMedia}
					controls
					className="w-full h-[300px] md:h-[550px] object-cover rounded-xl drop-shadow-xl"
				/>
			) : (
				<Zoom>
					<Image
						src={defaultMedia}
						alt="img"
						width={1000}
						height={1000}
						loading="eager"
						className="w-full h-[300px] md:h-[550px] object-cover rounded-xl drop-shadow-xl"
					/>
				</Zoom>
			)}

			{/* ✅ Thumbnail Swiper */}
			<div>
				<Swiper
					slidesPerView={3}
					breakpoints={{
						480: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 5,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 6,
							spaceBetween: 20,
						},
					}}
				>
					{mediaList.map((item, index) => (
						<SwiperSlide key={index}>
							<button onClick={() => handleMediaChange(item)}>
								{isVideo(item) ? (
									<video
										src={item}
										muted
										// loop
										// autoPlay
										className="h-[100px] w-[100px] object-cover rounded-lg drop-shadow-xl"
									/>
								) : (
									<Image
										src={item}
										alt="img"
										width={1000}
										height={1000}
										loading="eager"
										className="h-[100px] w-[100px] object-cover rounded-lg drop-shadow-xl"
									/>
								)}
							</button>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export { Gallery };
