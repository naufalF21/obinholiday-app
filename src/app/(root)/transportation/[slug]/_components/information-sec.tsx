import { Button, ShareBtn } from "@/components/ui/button";
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
import Link from "next/link";
import { Gallery } from "@/components/ui/gallery";

const InformationSection = ({ data }: { data: TransportationInterface }) => {
	const { type, options, model } = data;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<Gallery data={data} />
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
										{item.features?.map((feature, index) => (
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
					<ShareBtn />
				</div>

				<div className="flex justify-end">
					<Link
						href="https://wa.me/6282245763021"
						target="_blank"
						rel="noopener noreferrer"
						className="w-fit"
					>
						<Button className="md:w-fit w-full text-base cursor-pointer">
							Pesan via Whatsapp
							<Icon icon="mage:whatsapp" width="24" height="24" />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default InformationSection;
