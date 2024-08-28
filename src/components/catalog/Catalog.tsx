// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {useState, useEffect} from 'react';
import ProductsGrid from "./ProductsGrid.tsx";
import Loading from '../Loading.tsx';
import agent from "../../services/agent.ts";
import {useStoreContext} from "../../context/StoreContext.tsx";
import {getProducts} from "../../services/productService.ts";
import {toast} from "react-toastify";


export default function Catalog() {
    const [loading, setLoading] = useState(true);
    const { products, setProducts } = useStoreContext();

    useEffect(async () => {
        setProducts(agent.Catalog.list())
        setLoading(false)
        // try {
        //     const { data } = await getProducts();
        //     setProducts(data)
        // } catch (err) {
        //     toast.error("Could not get the products");
        // }
    }, [])


    if (loading) return <Loading message='Loading products...' />
  
    return (
        <ProductsGrid products={products} />
    )
}
