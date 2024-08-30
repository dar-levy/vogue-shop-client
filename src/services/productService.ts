import http from "./httpService";
import config from "../config.json";
import {Product} from "../models/product.ts";

const apiEndpoint = config.apiUrl + "/products";

function productUrl(id: string) {
    return `${apiEndpoint}/${id}`;
}

export function getProducts() {
    return http.get(`${apiEndpoint}`);
}

export function getProduct(id: string) {
    return http.get(productUrl(id));
}

export function deleteProduct(id: string) {
    return http.delete(productUrl(id));
}

export function saveProduct(product : Product) {
    return http.post(apiEndpoint, product);
}
