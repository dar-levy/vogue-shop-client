import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { Product } from "../../models/product.ts";
import ProductCard from "./ProductCard.tsx";

interface Props {
    products: Product[];
}

export default function ProductsGrid({ products }: Props) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <TextField
                label="Search Products"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ position: "sticky", top: 0, zIndex: 10, marginBottom: 5, marginTop: 0 }}
            />
            <Grid container spacing={4}>
                {filteredProducts.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
