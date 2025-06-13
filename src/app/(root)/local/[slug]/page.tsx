import { LocalData } from "@/data/destination/local";
import InformationSection from "./_components/information-sec";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const Page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;
	const data = LocalData.filter((item) => item.link === "local/" + slug)[0];

	return (
		<header id="lokal" className="w-full relative">
			<div className="container mx-auto py-10 px-6 lg:px-10">
				<div className="flex flex-col gap-20">
					<InformationSection data={data} />
					<div className="flex flex-col border border-gray-300 p-8 gap-6">
						<h3>Rangkaian Perjalanan Anda</h3>
						<div>
							<Accordion type="multiple">
								{data.itinerary?.map((item, index) => (
									<AccordionItem value={`day-${item.day}`} key={index}>
										<AccordionTrigger>Hari ke {item.day}</AccordionTrigger>
										<AccordionContent>
											<ul>
												{item.activities.map((activity, index) => (
													<li key={index}>{activity}</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Page;
