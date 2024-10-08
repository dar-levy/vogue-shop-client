// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, IconButton } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from "../../models/product.ts";
import { LoadingButton } from '@mui/lab';
import { useStoreContext } from "../../context/StoreContext.tsx";
import NotFound from "../NotFound.tsx";
import Loading from '../Loading.tsx';
import DeleteIcon from '@mui/icons-material/Delete';
import {addProduct, removeProduct} from "../../services/basketService.ts";
import {toast} from "react-toastify";
import {getProduct} from "../../services/productService.ts";


export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate(); // Use navigate to redirect after deletion
    const { basket, setBasket, handleRemoveItem, isAdmin } = useStoreContext();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const item = basket?.items.find(i => i.productId === product?.id);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (id) {
                    const {data} = await getProduct(id);
                    setProduct(data);
                    setLoading(false);
                }
            } catch (err) {
                return this.props.navigate("/not-found");
            }
        }

        fetchProduct();
    }, [id, item]);

    async function handleUpdateCart() {
        if (!product) return;
        setSubmitting(true);
        try {
            const { data } = await addProduct(product.id)
            setBasket(data)
            toast.success("Added product to basket!");
            setTimeout(() => {
                window.location = "/";
            }, 500);
        } catch (e) {
            toast.error("Couldn't add product");
        } finally {
            setSubmitting(false);
        }
    }

    function handleDeleteProduct() {
        if (!product) return;
        handleRemoveItem(product.id);
        toast.success("Deleted product!");
        setTimeout(() => {
            window.location = "/";
        }, 500);
    }

    if (loading) return <Loading message='Loading product...' />

    if (!product) return <NotFound />

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3' color="text.primary">
                    {product.name}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant='h4' color='secondary'>
                    ₪{product.price}
                </Typography>
                <TableContainer>
                    <Table>
                        <TableBody sx={{ fontSize: '1.1em' }}>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{product.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Type</TableCell>
                                <TableCell>{product.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Brand</TableCell>
                                <TableCell>{product.brand}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item xs={4}>
                        <LoadingButton
                            disabled={item ? true : false}
                            loading={submitting}
                            onClick={handleUpdateCart}
                            sx={{ height: '55px' }}
                            color={'primary'}
                            size={'large'}
                            variant={'contained'}
                            fullWidth>
                            {item ? 'Already in basket' : 'Add to Cart'}
                        </LoadingButton>
                    </Grid>
                    {isAdmin && (
                        <Grid item xs={2}>
                            <IconButton
                                sx={{
                                    height: '55px',
                                    width: '55px',
                                    color: 'red',
                                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 0, 0, 0.2)',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                    }
                                }}
                                onClick={handleDeleteProduct}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}
