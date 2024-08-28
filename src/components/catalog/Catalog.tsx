import { useState, useEffect } from 'react';
import ProductsGrid from "./ProductsGrid.tsx";
import Loading from '../Loading.tsx';
import agent from "../../services/agent.ts";
import { useStoreContext } from "../../context/StoreContext.tsx";
import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Catalog() {
    const [loading, setLoading] = useState(true);
    const { products, setProducts, isAdmin } = useStoreContext();
    const navigate = useNavigate();

    useEffect(() => {
        setProducts(agent.Catalog.list());
        setLoading(false);
        // try {
        //     const { data } = await getProducts();
        //     setProducts(data)
        // } catch (err) {
        //     toast.error("Could not get the products");
        // }
    }, [setProducts]);

    if (loading) return <Loading message='Loading products...' />

    return (
        <div style={{position: 'relative', paddingTop: '20px'}}>
            {isAdmin && <div style={{position: 'fixed', top: '80px', right: '20px', zIndex: 1000}}>
                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => navigate('/new-product')}
                >
                    <AddIcon/>
                </Fab>
            </div>}

            <ProductsGrid products={products}/>
        </div>
    )
}
