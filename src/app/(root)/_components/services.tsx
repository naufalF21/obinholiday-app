import Image from "next/image";

const Services = () => {
	const textServices = [
		{
			title: "best food",
			description: "we provide the best quality food for you to enjoy while traveling.",
		},
		{
			title: "best travel plan",
			description: "we provide the best travel packages for you.",
		},
		{
			title: "best accommodation",
			description: "we provide the best Transportation experience from our trusted partners.",
		},
	];

	return (
		<div className="lg:min-h-[60vh]">
			<div className="w-full py-14 lg: lg:py-20 relative bg-gray-50">
				<div className="absolute bottom-4 left-10">
					<Image
						src="assets/elements/titik.svg"
						alt=""
						width={110}
						height={110}
						className="md:w-[180px]"
					/>
				</div>
				<div className="container mx-auto px-6 md:px-10">
					<div className="w-full flex justify-between">
						<div className="w-full md:w-1/2 relative hidden md:block">
							<div className="w-[350px] h-[300px] overflow-hidden border-[5px] border-white rounded-lg absolute">
								<Image
									src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
									alt=""
									width={350}
									height={300}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="w-[350px] h-[300px] overflow-hidden border-[5px] border-white rounded-lg absolute top-32 right-5 shadow-lg">
								<Image
									src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
									alt=""
									width={350}
									height={300}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 md:pl-10">
							<h2 className="font-bold capitalize text-xl md:text-3xl text-black mb-12">
								things you need prepare{" "}
								<span className="text-primary">before traveling</span>
							</h2>
							<div className="flex flex-col gap-5">
								{textServices.map((service, index) => (
									<div className="text-black" key={index}>
										<div className="flex items-center gap-3 mb-2">
											<h3 className="text-xl md:text-2xl capitalize">{`0${
												index + 1
											}.`}</h3>
											<h3 className="text-xl md:text-2xl font-semibold capitalize">
												{service.title}
											</h3>
										</div>
										<p className="font-light capitalize text-black max-w-84 ml-12">
											{service.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
