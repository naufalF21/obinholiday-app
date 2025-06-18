"use client";

import { TransportationInterface } from "@/types/transportation";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TransportCard = ({ transport }: { transport: TransportationInterface }) => {
	const { type, model, image, rating, icon, link, options } = transport;

	const pathname = usePathname();
	const updatedLink = pathname === "/transportation" ? `/transportation/${link}` : link;

	return (
		<div className="card-hover bg-white rounded-xl shadow-lg">
			<div className="relative overflow-hidden rounded-t-xl h-56">
				<Image
					alt="Nusa Dua"
					className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
					src={image}
					width={200}
					height={200}
				/>
			</div>
			<div className="py-8 px-6 flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Icon icon={icon} width="16" height="16" className="text-primary" />
						<span className="text-gray-600 text-sm">{model ?? "-"}</span>
					</div>
					<div className="text-gray-600 text-sm flex items-center gap-2">
						<Icon
							icon="mage:star-fill"
							width="16"
							height="16"
							className="text-yellow-400"
						/>
						<span>{rating}</span>
					</div>
				</div>
				<h3 className="text-xl font-semibold">{type}</h3>
				<p className="text-gray-600 text-base">
					Rp. {options?.[0]?.price_per_day.toLocaleString()}
				</p>
				<div className="flex justify-end items-center">
					<Link
						className="plus-button bg-primary text-white rounded-full p-2 hover:shadow-lg w-fit"
						href={updatedLink}
					>
						<Icon icon="mage:plus" className="w-6 h-6" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TransportCard;
