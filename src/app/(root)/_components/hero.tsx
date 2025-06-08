import FloatImages from "./float-images";
import HeroDescription from "./hero-description";

const Hero = () => {
	return (
		<main id="beranda">
			<header className="w-full relative lg:min-h-[80vh]">
				<div className="container mx-auto px-6 md:pt-24 lg:px-10 lg:pt-32 py-16">
					<h1 className="hidden lg:block font-bold capitalize text-[76px] absolute -left-[150px] top-80 -z-10 text-[#EEEEEE]/80 -rotate-90">
						obin holiday
					</h1>
					<div className="w-full md:flex">
						<HeroDescription />
						<FloatImages />
					</div>
				</div>
			</header>
		</main>
	);
};

export default Hero;
