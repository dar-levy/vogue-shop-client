import {useState, useEffect} from 'react';
import ProductsGrid from "./ProductsGrid.tsx";
import Loading from '../Loading.tsx';
import agent from "../../services/agent.ts";
import {useStoreContext} from "../../context/StoreContext.tsx";


export default function Catalog() {
    const [loading, setLoading] = useState(true);
    const { products, setProducts } = useStoreContext();

    useEffect(() => {
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
