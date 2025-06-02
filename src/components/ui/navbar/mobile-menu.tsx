"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Button } from "../button";
import { AnimatePresence, motion } from "motion/react";
import { mobileNavAnimation } from "./_animations";

const MobileMenu = ({
	isOpen,
	handleCloseMenu,
	data,
}: {
	isOpen: boolean;
	handleCloseMenu: () => void;
	data: { name: string; href: string }[];
}) => {
	const { transition } = mobileNavAnimation;

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed top-0 z-50 h-full w-full bg-white"
					variants={mobileNavAnimation.menuVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={transition.menu}
				>
					<div className="flex h-full flex-col">
						<div className="z-30 flex justify-end px-10 py-8">
							<button onClick={handleCloseMenu} className="cursor-pointer">
								<Icon icon="mage:minus" width="30" height="30" />
							</button>
						</div>
						<ul className="flex h-full flex-col justify-center gap-6">
							{data.map((item) => (
								<li key={item.name} className="border-b px-10 pb-6">
									<Link href={item.href}>
										<button
											onClick={handleCloseMenu}
											className="text-3xl font-bold capitalize cursor-pointer"
										>
											{item.name}
										</button>
									</Link>
								</li>
							))}
						</ul>
						<div className="w-full p-10">
							<Button className="text-xl w-full py-5 font-medium">Book Now</Button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MobileMenu;
