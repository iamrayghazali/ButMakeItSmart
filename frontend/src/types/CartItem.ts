import { ProductEnum } from "../enums/Products";

export interface Customization {
    color?: string;
    layout?: string;
    background?: string;
    logo?: string;
    uploadedImageUrl?: string;
}

export interface CartItem {
    id: string; // unique per cart entry (base product + custom combo)
    product: ProductEnum;
    basePrice: number;
    quantity: number;
    customization?: Customization;
}