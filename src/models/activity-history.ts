import {Basket} from "./basket.ts";

export interface ActivityHistory {
    id: number,
    name: string,
    type: string,
    timestamp: Date,
    basket: Basket;
}
