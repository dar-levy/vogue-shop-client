import { useState, useEffect } from 'react';
import {Product} from "../../models/product.ts";
import ProductsGrid from "./ProductsGrid.tsx";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [])
  
    return (
        <>
            <ProductsGrid products={products} />
        </>
    )
}
