import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import {ActivityHistory} from "../models/activity-history.ts";

const generateSampleData = (): ActivityHistory[] => {
    return [
        { id: 1, name: 'Checkout', type: 'Order', timestamp: new Date('2024-08-01'), basket: { id: 1, buyerId: "1", items: [] } },
        { id: 2, name: 'Added to Cart', type: 'Cart', timestamp: new Date('2024-08-02'), basket: { id: 2, buyerId: "4", items: [] } },
        { id: 3, name: 'Removed from Cart', type: 'Cart', timestamp: new Date('2024-08-03'), basket: { id: 3, buyerId: "14", items: [] } },
        { id: 4, name: 'Checkout', type: 'Order', timestamp: new Date('2024-08-04'), basket: { id: 4, buyerId: "24", items: [] } },
        { id: 5, name: 'Added to Wishlist', type: 'Wishlist', timestamp: new Date('2024-08-05'), basket: { id: 5, buyerId: "52", items: [] } },
        { id: 6, name: 'Viewed Product', type: 'View', timestamp: new Date('2024-08-06'), basket: { id: 6, buyerId: "78", items: [] } },
        { id: 7, name: 'Checkout', type: 'Order', timestamp: new Date('2024-08-07'), basket: { id: 7, buyerId: "124", items: [] } },
        { id: 8, name: 'Added to Cart', type: 'Cart', timestamp: new Date('2024-08-08'), basket: { id: 8, buyerId: "432", items: [] } },
        { id: 9, name: 'Viewed Product', type: 'View', timestamp: new Date('2024-08-09'), basket: { id: 9, buyerId: "51", items: [] } },
        { id: 10, name: 'Checkout', type: 'Order', timestamp: new Date('2024-08-10'), basket: { id: 10, buyerId: "90", items: [] } },
    ];
};

const ActivityHistoryComponent: React.FC = () => {
    const [activityHistory, setActivityHistory] = useState<ActivityHistory[]>([]);

    useEffect(() => {
        // Simulate fetching data from an API
        const data = generateSampleData();
        setActivityHistory(data);
    }, []);

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Activity History
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="activity history table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Timestamp</TableCell>
                            <TableCell>Basket Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activityHistory.map((activity) => (
                            <TableRow key={activity.id}>
                                <TableCell component="th" scope="row">
                                    {activity.id}
                                </TableCell>
                                <TableCell>{activity.name}</TableCell>
                                <TableCell>{activity.type}</TableCell>
                                <TableCell>{activity.timestamp.toDateString()}</TableCell>
                                <TableCell>{JSON.stringify(activity.basket)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ActivityHistoryComponent;
