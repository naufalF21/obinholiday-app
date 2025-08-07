import { TransportationInterface } from "@/types/transportation";

export const TransportationData: TransportationInterface[] = [
	{
		type: "Big Bus",
		model: "JetBus 5",
		image: "/assets/images/transport/jetbus5-1.jpg",
		images: [
			"/assets/images/transport/jetbus5-1.jpg",
			"/assets/images/transport/jetbus5-2.jpg",
		],
		rating: 4.3,
		icon: "mdi:car",
		link: "big-bus-5",
		note: "Mesin Bus Mercy OH 1626 JetBus 5",
		options: [
			{
				capacity: "59 Orang",
				features: ["Non Toilet"],
				price_per_day: 4500000,
			},
			{
				capacity: "56 Orang",
				features: ["Include Toilet"],
				price_per_day: 4300000,
			},
		],
	},
	{
		type: "Big Bus",
		model: "JetBus 3",
		image: "/assets/images/transport/jetbus3-1.jpg",
		images: [
			"/assets/images/transport/jetbus3-1.jpg",
			"/assets/images/transport/jetbus3-2.jpg",
			"/assets/images/transport/jetbus3-3.jpg",
			"/assets/images/transport/jetbus3-4.jpg",
			"/assets/images/transport/jetbus3-5.jpg",
		],
		rating: 4.3,
		icon: "mdi:car",
		link: "big-bus-3",
		note: "Mesin Bus Mercy OH 1626 JetBus 5",
		options: [
			{
				capacity: "59 Orang",
				features: ["Non Toilet"],
				price_per_day: 4200000,
			},
			{
				capacity: "56 Orang",
				features: ["Include Toilet"],
				price_per_day: 4300000,
			},
			{
				capacity: "45-50 Orang",
				features: [],
				price_per_day: 4300000,
			},
		],
	},
	{
		type: "Hiace Comuter",
		model: null,
		image: "/assets/images/transport/hiace-commuter-4.jpg",
		images: [
			"/assets/images/transport/hiace-commuter-4.jpg",
			"/assets/images/transport/hiace-commuter-2.jpg",
			"/assets/images/transport/hiace-commuter-3.jpg",
			"/assets/images/transport/hiace-commuter-1.jpg",
		],
		rating: 4.3,
		icon: "mdi:car",
		link: "hiace-comuter",
		options: [
			{
				capacity: "14 Orang",
				features: ["Include Driver", "Include BBM"],
				price_per_day: 1500000,
			},
		],
	},
	{
		type: "Hiace Premio Luxury",
		model: null,
		image: "/assets/images/transport/hiace-premio-luxury-1.jpg",
		images: [
			"/assets/images/transport/hiace-premio-luxury-1.jpg",
			"/assets/images/transport/hiace-premio-luxury-2.jpg",
			"/assets/images/transport/hiace-premio-luxury-3.jpg",
		],
		videos: ["https://alhdgvtila.ufs.sh/f/J4P7RNppg9e0OWOTFDiGvPpVks73nzIUhoTy9mWuqeJl15CF"],
		rating: 4.3,
		icon: "mdi:car",
		link: "hiace-premio-luxury",
		options: [
			{
				capacity: "10 Orang",
				features: ["Include Driver", "Include BBM"],
				price_per_day: 2000000,
			},
		],
	},
];
