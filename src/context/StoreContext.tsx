// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { PropsWithChildren, createContext, useContext, useState, useEffect } from 'react';
import { Basket } from '../models/basket';
import { Review } from '../models/review';
import { NewArrival } from "../models/new-arrival.ts";
import { Product } from "../models/product.ts";
import Cookies from 'js-cookie';
import {User} from "../models/user.ts";
import config from "../config.json";
import {toast} from "react-toastify";
import {deleteProduct, saveProduct} from "../services/productService.ts";
import {clearBasket, removeProduct} from "../services/basketService.ts";

interface StoreContextValue {
    removeItem: (productId: number, quantity: number) => void;
    handleRemoveItem: (productId: number) => void;
    setBasket: (basket: Basket) => void;
    clearItems: () => void;
    setReviews: (reviews: Review[]) => void;
    setNewArrivals: (newArrivals: NewArrival[]) => void;
    setProducts: (products: Product[]) => void;
    isAdmin: boolean;
    isAuthenticated: boolean;
    reviews: Review[];
    newArrivals: NewArrival[];
    products: Product[];
    basket: Basket | null;
    user: User | null;
}

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function useStoreContext() {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw Error('Oops - we are not inside the app.tsx so we do not have access to the context');
    }

    return context;
}

export function StoreProvider({ children }: PropsWithChildren<unknown>) {
    const [basket, setBasket] = useState<Basket | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newArrivals, setNewArrivals] = useState<NewArrival[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userCookie = Cookies.get(config.cookieName);
        if (userCookie) {
            const cookieUser = JSON.parse(userCookie);
            setUser(cookieUser);
            setIsAuthenticated(true);
            setIsAdmin(cookieUser.isAdmin);
        }
    }, []);

    function removeItem(productId: number, quantity: number) {
        if (!basket) return;
        const items = [...basket.items];
        const itemIndex = items.findIndex(i => i.productId === productId);
        if (itemIndex >= 0) {
            items[itemIndex].quantity -= quantity;
            if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
            setBasket(prevState => ({ ...prevState!, items }));
        }
    }

    async function handleRemoveItem(productId: string) {
        const itemInBasket = basket?.items.some(item => item.productId === productId);
        console.log(itemInBasket)

        try {
            await deleteProduct(productId);
            setProducts(() => products.filter(p => p.id !== productId));
            if (itemInBasket) {
                await removeProduct(productId);
                setBasket(() => basket?.items.filter(p => p.productId !== productId));
            }
            toast.success("Successfully deleted");
        } catch (ex) {
            if (ex.response && ex.response.status === 404) console.log("x");
            toast.error("Couldn't delete product");
        }
    }

    async function handleAddNewProduct(product: Product) {
        try {
            console.log(product);
            await saveProduct(product);
            setProducts([...products, product])
            toast.success("Saved successfully.");
            setTimeout(() => {
                window.location = "/";
            }, 500);
        } catch (err) {
            toast.error("Could not save the product");
        }
    }

    async function clearItems() {
        try {
            await clearBasket()
            setBasket(null);
        }
        catch (e) {
            toast.error("Could not clear the basket");
        }
    }

    return (
        <StoreContext.Provider value={{
            basket,
            setBasket,
            removeItem,
            handleRemoveItem,
            clearItems,
            reviews,
            setReviews,
            newArrivals,
            setNewArrivals,
            products,
            setProducts,
            isAdmin,
            isAuthenticated,
            user,
            handleAddNewProduct
        }}>
            {children}
        </StoreContext.Provider>
    );
}
