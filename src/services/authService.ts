// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Cookies from 'js-cookie';
import http from './httpService';
import config from '../config.json';


export async function login(username, password, rememberMe) {
    const { data } = await http.post(`${config.apiUrl}/login`, { username, password, rememberMe });
    return data;
}

export async function logout() {
    await http.post(`${config.apiUrl}/logout`)
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
