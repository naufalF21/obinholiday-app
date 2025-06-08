import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#EEEEEE] text-[#134B70]">
			<div className="container mx-auto px-6 lg:px-10 py-10">
				<div className="flex flex-col md:flex-row gap-5 lg:gap-10 md:gap-10">
					<div className="w-full flex flex-col gap-5">
						<div className="mx-auto md:mx-0">
							<Image
								src="/assets/logo/logo-and-text.svg"
								alt="logo"
								width={180}
								height={180}
							/>
						</div>
						<div className="flex flex-col gap-3">
							<p className="text-[#134B70] text-sm">
								Experience the world&apos;s finest destinations with our expertly
								curated travel packages.
							</p>
							<ul className="flex items-center md:gap-3 md:justify-start justify-between">
								<li className="hover:bg-primary hover:text-white p-2 hover:rounded-full">
									<Link href="#">
										<Icon icon="hugeicons:facebook-02" width="24" height="24" />
									</Link>
								</li>
								<li className="hover:bg-primary hover:text-white p-2 hover:rounded-full">
									<Link href="#">
										<Icon icon="hugeicons:new-twitter" width="24" height="24" />
									</Link>
								</li>
								<li className="hover:bg-primary hover:text-white p-2 hover:rounded-full">
									<Link href="#">
										<Icon icon="hugeicons:instagram" width="24" height="24" />
									</Link>
								</li>
								<li className="hover:bg-primary hover:text-white p-2 hover:rounded-full">
									<Link href="#">
										<Icon icon="hugeicons:youtube" width="26" height="26" />
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="w-full flex lg:justify-center">
						<div className="flex flex-col text-sm gap-5">
							<h3 className="text-lg font-semibold">Contact Us</h3>
							<div className="flex flex-col gap-3">
								<p className="flex items-center gap-2">
									<Icon icon="mage:map-marker-fill" width="20" height="20" />
									123 Travel Street, Adventure City
								</p>
								<p className="flex items-center gap-2">
									<Icon icon="mage:phone-fill" width="20" height="20" />
									+1 234 567 890
								</p>
								<p className="flex items-center gap-2">
									<Icon icon="mage:email-fill" width="20" height="20" />
									info@travelmate.com
								</p>
							</div>
						</div>
					</div>

					<div className="w-full flex lg:justify-center">
						<div className="flex flex-col text-primary text-sm gap-5">
							<h3 className="text-lg font-semibold">Explore</h3>
							<div className="flex flex-col gap-3">
								<a
									href="#"
									className="hover:text-[#508C9B] transition-colors block"
								>
									About Us
								</a>

								<a
									href="#"
									className="hover:text-[#508C9B] transition-colors block"
								>
									Our Services
								</a>

								<a
									href="#"
									className="hover:text-[#508C9B] transition-colors block"
								>
									Privacy Policy
								</a>

								<a
									href="#"
									className="hover:text-[#508C9B] transition-colors block"
								>
									Terms & Conditions
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-primary mt-8 pt-4 text-center text-[#134B70] text-xs">
					<p>Obin Holiday © 2025. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
