import React from "react";
import ContactCard from "./_components/contact-card";

const Contact = () => {
	return (
		<div className="w-full relative">
			<div className="bg-primary/5 w-full h-[450px] absolute"></div>
			<div className="container mx-auto px-6 py-10 mb-10 lg:px-10">
				<div className="flex flex-col gap-20 py-5">
					<div className="flex flex-col gap-4 lg:max-w-3xl mx-auto text-center">
						<h2 className="text-4xl font-bold text-primary">Get in Touch</h2>
						<p className="text-black/50">
							We would love to hear from you! Whether you have a question about our
							destinations, need assistance with a booking, or just want to say hello,
							our team is here to help.
						</p>
					</div>
					<ContactCard />
				</div>
			</div>
		</div>
	);
};

export default Contact;
