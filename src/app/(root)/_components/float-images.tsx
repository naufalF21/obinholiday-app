import Image from "next/image";
import { Icon } from "@iconify/react";

const FloatImages = () => {
	const textFloat = [
		{ text: "Best Place", icon: "mage:chart-up-fill" },
		{ text: "Best Photo", icon: "mage:camera-fill" },
		{ text: "Best Location", icon: "mage:location-fill" },
	];

	return (
		<div className="w-full md:w-1/2 relative hidden md:block">
			<div className="w-[230px] h-[300px] rounded-lg border-[5px] border-white overflow-hidden absolute -top-5 right-32">
				<Image
					src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg"
					alt=""
					width={230}
					height={300}
					className="object-cover"
				/>
			</div>
			<div className="w-[200px] h-[230px] rounded-lg border-[5px] border-white overflow-hidden absolute left-32 -bottom-10 z-20">
				<Image
					src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg"
					alt=""
					width={200}
					height={500}
					className="object-cover h-full"
				/>
			</div>
			<div className="w-[230px] h-[300px] rounded-lg border-[5px] border-white overflow-hidden absolute bottom-5 right-56 z-20">
				<Image
					src="https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg"
					alt=""
					width={230}
					height={300}
					className="object-cover"
				/>
			</div>
			<div className="w-[165px] h-[70px] px-[5px] mt-3 bg-white rounded-md shadow-lg flex items-center gap-2 absolute right-9 z-30">
				<div className="w-[70px] h-[50px] rounded-md overflow-hidden">
					<Image
						src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg"
						alt=""
						width={70}
						height={50}
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="flex flex-col">
					<h4 className="font-semibold text-sm capitalize">travel plan</h4>
					<p className="text-[10px] capitalize">plan first before traveling</p>
				</div>
			</div>
			<div className="w-[145px] h-[105px] bg-white py-2 px-3 rounded-md shadow-lg flex flex-col items-start justify-center absolute z-30 -bottom-5 left-10">
				{textFloat.map((item) => (
					<div className="flex gap-2 mb-2" key={item.text}>
						<Icon icon={item.icon} width="16" height="16" className="text-primary" />
						<p className="font-normal text-xs ">{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default FloatImages;
