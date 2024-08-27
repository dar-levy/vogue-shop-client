import { useState, useEffect } from 'react';
import {Product} from "../../models/product.ts";
import ProductsGrid from "./ProductsGrid.tsx";
import Loading from '../Loading.tsx';
import agent from "../../services/agent.ts";


export default function Catalog() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(agent.Catalog.list())
        setLoading(false)
        // agent.Catalog.list()
        //     .then(products => {
        //         setProducts(products)
        //     })
        //     .catch(error => console.log(error))
        //     .finally(() => setLoading(false));
    }, [])


    if (loading) return <Loading message='Loading products...' />
  
    return (
        <ProductsGrid products={products} />
    )
}
