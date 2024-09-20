interface Dictionary<T> {
	[Key: string]: T;
}

export interface SocialMedia {
	link: string;
	text: string;
	icon: string;
	link_props?: Dictionary<string>;
}
