import Hero from "./_components/hero";
import News from "./_components/news";
import NicePlace from "./_components/nice-place";
import PopulerDestination from "./_components/populer-destination";
import Services from "./_components/services";

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<PopulerDestination />
			<NicePlace />
			<News />
		</>
	);
}
