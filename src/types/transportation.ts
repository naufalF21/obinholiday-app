export interface TransportationInterface {
	type: string;
	model: string | null;
	image: string;
	rating: number;
	icon: string;
	link: string;
	note?: string;
	options?: Array<{
		capacity: string;
		features: Array<string>;
		price_per_day: number;
	}>;
}
