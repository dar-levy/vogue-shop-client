import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/basket";

function basketUrl(id: number, quantity: number) {
    return `${apiEndpoint}?productId=${id}&quantity=${quantity}`;
}

export function getBasket() {
    return http.get(`${apiEndpoint}`);
}

export function addProduct(id: number, quantity = 1) {
    return http.post(basketUrl(id,quantity));
}

export function removeProduct(id: number, quantity = 1) {
    return http.delete(basketUrl(id,quantity));
}
