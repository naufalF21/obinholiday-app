"use client";

import Image from "next/image";
import { Button } from "../button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "./navigation-menu";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import MobileMenu from "./mobile-menu";
import { useState } from "react";

const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleCloseMenu = () => {
		setIsOpen(false);
	};

	const nav = [
		{ name: "Beranda", href: "/" },
		{ name: "Wisata Lokal", href: "/local" },
		{ name: "Wisata Luar Negeri", href: "/international" },
		{ name: "Transportasi", href: "/transportation" },
		{ name: "Contact Us", href: "/contact" },
	];

	return (
		<nav className="sticky top-0 left-0 z-50 bg-white border-b">
			<MobileMenu isOpen={isOpen} handleCloseMenu={handleCloseMenu} data={nav} />
			<div className="container px-6 lg:px-10 mx-auto">
				<div className="flex items-center justify-between">
					<Link href="/" className="w-fit">
						<Image
							src="/assets/logo/text-logo.png"
							alt="Obin Holiday Logo"
							width={180}
							height={100}
							className="object-contain"
						/>
					</Link>
					<NavigationMenu>
						<NavigationMenuList className="hidden lg:flex">
							{nav.map((item) => (
								<NavigationMenuItem key={item.name}>
									<NavigationMenuLink
										asChild
										className={navigationMenuTriggerStyle()}
									>
										<Link
											href={item.href}
											className={clsx({
												"text-primary font-semibold":
													pathname === item.href,
											})}
										>
											{item.name}
										</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<div className="w-fit hidden lg:block">
						<Button className="">Book Now</Button>
					</div>
					<button className="cursor-pointer lg:hidden" onClick={() => setIsOpen(true)}>
						<Icon icon="mage:dash-menu" width="30" height="30" />
					</button>
				</div>
			</div>
		</nav>
	);
};

export { Navbar };
