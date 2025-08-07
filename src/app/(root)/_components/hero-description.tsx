import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroDescription = () => {
	return (
		<>
			<div className="w-full md:hidden">
				<div className="h-[300px] overflow-hidden rounded-lg relative">
					<Image
						src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg"
						alt=""
						width={500}
						height={500}
						className="bg-center object-cover w-full h-full"
					/>
				</div>
			</div>
			<div className="w-full md:w-1/2">
				<div className="flex gap-2 items-center py-10">
					<Icon
						icon="mage:compass-fill"
						width="24"
						height="24"
						className="text-primary"
					/>
					<p className="font-semibold capitalize text-sm text-black">
						Let&apos;s go around the world
					</p>
				</div>
				<h1 className="font-bold text-3xl capitalize text-black max-w-lg leading-none mb-6 md:text-5xl">
					Let&apos;s travel and{" "}
					<span className="font-taprom text-[#134B70] ">Visit new</span>, very beautiful
					places
				</h1>
				<p className="leading-tights max-w-lg text-gray-500 text-sm mb-6 capitalize">
					don&apos;t delay, it&apos;s time for you to travel around the world and discover
					other new andinteresting things.
				</p>
				<div className="flex gap-5 flex-col md:flex-row">
					<Link href="/local" className="md:w-fit">
						<Button className="text-base w-full">
							Explore Now
							<Icon icon="mage:caret-right-fill" width="24" height="24" />
						</Button>
					</Link>
					{/* <Link href="/international" className="md:w-fit">
						<Button variant="outline" className="text-base w-full">
							Packages
							<Icon icon="mage:archive-fill" width="24" height="24" />
						</Button>
					</Link> */}
				</div>
			</div>
		</>
	);
};

export default HeroDescription;
