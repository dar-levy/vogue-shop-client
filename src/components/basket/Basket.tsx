import { Box, Grid, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Add, Delete, Remove } from '@mui/icons-material';
import { useState } from 'react';
import { useStoreContext } from "../../context/StoreContext.tsx";
import LoadingButton from '@mui/lab/LoadingButton';
import Summary from './Summary.tsx';
import { Link } from 'react-router-dom';
import agent from "../../services/agent.ts";

export default function Basket() {
    const { basket, setBasket, removeItem } = useStoreContext();
    const [status, setStatus] = useState({
        loading: false,
        name: ''
    });

    function handleAddItem(productId: number, name: string) {
        setStatus({ loading: true, name });
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }))
    }

    function handleRemoveItem(productId: number, quantity = 1, name: string) {
        setStatus({ loading: true, name });
        agent.Basket.removeItem(productId, quantity)
            .then(() => removeItem(productId, quantity))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }))
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="right">Subtotal</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {basket?.items.length > 0 ? (
                                basket.items.map((item) => (
                                    <TableRow
                                        key={item.productId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Box display='flex' alignItems='center'>
                                                <img style={{ height: 50, marginRight: 20 }} src={item.pictureUrl} alt={item.name} />
                                                <span>{item.name}</span>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="right">₪{item.price}</TableCell>
                                        <TableCell align="center">
                                            <LoadingButton
                                                color='error'
                                                loading={status.loading && status.name === 'rem' + item.productId}
                                                onClick={() => handleRemoveItem(item.productId, 1, 'rem' + item.productId)}
                                            >
                                                <Remove />
                                            </LoadingButton>
                                            {item.quantity}
                                            <LoadingButton
                                                loading={status.loading && status.name === 'add' + item.productId}
                                                onClick={() => handleAddItem(item.productId, 'add' + item.productId)}
                                                color='secondary'
                                            >
                                                <Add />
                                            </LoadingButton>
                                        </TableCell>
                                        <TableCell align="right">₪{item.price * item.quantity}</TableCell>
                                        <TableCell align="right">
                                            <LoadingButton
                                                loading={status.loading && status.name === 'del' + item.productId}
                                                onClick={() => handleRemoveItem(item.productId, item.quantity, 'del' + item.productId)}
                                                color='error'
                                            >
                                                <Delete />
                                            </LoadingButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5}>
                                        <Typography variant="h6" align="center">
                                            No items in basket
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper sx={{ padding: 2 }}>
                    <Summary />
                    <Button
                        component={Link}
                        to={'/checkout'}
                        variant='contained'
                        size='large'
                        fullWidth
                        disabled={!basket} 
                    >
                        Checkout
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
}
