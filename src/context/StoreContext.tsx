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
import {deleteProduct} from "../services/productService.ts";
import { v4 as uuidv4 } from 'uuid';

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

    function addItem(productId: number, quantity = 1) {
        const uniqueId = Math.floor(Math.random() * 1000000);
        const uniqueName = uuidv4();

        if (!basket) {
            setBasket({
                id: uniqueId,
                name: uniqueName,
                items: [{ productId, quantity }]
            });
            return;
        }

        const existingItemIndex = basket.items.findIndex(item => item.productId === productId);

        if (existingItemIndex >= 0) {
            const updatedItems = [...basket.items];
            updatedItems[existingItemIndex].quantity += quantity;

            setBasket(prevState => ({
                ...prevState!,
                items: updatedItems
            }));
        } else {
            setBasket(prevState => ({
                ...prevState!,
                id: prevState?.id || uniqueId,
                name: prevState?.name || uniqueName,
                items: [...prevState!.items, { productId, quantity }]
            }));
        }
    }

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

    async function handleRemoveItem(productId: number) {
        try {
            await deleteProduct(productId);
            setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
            toast.success("Successfully deleted");
        } catch (ex) {
            if (ex.response && ex.response.status === 404) console.log("x");
            toast.error("This profile has already been deleted.");
        }
    }

    function clearItems() {
        setBasket(null);
    }

    return (
        <StoreContext.Provider value={{
            basket,
            setBasket,
            removeItem,
            addItem,
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
        }}>
            {children}
        </StoreContext.Provider>
    );
}
