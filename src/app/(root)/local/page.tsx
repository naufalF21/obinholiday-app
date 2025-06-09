import TravelCard from "@/components/ui/card/travel-card";

export default function Local() {
	const destination = {
		province: "Bali",
		location: "Nusa Dua Satu",
		image: "https://storage.googleapis.com/a1aa/image/0sh4Rqm1Wjsagm2ZcS4F9Rrm-HEyxFmddMZQQ2lkJwE.jpg",
		rating: 4.5,
		price: 500000,
		icon: "mage:map-marker-fill",
	};

	return (
		<header id="lokal" className="w-full py-10 relative">
			<div className="container mx-auto px-6 lg:px-10">
				<div className="mb-4">
					<h2 className="text-2xl font-bold mb-8 md:text-start text-center">
						Populer Local <span className="text-[#134B70]">Destination</span> TravelFun
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
