import { Typography, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function ThankYou() {
    const { paymentId } = useParams<{ paymentId: string }>();

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={12} sm={8} md={6}>
                <Paper sx={{ padding: 4, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Thank You for Your Purchase!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Your payment was successful.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Your payment ID is: <strong>{paymentId}</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Please keep this ID for your records.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}
