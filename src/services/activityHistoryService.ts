import config from "../config.json";
import http from "./httpService.ts";

const apiEndpoint = config.apiUrl + "/activity-history";

export function getActivityHistory() {
    return http.get(`${apiEndpoint}`);
}
