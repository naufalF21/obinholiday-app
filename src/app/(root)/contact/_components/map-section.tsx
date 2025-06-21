import React from "react";

const MapSection = () => {
	return (
		<div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.766819305689!2d112.77873281083336!3d-7.600336875084109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7db68d62d4755%3A0xd64954039726088c!2sJl.%20Anggur%20No.5%2C%20Kidul%20Dalem%2C%20Kec.%20Bangil%2C%20Pasuruan%2C%20Jawa%20Timur%2067153!5e0!3m2!1sid!2sid!4v1750407910620!5m2!1sid!2sid"
				className="border-0 w-full h-[600px]"
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};

export default MapSection;
