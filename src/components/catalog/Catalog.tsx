import { useState, useEffect } from 'react';
import {Product} from "../../models/product.ts";
import ProductsGrid from "./ProductsGrid.tsx";
import {fakeProducts} from "../../services/fakeHttpService.ts";


export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(fakeProducts)
      // fetch('http://localhost:5000/api/products')
      //   .then(response => response.json())
      //   .then(data => setProducts(data));
    }, [])
  
    return (
        <ProductsGrid products={products} />
    )
}
