export interface DestinationInterface {
	location: string;
	name: string;
	dates?: string;
	flights?: Array<{
		route: string;
		time: string;
		airline: string;
	}>;
	hotel?: string;
	duration?: string;
	image: string;
	rating: number;
	price: number | object;
	icon: string;
	link: string;
	itinerary?: Array<{
		day: number;
		date?: string;
		dress_code?: string | Array<string>;
		activities: string[];
	}>;
	notes?: {
		include: string[];
		exclude: string[];
	};
}
