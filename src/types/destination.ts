interface DressCode {
	morning?: string;
	evening?: string;
	note?: string;
}

export interface DestinationInterface {
	location: string;
	name: string;
	duration?: string;
	image: string;
	rating: number;
	price: number;
	icon: string;
	link: string;
	itinerary?: Array<{
		day: number;
		date?: string;
		dress_code?: string | DressCode;
		activities: string[];
	}>;
}
