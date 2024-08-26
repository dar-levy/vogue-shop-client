import { useState, useEffect } from 'react';
import {Product} from "../../models/product.ts";
import Products from "./Products.tsx";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [])
  
    return (
        <>
            <Products products={products} />
        </>
    )
}
