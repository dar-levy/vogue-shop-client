// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Cookies from 'js-cookie';
import http from './httpService';
import config from '../config.json';

const apiEndpoint = config.apiUrl + '/login';

export async function login(username, password, rememberMe) {
    const { data } = await http.post(apiEndpoint, { username, password, rememberMe });
    return data;
}

export function logout() {
    http.post(`${config.apiUrl}/logout`).then(() => {
        Cookies.remove(config.cookieName);
    });
}

export function getCurrentUser() {
    const cookie = Cookies.get(config.cookieName);
    return cookie ? JSON.parse(cookie)?.name || null : null;
}

export default {
    login,
    logout,
    getCurrentUser,
};
