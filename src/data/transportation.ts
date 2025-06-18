import { TransportationInterface } from "@/types/transportation";

export const TransportationData: TransportationInterface[] = [
	{
		type: "Big Bus",
		model: "JetBus 5",
		image: "https://kerubpariwisata.id/wp-content/uploads/2024/11/kerubpariwisata.id-foto-bus-pariwisata-kerub-jetbus-5-terbaru-a.jpg",
		rating: 4.3,
		icon: "mdi:car",
		link: "big-bus",
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
		type: "Hiace Comuter",
		model: null,
		image: "https://kerubpariwisata.id/wp-content/uploads/2024/11/kerubpariwisata.id-foto-bus-pariwisata-kerub-jetbus-5-terbaru-a.jpg",
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
		image: "https://kerubpariwisata.id/wp-content/uploads/2024/11/kerubpariwisata.id-foto-bus-pariwisata-kerub-jetbus-5-terbaru-a.jpg",
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
