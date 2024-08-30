import config from "../config.json";
import http from "./httpService.ts";

const apiEndpoint = config.apiUrl + "/about";

export function getAbout() {
    return http.get(`${apiEndpoint}`);
}
