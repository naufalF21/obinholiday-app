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

const FlightsSec = ({ data }: { data: DestinationInterface }) => {
	const [showFlights, setShowFlights] = useState(false);

	return (
		<div className="flex flex-col border border-gray-300 p-8 gap-6">
			<div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
				<h3 className="md:text-xl">Informasi Penerbangan</h3>
				<Button
					variant="outline"
					size="sm"
					className="text-sm cursor-pointer"
					onClick={() => setShowFlights((prev) => !prev)}
				>
					{showFlights ? "Sembunyikan" : "Tampilkan"}
				</Button>
			</div>
			<div className={showFlights ? "block" : "hidden"}>
				<Accordion type="multiple">
					{data.flights?.map((item, index) => (
						<AccordionItem value={item.route} key={index}>
							<AccordionTrigger className="text-base">{item.route}</AccordionTrigger>
							<AccordionContent>
								<ul>
									<li className="text-sm/8 tracking-wider flex items-center gap-2">
										<span>
											<Icon icon="mage:aeroplane" width="18" height="18" />
										</span>
										{item.airline}
									</li>
									<li className="text-sm/8 tracking-wider flex items-center gap-2">
										<span>
											<Icon icon="mage:clock" width="18" height="18" />
										</span>
										{item.time}
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FlightsSec;
