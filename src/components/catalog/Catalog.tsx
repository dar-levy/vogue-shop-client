import {useState, useEffect, useContext} from 'react';
import {Product} from "../../models/product.ts";
import ProductsGrid from "./ProductsGrid.tsx";
import Loading from '../Loading.tsx';
import agent from "../../services/agent.ts";
import {useStoreContext} from "../../context/StoreContext.tsx";


export default function Catalog() {
    const [loading, setLoading] = useState(true);
    // const [products, setProducts] = useState<Product[]>([]);
    const { products, setProducts } = useStoreContext();

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
