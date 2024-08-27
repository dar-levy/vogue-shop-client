import { Box, Button, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useStoreContext } from "../context/StoreContext.tsx";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Checkout() {
    const { basket, clearItems } = useStoreContext();
    const navigate = useNavigate();

    const handlePayment = () => {
        setTimeout(() => {
            toast.success('Payment successful!');
            const paymentId = Math.random().toString(36).substring(2, 15);
            clearItems();
            navigate(`/thank-you/${paymentId}`);
        }, 1000);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper sx={{ padding: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Order Summary
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="order summary table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Subtotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {basket?.items.length > 0 ? (
                                    basket.items.map((item) => (
                                        <TableRow key={item.productId}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell align="right">₪{item.price}</TableCell>
                                            <TableCell align="right">{item.quantity}</TableCell>
                                            <TableCell align="right">₪{item.price * item.quantity}</TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4}>
                                            <Typography variant="h6" align="center">
                                                No items in basket
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {basket?.items.length > 0 && (
                        <>
                            <Box display="flex" justifyContent="space-between" mt={4}>
                                <Typography variant="h6">Total</Typography>
                                <Typography variant="h6">₪{basket.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</Typography>
                            </Box>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handlePayment}
                                sx={{ mt: 3 }}
                            >
                                Pay Now
                            </Button>
                        </>
                    )}
                </Paper>
            </Grid>
        </Grid>
    );
}
