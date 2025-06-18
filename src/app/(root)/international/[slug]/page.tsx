import { InternationalData } from "@/data/destination/international";
import InformationSection from "./_components/information-sec";
import Itinerary from "./_components/itinerary";
import OtherDestination from "./_components/other-destination";

const Page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;
	const data = InternationalData.filter((item) => item.link === slug)[0];

	return (
		<header id="lokal" className="w-full relative">
			<div className="container mx-auto py-10 px-6 lg:px-10">
				<div className="flex flex-col gap-16">
					<InformationSection data={data} />
					<Itinerary data={data} />
					<OtherDestination />
				</div>
			</div>
		</header>
	);
};

export default Page;
