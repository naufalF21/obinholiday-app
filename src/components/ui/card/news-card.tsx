import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

const FeaturedNewsCard = () => {
	return (
		<div className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">
			<div className="h-[300px] overflow-hidden">
				<Image
					src="https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg"
					alt="City at night"
					className="w-full h-full object-cover hover:scale-110 transition duration-500"
					width={300}
					height={200}
				/>
			</div>
			<div className="p-8">
				<div className="flex items-center gap-4 mb-4">
					<Image
						src="/assets/logo/icon-logo.png"
						alt="Admin"
						className="w-[40px] h-[40px] rounded-full"
						width={40}
						height={40}
					/>
					<span className="text-gray-600 text-sm">By Admin</span>
					<span className="text-gray-400 text-sm ml-auto">09 February, 2024</span>
				</div>
				<h2 className="text-xl font-bold mb-4 hover:text-[#134B70] transition">
					Nightlife Adventures: City Views After Dark
				</h2>
				<p className="text-gray-600 mb-6 text-md">
					Experience the vibrant nightlife and local culture with amazing entertainment
					and culinary delights
				</p>
				<a
					href="#"
					className="flex gap-1 items-center text-[#134B70] hover:gap-2.5 transition-all"
				>
					Read More <Icon icon="mage:arrow-right" width="18" height="18" />
				</a>
			</div>
		</div>
	);
};

interface NewsCardProps {
	title: string;
	date: string;
	image: string;
}

const SideNewsCard = ({ news }: { news: NewsCardProps }) => {
	const { title, date, image } = news;

	return (
		<div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
			<div className="w-full lg:w-[200px] h-[200px] lg:h-[120px] overflow-hidden">
				<Image
					src={image}
					alt={title}
					className="w-full h-full object-cover hover:scale-110 transition duration-500"
					width={200}
					height={250}
				/>
			</div>
			<div className="px-5 py-5 lg:py-0 flex flex-col justify-center">
				<h3 className="font-bold mb-2 hover:text-primary transition text-lg lg:text-base">
					{title}
				</h3>
				<p className="text-gray-400 text-sm mb-3">{date}</p>
				<a
					href="#"
					className="text-primary text-sm hover:gap-2.5 transition-all flex gap-1 items-center"
				>
					Read More <Icon icon="mage:arrow-right" width="16" height="16" />
				</a>
			</div>
		</div>
	);
};

export { FeaturedNewsCard, SideNewsCard };
