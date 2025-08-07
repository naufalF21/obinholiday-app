export interface TransportationInterface {
	type: string;
	model: string | null;
	image: string;
	images?: Array<string>;
	videos?: Array<string>;
	rating: number;
	icon: string;
	link: string;
	note?: string;
	options?: Array<{
		capacity: string;
		features?: Array<string>;
		price_per_day: number;
	}>;
}
