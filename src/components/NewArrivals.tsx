import React, {useEffect, useState} from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useStoreContext } from '../context/StoreContext';
import {getNewArrivals} from "../services/newArrivalsService.ts";
import {toast} from "react-toastify";
import Loading from "./Loading.tsx";

export const NewArrivals: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const { newArrivals, setNewArrivals } = useStoreContext();

    useEffect(() => {
        const fetchNewArrivals = async () => {
            try {
                const { data } = await getNewArrivals();
                setNewArrivals(data);
            }
            catch (e) {
                toast.error("Could not get the new arrivals");
            } finally {
                setLoading(false);
            }
        }

        fetchNewArrivals();
    }, [setNewArrivals]);

    if (loading) return <Loading message='Loading...' />

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                minHeight: '80vh',
                padding: '20px',
            }}
        >
            {newArrivals.map((product) => (
                <Box
                    key={product.id}
                    sx={{
                        textAlign: 'center',
                        margin: '20px',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            transition: 'transform 0.3s ease-in-out',
                        },
                    }}
                >
                    <Avatar
                        src={product.pictureUrl}
                        alt={product.name}
                        sx={{
                            width: 250,
                            height: 250,
                            margin: '0 auto',
                            boxShadow: 3,
                            '&:hover': {
                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                                transition: 'box-shadow 0.3s ease-in-out',
                            },
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Typography variant="h6" color="text.primary" sx={{ marginTop: '10px' }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Arrival Date: {product.arrivalDate}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};
