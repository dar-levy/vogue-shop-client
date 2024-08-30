// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, IconButton } from '@mui/material';
import { useState, useEffect, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from "../../models/product.ts";
import agent from "../../services/agent.ts";
import { LoadingButton } from '@mui/lab';
import { useStoreContext } from "../../context/StoreContext.tsx";
import NotFound from "../NotFound.tsx";
import Loading from '../Loading.tsx';
import DeleteIcon from '@mui/icons-material/Delete';
import {addProduct, removeProduct} from "../../services/basketService.ts";
import {toast} from "react-toastify";


export default function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate(); // Use navigate to redirect after deletion
    const { basket, setBasket, handleRemoveItem, isAdmin } = useStoreContext();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const item = basket?.items.find(i => i.productId === product?.id);

    useEffect(() => {
        if (item) setQuantity(item.quantity);
        if (id) {
            setProduct(agent.Catalog.details(id));
            setLoading(false);
        }
        // try {
        //     if (item) setQuantity(item.quantity);
        //     if (id) {
        //         const {data} = await getProduct(parseInt(id));
        //         setProduct(data);
        //         setLoading(false);
        //     }
        // } catch (err) {
        //     return this.props.navigate("/not-found");
        // }
    }, [id, item]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        if (parseInt(event.currentTarget.value) >= 0)
            setQuantity(parseInt(event.currentTarget.value));
    }

    async function handleUpdateCart() {
        if (!product) return;
        setSubmitting(true);
        if (!item || quantity > item?.quantity) {
            const updatedQuantity = item ? quantity - item.quantity : quantity;
            try {
                const { data } = await addProduct(product.id, updatedQuantity)
                setBasket(data)
                toast.success("Added product to basket!");
                navigate('/catalog');
            } catch (e) {
                toast.error("Couldn't add product");
            } finally {
                setSubmitting(false);
            }
        } else {
            const updatedQuantity = item.quantity - quantity;
            try {
                const { data } = await removeProduct(product.id, updatedQuantity)
                setBasket(data)
                toast.success("Removed product from basket!");
                navigate('/catalog');
            } catch (e) {
                toast.error("Couldn't remove product");
            } finally {
                setSubmitting(false);
            }
        }
    }

    function handleDeleteProduct() {
        if (!product) return;
        handleRemoveItem(product.id);
        window.location = "/"
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
                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{product.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <TextField
                            onChange={handleInputChange}
                            variant={'outlined'}
                            type={'number'}
                            label={'Quantity in Cart'}
                            fullWidth
                            value={quantity}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <LoadingButton
                            disabled={item?.quantity === quantity || !item && quantity === 0}
                            loading={submitting}
                            onClick={handleUpdateCart}
                            sx={{ height: '55px' }}
                            color={'primary'}
                            size={'large'}
                            variant={'contained'}
                            fullWidth>
                            {item ? 'Update Quantity' : 'Add to Cart'}
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
