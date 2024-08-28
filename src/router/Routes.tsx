import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {useStoreContext} from "../context/StoreContext.tsx";
import Catalog from "../components/catalog/Catalog.tsx";
import ProductDetails from "../components/catalog/ProductDetails.tsx";
import About from '../components/About.tsx';
import Contact from '../components/Contact.tsx';
import Reviews from '../components/Reviews.tsx';
import { NewArrivals } from '../components/NewArrivals.tsx';
import ActivityHistory from '../components/ActivityHistory.tsx';
import Basket from '../components/basket/Basket.tsx';
import Checkout from '../components/Checkout.tsx';
import ThankYou from '../components/ThankYou.tsx';
import LogoutForm from '../components/LogoutForm.tsx';
import NotFound from '../components/NotFound.tsx';
import RegisterForm from '../components/RegisterForm.tsx';
import LoginForm from '../components/LoginForm.tsx';
import NewProduct from "../components/catalog/NewProduct.tsx";

const AppRoutes: React.FC = () => {
    const { isAdmin, isAuthenticated , handleAddNewProduct} = useStoreContext();

    return (
        <Routes>
            {isAuthenticated ? (
                <>
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<ProductDetails />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/new-arrivals" element={<NewArrivals />} />
                    {isAdmin && <Route path="/new-product" element={<NewProduct handleAddNewProduct={handleAddNewProduct}/>} />}
                    {isAdmin && <Route path="/activity-history" element={<ActivityHistory />} />}
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/thank-you/:id" element={<ThankYou />} />
                    <Route path="/logout" element={<LogoutForm />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/" element={<Navigate to="/catalog" />} />
                    <Route path="*" element={<Navigate to="/not-found" />} />
                </>
            ) : (
                <>
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </>
            )}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/catalog" : "/login"} />} />
        </Routes>
    );
};

export default AppRoutes;
