import {Basket} from "./basket.ts";

export interface ActivityHistory {
    username: string,
    activity_type: string,
    timestamp: string,
    basket: Basket;
}
