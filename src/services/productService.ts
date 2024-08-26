import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/products";

function productUrl(id: number) {
    return `${apiEndpoint}/${id}`;
}


