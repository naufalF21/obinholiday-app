import TravelCard from "@/components/ui/card/travel-card";

export default function Transportation() {
	const destination = {
		province: "Jetbus 5",
		location: "Big Bus",
		image: "https://kerubpariwisata.id/wp-content/uploads/2024/11/kerubpariwisata.id-foto-bus-pariwisata-kerub-jetbus-5-terbaru-a.jpg",
		rating: 4.5,
		price: 500000,
		icon: "mdi:bus",
	};

	return (
		<header id="lokal" className="w-full py-10 relative">
			<div className="container mx-auto px-6 lg:px-10">
				<div className="mb-4">
					<h2 className="text-2xl font-bold mb-8 md:text-start text-center">
						Populer <span className="text-[#134B70]">Transportation</span> TravelFun
					</h2>
					<div className="flex flex-col space-x-4 overflow-x-auto py-4 px-2">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
							{Array.from({ length: 8 }, (_, index) => (
								<TravelCard key={index} destination={destination} />
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
