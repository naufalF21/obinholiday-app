"use client";

import { DestinationInterface } from "@/types/destination";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DestinationCard = ({ destination }: { destination: DestinationInterface }) => {
	const { name, location, image, rating, price, link } = destination;

	const pathname = usePathname();
	const updatedLink = pathname === "/" ? `/local/${link}` : link;

	return (
		<div className="w-full relative mb-24">
			<div className="h-[350px]  overflow-hidden rounded-md group">
				<Link href={updatedLink}>
					<Image
						src={image}
						alt=""
						width={400}
						height={300}
						className="w-full h-full object-cover group-hover:scale-125 transition duration-500"
					/>
				</Link>
			</div>
			<div className="w-full flex justify-center">
				<div className="w-[90%] bg-white rounded-md p-6 shadow-lg absolute -bottom-16">
					<div className="flex flex-col">
						<div className="flex justify-between mb-2 items-center">
							<div className="flex gap-2 items-center">
								<Icon
									icon="mage:location-fill"
									width="20"
									height="20"
									className="text-primary"
								/>
								<p className="text-xs font-medium capitalize">{location}</p>
							</div>
							<div className="flex gap-2">
								<Icon
									icon="mage:star-fill"
									width="18"
									height="18"
									className="text-yellow-500"
								/>
								<p className="text-sm font-medium">{rating}</p>
							</div>
						</div>
						<h2 className="font-bold text-lg text-black capitalize min-h-[4rem]">
							{name}
						</h2>
						<div className="flex justify-between items-center">
							<p className="font-semibold text-lg capitalize text-gray-700">
								Rp. {price.toLocaleString()}
							</p>
							<Link
								href={updatedLink}
								className="w-[40px] h-[40px] bg-[#134B70] rounded-full flex justify-center items-center hover:bg-white border shadow-md hover:border-[#134B70] hover:text-[#134B70] text-white cursor-pointer"
							>
								<Icon icon="mage:chevron-right" width="20" height="20" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { DestinationCard };
