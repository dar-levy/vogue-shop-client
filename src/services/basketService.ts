import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/basket";

function basketUrl(id: string) {
    return `${apiEndpoint}/${id}`;
}

export function getBasket() {
    return http.get(`${apiEndpoint}`);
}

export function addProduct(id: string) {
    return http.post(basketUrl(id));
}

export function removeProduct(id: string) {
    return http.delete(basketUrl(id));
}

export function clearBasket() {
    return http.delete(`${apiEndpoint}`);
}
