import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import {useStoreContext} from "../context/StoreContext.tsx";
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

    if (!basket) return <Typography variant="h3">No items in basket</Typography>;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper sx={{ padding: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Order Summary
                    </Typography>
                    {basket.items.map(item => (
                        <Box key={item.productId} display="flex" justifyContent="space-between" mb={2}>
                            <Typography variant="body1">
                                {item.name} (x{item.quantity})
                            </Typography>
                            <Typography variant="body1">₪{item.price * item.quantity}</Typography>
                        </Box>
                    ))}
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
                </Paper>
            </Grid>
        </Grid>
    );
}
