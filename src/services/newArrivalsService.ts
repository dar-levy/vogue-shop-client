import config from "../config.json";
import http from "./httpService.ts";

const apiEndpoint = config.apiUrl + "/new-arrivals";

export function getNewArrivals() {
    return http.get(`${apiEndpoint}`);
}
