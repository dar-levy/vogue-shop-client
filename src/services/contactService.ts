import config from "../config.json";
import http from "./httpService.ts";

const apiEndpoint = config.apiUrl + "/contact";

export function getContact() {
    return http.get(`${apiEndpoint}`);
}
