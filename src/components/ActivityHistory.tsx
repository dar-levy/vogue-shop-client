import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { ActivityHistory } from "../models/activity-history.ts";
import agent from "../services/agent.ts";

const ActivityHistoryComponent: React.FC = () => {
    const [activityHistory, setActivityHistory] = useState<ActivityHistory[]>([]);

    useEffect(() => {
        const data = agent.ActivityHistory.get();
        setActivityHistory(data);
    }, []);

    return (
        <Box sx={{ padding: '30px', overflowX: 'auto' }}>
            <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px' }}>
                Activity History
            </Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 4, borderRadius: 2, overflowX: 'auto' }}>
                <Table sx={{ tableLayout: 'auto', width: '100%' }} aria-label="activity history table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', whiteSpace: 'nowrap' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', whiteSpace: 'nowrap' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', whiteSpace: 'nowrap' }}>Type</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', whiteSpace: 'nowrap' }}>Timestamp</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', whiteSpace: 'nowrap' }}>Basket Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activityHistory.map((activity) => (
                            <TableRow
                                key={activity.id}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#f5f5f5',
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.2s ease-in-out',
                                    },
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease-in-out',
                                    fontSize: '1rem',
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {activity.id}
                                </TableCell>
                                <TableCell>{activity.name}</TableCell>
                                <TableCell>{activity.type}</TableCell>
                                <TableCell>{activity.timestamp.toDateString()}</TableCell>
                                <TableCell sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                                    {JSON.stringify(activity.basket)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ActivityHistoryComponent;
