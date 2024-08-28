import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField } from '@mui/material';
import { ActivityHistory } from "../models/activity-history.ts";
import agent from "../services/agent.ts";

const ActivityHistoryComponent: React.FC = () => {
    const [activityHistory, setActivityHistory] = useState<ActivityHistory[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const data = agent.ActivityHistory.get();
        setActivityHistory(data);
        // try {
        //     const { data } = await getActivityHistory()
        //     setActivityHistory(data);
        // } catch (err) {
        //     toast.error("Could not get the activity history");
        // }
    }, []);

    const filteredActivityHistory = activityHistory.filter(activity =>
        activity.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box sx={{ padding: '30px', overflowX: 'auto' }}>
            <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px' }}>
                Activity History
            </Typography>
            <TextField
                label="Search by Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginBottom: '20px' }}
            />
            <TableContainer component={Paper} sx={{ boxShadow: 4, borderRadius: 2, overflowX: 'auto' }}>
                <Table sx={{ tableLayout: 'auto', width: '100%' }} aria-label="activity history table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.25rem', whiteSpace: 'nowrap' }}>ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.25rem', whiteSpace: 'nowrap' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.25rem', whiteSpace: 'nowrap' }}>Type</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.25rem', whiteSpace: 'nowrap' }}>Timestamp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredActivityHistory.map((activity) => (
                            <TableRow
                                key={activity.id}
                                sx={{
                                    '&:hover': {
                                        transform: 'scale(1.002)',
                                        transition: 'transform 0.2s ease-in-out',
                                    },
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease-in-out',
                                    fontSize: '1.25rem',
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {activity.id}
                                </TableCell>
                                <TableCell>{activity.name}</TableCell>
                                <TableCell>{activity.type}</TableCell>
                                <TableCell>{activity.timestamp.toDateString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ActivityHistoryComponent;
