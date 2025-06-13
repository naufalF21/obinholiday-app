import { LocalData } from "@/data/destination/local";
import InformationSection from "./_components/information-sec";
import Itinerary from "./_components/itinerary";

const Page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;
	const data = LocalData.filter((item) => item.link === "local/" + slug)[0];

	return (
		<header id="lokal" className="w-full relative">
			<div className="container mx-auto py-10 px-6 lg:px-10">
				<div className="flex flex-col gap-20">
					<InformationSection data={data} />
					<Itinerary data={data} />
				</div>
			</div>
		</header>
	);
};

export default Page;
