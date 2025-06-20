import TravelCard from "@/components/ui/card/travel-card";
import { InternationalData } from "@/data/destination/international";

export default function International() {
	return (
		<header id="lokal" className="w-full py-10 relative">
			<div className="container mx-auto px-6 lg:px-10">
				<div className="mb-4">
					<h2 className="text-2xl font-bold mb-8 md:text-start text-center">
						Populer International <span className="text-[#134B70]">Destination</span>{" "}
						Obin Holiday
					</h2>
					<div className="flex flex-col space-x-4 overflow-x-auto py-4 px-2">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
							{InternationalData.map((destination, index) => (
								<TravelCard key={index} destination={destination} />
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
