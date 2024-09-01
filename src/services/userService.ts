// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/register";

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name,
    });
}
