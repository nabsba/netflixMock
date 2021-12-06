export type TSliderTwo = {
	ComponentProps: React.ReactNode[];
	setting: { method: string; animation: boolean };
	type: string;
	path?: string;
};

export type TSlideInformation = {
	oldSlide: number;
	activeSlide: number;
	slideSeen: number;
	page: number;
};
