// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Cookies from 'js-cookie';
import http from './httpService';
import config from '../config.json';

const apiEndpoint = config.apiUrl + '/auth';

export async function login(email, password, rememberMe) {
    const { data } = await http.post(apiEndpoint, { email, password });
    if (rememberMe) {
        Cookies.set('rememberMe', 'true', { expires: 10 });
    } else {
        Cookies.set('rememberMe', 'true', { expires: 0.02083 });
    }

    return data;
}

export function logout() {
    http.post(`${apiEndpoint}/logout`).then(() => {
        Cookies.remove('rememberMe');
    });
}

export function getCurrentUser() {
    try {
        const user = http.get(`${apiEndpoint}/me`);
        return user;
    } catch (ex) {
        return null;
    }
}

export default {
    login,
    logout,
    getCurrentUser,
};
