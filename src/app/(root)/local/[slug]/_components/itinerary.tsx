"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { DestinationInterface } from "@/types/destination";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const Itinerary = ({ data }: { data: DestinationInterface }) => {
	const [showItinerary, setShowItinerary] = useState(true);

	return (
		<div className="flex flex-col border border-gray-300 p-8 gap-6">
			<div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
				<h3 className="md:text-xl">Rangkaian Perjalanan Anda</h3>
				<Button
					variant="outline"
					size="sm"
					className="text-sm cursor-pointer"
					onClick={() => setShowItinerary((prev) => !prev)}
				>
					{showItinerary ? "Sembunyikan" : "Tampilkan"}
				</Button>
			</div>
			<div className={showItinerary ? "block" : "hidden"}>
				<Accordion type="multiple">
					{data.itinerary?.map((item, index) => (
						<AccordionItem value={`day-${item.day}`} key={index}>
							<AccordionTrigger className="text-base">
								Hari ke {item.day}
							</AccordionTrigger>
							<AccordionContent>
								<ul>
									{item.activities.map((activity, index) => (
										<li
											key={index}
											className="text-sm/8 tracking-wider flex items-baseline gap-2"
										>
											<span>
												<Icon
													icon="radix-icons:dot"
													width="15"
													height="15"
												/>
											</span>
											{activity}
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default Itinerary;
