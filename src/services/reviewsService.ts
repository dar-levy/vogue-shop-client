import config from "../config.json";
import http from "./httpService.ts";

const apiEndpoint = config.apiUrl + "/reviews";

export function getReviews() {
    return http.get(`${apiEndpoint}`);
}
