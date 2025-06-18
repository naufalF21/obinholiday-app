import React from "react";
import InformationSection from "./_components/information-sec";
import { TransportationData } from "@/data/transportation";
import OtherDestination from "./_components/other-destination";

const page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;
	const data = TransportationData.filter((item) => item.link === slug)[0];

	return (
		<header id="lokal" className="w-full relative">
			<div className="container mx-auto py-10 px-6 lg:px-10">
				<div className="flex flex-col gap-16">
					<InformationSection data={data} />
					<OtherDestination />
				</div>
			</div>
		</header>
	);
};

export default page;
