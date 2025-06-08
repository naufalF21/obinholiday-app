import { PlaceCard } from "@/components/ui/card";
import React from "react";

const NicePlace = () => {
	const places = [
		{
			name: "Camping",
			location: "Lombok, NTB",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
		},
		{
			name: "Scuba Diving",
			location: "Sulawesi Utara",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
		},
		{
			name: "Trekking",
			location: "Sumatera Utara",
			image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg",
		},
	];

	return (
		<header className="w-full py-10 mb-10">
			<div className="container mx-auto px-6 lg:px-10">
				<div className="flex justify-between items-center">
					<div className="w-full">
						<h2 className="font-bold capitalize text-2xl md:text-3xl text-black mb-12">
							nice place <span className="text-[#134B70]">for you</span> to come
						</h2>
					</div>
				</div>
				<div className="w-full flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-8">
					{places.map((place) => (
						<PlaceCard place={place} key={place.name} />
					))}
				</div>
			</div>
		</header>
	);
};

export default NicePlace;
