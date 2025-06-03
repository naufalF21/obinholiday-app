import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

interface DestinationCardProps {
	province: string;
	name: string;
	image: string;
	rating: number;
	price: number;
}

const DestinationCard = ({ destination }: { destination: DestinationCardProps }) => {
	const { province, name, image, rating, price } = destination;

	return (
		<div className="w-full relative mb-24">
			<div className="h-[350px]  overflow-hidden rounded-md group">
				<Image
					src={image}
					alt=""
					width={400}
					height={300}
					className="w-full h-full object-cover group-hover:scale-125 transition duration-500"
				/>
			</div>
			<div className="w-full flex justify-center">
				<div className="w-[90%] bg-white rounded-md px-4 py-5 shadow-lg absolute -bottom-16">
					<div className="flex flex-col">
						<div className="flex justify-between mb-2 items-center">
							<div className="flex gap-2 items-center">
								<Icon
									icon="mage:location-fill"
									width="20"
									height="20"
									className="text-primary"
								/>
								<p className="text-xs font-medium capitalize">{province}</p>
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
						<h2 className="font-bold text-lg text-black mb-4 capitalize">{name}</h2>
						<div className="flex justify-between items-center">
							<p className="font-semibold text-lg capitalize text-gray-700">
								Rp. {price.toLocaleString()}
							</p>
							<div className="w-[40px] h-[40px] bg-[#134B70] rounded-full flex justify-center items-center hover:bg-white border shadow-md hover:border-[#134B70] hover:text-[#134B70] text-white cursor-pointer">
								<Icon icon="mage:chevron-right" width="20" height="20" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { DestinationCard };
