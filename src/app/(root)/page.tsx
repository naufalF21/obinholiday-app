import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex p-5 gap-3">
			<Button variant="default">Book Now</Button>
			<Button variant="destructive">Book Now</Button>
			<Button variant="outline">Book Now</Button>
			<Button variant="secondary">Book Now</Button>
		</div>
	);
}
