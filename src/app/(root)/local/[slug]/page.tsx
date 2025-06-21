import { LocalData } from "@/data/destination/local";
import InformationSection from "./_components/information-sec";
import Itinerary from "./_components/itinerary";
import OtherDestination from "./_components/other-destination";
import FlightsSec from "./_components/flights-sec";
import NotesSec from "./_components/notes-sec";

const Page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;
	const data = LocalData.filter((item) => item.link === slug)[0];

	return (
		<header id="lokal" className="w-full relative">
			<div className="container mx-auto py-10 px-6 lg:px-10">
				<div className="flex flex-col gap-16">
					<InformationSection data={data} />
					{data.flights && <FlightsSec data={data} />}
					<Itinerary data={data} />
					{data.notes && <NotesSec data={data} />}
					<OtherDestination />
				</div>
			</div>
		</header>
	);
};

export default Page;
