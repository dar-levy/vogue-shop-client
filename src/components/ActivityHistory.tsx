import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField } from '@mui/material';
import { ActivityHistory } from "../models/activity-history.ts";
import {toast} from "react-toastify";
import {getActivityHistory} from "../services/activityHistoryService.ts";
import Loading from "./Loading.tsx";

const ActivityHistoryComponent: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [activityHistory, setActivityHistory] = useState<ActivityHistory[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const { data } = await getActivityHistory()
                setActivityHistory(data);
            } catch (err) {
                toast.error("Could not get the activity history");
            } finally {
                setLoading(false);
            }
        }

        fetchHistory();
    }, []);

    const filteredActivityHistory = activityHistory.filter(activity =>
        activity.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <Loading message='Loading...' />

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
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.25rem', whiteSpace: 'nowrap' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.25rem', whiteSpace: 'nowrap' }}>Type</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '1.25rem', whiteSpace: 'nowrap' }}>Timestamp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredActivityHistory.map((activity) => (
                            <TableRow
                                key={activity.username}
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
                                <TableCell>{activity.username}</TableCell>
                                <TableCell>{activity.activity_type}</TableCell>
                                <TableCell>{activity.timestamp}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ActivityHistoryComponent;
