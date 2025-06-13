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
		<div className="grid grid-cols-2 gap-12">
			<div>
				<Image
					src="https://storage.googleapis.com/a1aa/image/0sh4Rqm1Wjsagm2ZcS4F9Rrm-HEyxFmddMZQQ2lkJwE.jpg"
					alt="img"
					width={1000}
					height={1000}
					className="w-full h-[600px] object-cover rounded-xl drop-shadow-xl"
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
				<h1 className="font-semibold text-3xl">
					Paket Wisata {name} {duration}
				</h1>
				<hr />
				<ul className="flex flex-col gap-3">
					<li className="flex items-center gap-2">
						<Icon
							icon="mage:map-marker-fill"
							width="20"
							height="20"
							className="text-primary"
						/>
						<span>
							Tujuan Wisata: {name}, {location}
						</span>
					</li>
					<li className="flex items-center gap-2">
						<Icon
							icon="mage:clock-fill"
							width="20"
							height="20"
							className="text-primary"
						/>
						<span>Durasi: {duration}</span>
					</li>
					<li className="flex items-center gap-2">
						<Icon
							icon="mage:tag-fill"
							width="20"
							height="20"
							className="text-primary"
						/>
						<span>Harga: Rp. {price.toLocaleString()}</span>
					</li>
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
						<li>
							<Button variant="outline">
								<Icon icon="mage:facebook" width="24" height="24" />
								Facebook
							</Button>
						</li>
						<li>
							<Button variant="outline">
								<Icon icon="mage:whatsapp" width="24" height="24" />
								Whatsapp
							</Button>
						</li>
						<li>
							<Button variant="outline">
								<Icon icon="mage:share" width="24" height="24" />
								More
							</Button>
						</li>
					</ul>
				</div>

				<div className="flex justify-end">
					<Button className="w-fit text-base">
						Book Now
						<Icon icon="mage:whatsapp" width="24" height="24" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default InformationSection;
