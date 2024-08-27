import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Basket } from '../models/basket';
import { Review } from '../models/review';
import { NewArrival } from "../models/new-arrival.ts";
import { Product } from "../models/product.ts";
import Cookies from 'js-cookie';
import agent from "../services/agent.ts";

interface StoreContextValue {
    removeItem: (productId: number, quantity: number) => void;
    handleRemoveItem: (productId: number) => void;
    setBasket: (basket: Basket) => void;
    clearItems: () => void;
    setReviews: (reviews: Review[]) => void;
    setNewArrivals: (newArrivals: NewArrival[]) => void;
    setProducts: (products: Product[]) => void;
    isAdmin: boolean;
    reviews: Review[];
    newArrivals: NewArrival[];
    products: Product[];
    basket: Basket | null;
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
    const [isAdmin] = useState<boolean>(Cookies.get('isAdmin') === 'true');

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

    function handleRemoveItem(productId: number) {
        const updatedProducts = agent.Catalog.delete(productId);
        setProducts(updatedProducts);
    }

    function clearItems() {
        setBasket(null);
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
            isAdmin
        }}>
            {children}
        </StoreContext.Provider>
    );
}
