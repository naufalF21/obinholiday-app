import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

const TravelCard = () => {
	return (
		<div className="card-hover bg-white rounded-xl shadow-lg">
			<div className="relative overflow-hidden rounded-t-xl h-56">
				<Image
					alt="Nusa Dua"
					className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
					src="https://storage.googleapis.com/a1aa/image/0sh4Rqm1Wjsagm2ZcS4F9Rrm-HEyxFmddMZQQ2lkJwE.jpg"
					width={200}
					height={200}
				/>
			</div>
			<div className="p-6 flex flex-col gap-5">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Icon
							icon="mage:map-marker-fill"
							width="16"
							height="16"
							className="text-primary"
						/>
						<span className="text-gray-600 text-sm">Bali</span>
					</div>
					<div className="text-gray-600 text-sm flex items-center gap-2">
						<Icon
							icon="mage:star-fill"
							width="16"
							height="16"
							className="text-yellow-400"
						/>
						<span>4.5</span>
					</div>
				</div>
				<h3 className="text-xl font-semibold">Nusa Dua Satu</h3>
				<p className="text-gray-600 text-base">Rp. 500.000</p>
				<button className="plus-button bg-primary text-white rounded-full p-2 hover:shadow-lg w-fit">
					<Icon icon="mage:plus" className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
};

export default TravelCard;
