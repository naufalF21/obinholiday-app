import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import MapSection from "./map-section";

const ContactCard = () => {
	const contactInformation = [
		{
			icon: "mage:map-marker",
			title: "Head Office",
			description:
				"Jln. Anggur no. 5 Kelurahan Kidul Dalem, Kecamatan Bangil, Kabupaten Pasuruan, Jawa Timur 67153",
		},
		{
			icon: "mage:email",
			title: "Email Us",
			description: "obinardhi@gmail.com",
		},
		{
			icon: "mage:phone",
			title: "Call Us",
			description: "Phone: +62822 4576 3021",
		},
	];

	return (
		<div className="flex flex-col lg:flex-row gap-5 bg-white z-10 rounded-lg p-2 shadow-md w-full md:w-full mx-auto">
			<div className="flex flex-col gap-10 lg:max-w-lg bg-primary text-white md:p-12 p-10 rounded-lg">
				<div className="flex flex-col gap-2">
					<h5 className="text-2xl font-semibold">Contact Information</h5>
					<p className="text-sm font-light">
						Reach us via email or phone for any inquiries or support.
					</p>
				</div>
				<ul className="flex flex-col gap-5">
					{contactInformation.map((info, index) => (
						<li key={index} className="flex items-start md:items-center gap-5">
							<div className="bg-white z-20 rounded-full p-3 hidden md:block">
								<Icon
									icon={info.icon}
									className="w-10 h-10 lg:w-12 lg:h-12 text-primary"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<span className="text-xl font-semibold">{info.title}</span>
								<p className="text-sm">{info.description}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className="w-full">
				<MapSection />
			</div>
		</div>
	);
};

export default ContactCard;
