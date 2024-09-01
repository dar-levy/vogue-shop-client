import { Grid, Paper, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export default function ThankYou() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '50vh' }}
        >
            <Grid item xs={12} sm={8} md={6}>
                <Paper
                    elevation={1}
                    sx={{ padding: 4, textAlign: 'center' }}
                >
                    <Typography variant="h4" gutterBottom>
                        Thank You for Your Purchase!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Your payment was successful.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Your payment ID is: <strong>{uuidv4()}</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Please keep this ID for your records.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}
