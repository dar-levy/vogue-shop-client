import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import {ActivityHistory} from "../models/activity-history.ts";
import agent from "../services/agent.ts";


const ActivityHistoryComponent: React.FC = () => {
    const [activityHistory, setActivityHistory] = useState<ActivityHistory[]>([]);

    useEffect(() => {
        const data = agent.ActivityHistory.get();
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
