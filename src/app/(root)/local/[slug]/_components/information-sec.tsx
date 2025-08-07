import { Button, ShareBtn } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DestinationInterface } from "@/types/destination";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Gallery } from "@/components/ui/gallery";

const InformationSection = ({ data }: { data: DestinationInterface }) => {
	const { location, name, duration, price } = data;

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
							<BreadcrumbLink href="/local">Overland Indonesia</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{name}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<h1 className="font-semibold text-3xl/normal">
					Paket Wisata {name} {duration}
				</h1>
				<hr />
				<ul className="flex flex-col gap-3">
					<li className="flex md:items-center gap-2">
						<span>
							<Icon icon="mage:map-marker-fill" className="text-primary size-5" />
						</span>
						<span className="text-sm/normal md:text-base">
							Tujuan Wisata: {name}, {location}
						</span>
					</li>
					<li className="flex md:items-center gap-2">
						<span>
							<Icon icon="mage:clock-fill" className="text-primary size-5" />
						</span>
						<span className="text-sm/normal md:text-base">Durasi: {duration}</span>
					</li>
					{typeof price === "object" ? (
						<div className="flex items-start gap-2">
							<span>
								<Icon icon="mage:tag-fill" className="text-primary size-5" />
							</span>
							<span>Harga: </span>
							<ul>
								{Object.entries(price).map(([hotel, price]) => (
									<li key={hotel} className="text-sm/normal md:text-base">
										- {hotel}: Rp. {price.toLocaleString()}
									</li>
								))}
							</ul>
						</div>
					) : (
						<li className="flex md:items-center gap-2">
							<span>
								<Icon icon="mage:tag-fill" className="text-primary size-5" />
							</span>
							<span>
								<span className="text-sm/normal md:text-base">
									Harga: Rp. {price.toLocaleString()}
								</span>
							</span>
						</li>
					)}
				</ul>

				<p className="text-sm tracking-wider leading-relaxed">
					Nikmati perjalanan wisata yang telah direncanakan dengan matang ke {name},{" "}
					{location}. Paket {duration} ini menawarkan pengalaman liburan yang nyaman
					dengan jadwal yang terorganisir, sehingga Anda dapat fokus menikmati setiap
					momen tanpa perlu khawatir dengan detail perjalanan. Kami telah menyiapkan
					akomodasi terbaik, transportasi yang nyaman, dan pemandu wisata berpengalaman
					untuk memastikan liburan Anda berkesan dan tak terlupakan. Jelajahi keindahan
					alam, budaya, dan kuliner lokal bersama kami.
				</p>

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
