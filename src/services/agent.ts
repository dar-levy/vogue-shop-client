import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from 'react-toastify';
import {fakeActivityHistory, fakeBasket, fakeNewArrivals, fakeProducts, fakeReviews} from "./fakeHttpService.ts";
import config from '../config.json';

const sleep = () => new Promise(resolve => setTimeout(resolve, 500))

axios.defaults.baseURL = config.apiUrl;
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error: AxiosError) => {
    const {data, status} = error.response as AxiosResponse;
    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            toast.error(data.title);
            // router.navigate('/server-error', {state: {error: data}})
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody),
    put: (url: string, body: object) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const Catalog = {
    list: () =>
        // requests.get('products')
        fakeProducts
    ,
    details: (id: string) =>
        // requests.get(`products/${id}`)
        fakeProducts.find(product => product.id === id),
    delete: (id: string) =>
        // requests.del(`products/${id}`)
        fakeProducts.filter(product => product.id !== id),
}

const Basket = {
    get: () => fakeBasket
        // requests.get('basket')
    ,
    addItem: (productId: number, quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId: number, quantity = 1) => requests.del(`basket?productId=${productId}&quantity=${quantity}`)
}

const Reviews = {
    get: () => fakeReviews
}

const NewArrivals = {
    get: () => fakeNewArrivals
}

const ActivityHistory = {
    get: () => fakeActivityHistory
}

const agent = {
    Catalog,
    Basket,
    Reviews,
    NewArrivals,
    ActivityHistory
}

export default agent;
