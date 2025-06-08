"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

interface PlaceCardProps {
	name: string;
	location: string;
	image: string;
}

const PlaceCard = ({ place }: { place: PlaceCardProps }) => {
	const { name, location, image } = place;
	const [like, setLike] = React.useState(false);

	return (
		<div className="w-full md:w-1/3 relative rounded-md shadow-md">
			<div className="w-full h-[260px] overflow-hidden rounded-t-md group">
				<Image
					src={image}
					alt=""
					className="w-full h-full object-cover transition duration-500 group-hover:scale-125"
					width={400}
					height={300}
				/>
			</div>
			<div className="flex flex-col gap-3 p-5">
				<div className="flex justify-between items-center">
					<h3 className="font-bold capitalize text-xl md:text-lg lg:text-2xl text-black">
						{name}
					</h3>
					<button className="cursor-pointer" onClick={() => setLike(!like)}>
						{like ? (
							<Icon
								icon="mage:heart-fill"
								width="24"
								height="24"
								className="text-red-500"
							/>
						) : (
							<Icon
								icon="mage:heart"
								width="24"
								height="24"
								className="text-red-500"
							/>
						)}
					</button>
				</div>
				<div className="flex gap-2 items-center">
					<Icon
						icon="mage:location-fill"
						width="24"
						height="24"
						className="text-primary"
					/>
					<h3 className="text-base font-medium capitalize">{location}</h3>
				</div>
			</div>
		</div>
	);
};

export { PlaceCard };
