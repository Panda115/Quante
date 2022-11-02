export interface Slide {
    statement: string;
    customer: {
        avatar: string;
        name: string;
        designation: string;
    };
    logo?: string;
}

export interface Slide1 {
    image: string;
    slideTitle: string;
    description: string;
}
