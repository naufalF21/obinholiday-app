import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TransportationInterface } from "@/types/transportation";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const InformationSection = ({ data }: { data: TransportationInterface }) => {
	const { type, image, options, model } = data;
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div>
				<Image
					src={image}
					alt="img"
					width={1000}
					height={1000}
					className="w-full h-[300px] lg:h-[600px] object-cover rounded-xl drop-shadow-xl"
				/>
			</div>
			<div className="flex flex-col gap-6">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Beranda</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="/transportation">Transportasi</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{type}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<h1 className="font-semibold text-3xl/normal">
					{type} {model ? `dengan model ${model}` : ""}
				</h1>
				<hr />
				<ul>
					<Accordion type="multiple">
						{options?.map((item, index) => (
							<AccordionItem key={index} value={`opsi-${index + 1}`}>
								<AccordionTrigger className="text-base">
									Opsi ke {index + 1} (Rp. {item.price_per_day.toLocaleString()})
								</AccordionTrigger>
								<AccordionContent>
									<span>- Kapasitas: {item.capacity}</span>
									<div className="flex flex-col">
										{item.features.map((feature, index) => (
											<span key={index}>- {feature}</span>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</ul>

				<p className="text-sm tracking-wider leading-relaxed"></p>

				<div className="flex flex-col gap-3">
					<span>Share:</span>
					<ul className="flex gap-5">
						{[
							{ icon: "mage:facebook", label: "Facebook" },
							{ icon: "mage:whatsapp", label: "Whatsapp" },
							{ icon: "mage:share", label: "More" },
						].map((item, index) => (
							<li key={index}>
								<Button variant="outline">
									<Icon icon={item.icon} width="24" height="24" />
									<span className="hidden md:block">{item.label}</span>
								</Button>
							</li>
						))}
					</ul>
				</div>

				<div className="flex justify-end">
					<Button className="md:w-fit w-full text-base">
						Book Now
						<Icon icon="mage:whatsapp" width="24" height="24" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default InformationSection;
