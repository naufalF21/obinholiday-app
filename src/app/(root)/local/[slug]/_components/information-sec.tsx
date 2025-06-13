import { Button } from "@/components/ui/button";
import Image from "next/image";
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

const InformationSection = ({ data }: { data: DestinationInterface }) => {
	const { location, name, duration, price } = data;
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div>
				<Image
					src="https://storage.googleapis.com/a1aa/image/0sh4Rqm1Wjsagm2ZcS4F9Rrm-HEyxFmddMZQQ2lkJwE.jpg"
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
							<BreadcrumbLink href="/local">Wisata Lokal</BreadcrumbLink>
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
					{[
						{
							icon: "mage:map-marker-fill",
							label: "Tujuan Wisata",
							value: `${name}, ${location}`,
						},
						{
							icon: "mage:clock-fill",
							label: "Durasi",
							value: duration,
						},
						{
							icon: "mage:tag-fill",
							label: "Harga",
							value: `Rp. ${price.toLocaleString()}`,
						},
					].map((item, index) => (
						<li key={index} className="flex md:items-center gap-2">
							<span>
								<Icon icon={item.icon} className="text-primary size-5" />
							</span>
							<span className="text-sm/normal md:text-base">
								{item.label}: {item.value}
							</span>
						</li>
					))}
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
