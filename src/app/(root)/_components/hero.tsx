import FloatImages from "./float-images";
import HeroDescription from "./hero-description";

const Hero = () => {
	return (
		<main id="beranda">
			<header className="w-full relative min-h-[80vh]">
				<div className="container mx-auto px-10 md:pt-32 py-10">
					<h1 className="hidden md:block font-bold capitalize text-[76px] absolute -left-40 top-80 -z-10 text-[#EEEEEE]/80 -rotate-90">
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
