export interface PlanItem {
    id: number;
    name: string;
    price: string;
    duration: string;
    features: Array<string>;
    isRecommended: boolean;
    isPopular?: boolean;
}
