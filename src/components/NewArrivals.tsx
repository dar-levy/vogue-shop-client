import React, { useEffect } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useStoreContext } from '../context/StoreContext';
import {NewArrival} from "../models/new-arrival.ts";

export const NewArrivals: React.FC = () => {
    const { newArrivals, setNewArrivals } = useStoreContext();

    useEffect(() => {
        // Simulate fetching 10 new arrivals from an API
        const fetchedNewArrivals: NewArrival[] = [
            { id: 1, name: 'New Product 1', description: 'Description 1', pictureUrl: '/images/prod1.png', brand: 'Brand 1', type: 'Type 1', arrivalDate: new Date('2024-08-01') },
            { id: 2, name: 'New Product 2', description: 'Description 2', pictureUrl: '/images/prod2.png', brand: 'Brand 2', type: 'Type 2', arrivalDate: new Date('2024-08-02') },
            { id: 3, name: 'New Product 3', description: 'Description 3', pictureUrl: '/images/prod3.png', brand: 'Brand 3', type: 'Type 3', arrivalDate: new Date('2024-08-03') },
            { id: 4, name: 'New Product 4', description: 'Description 4', pictureUrl: '/images/prod4.png', brand: 'Brand 4', type: 'Type 4', arrivalDate: new Date('2024-08-04') },
            { id: 5, name: 'New Product 5', description: 'Description 5', pictureUrl: '/images/prod5.png', brand: 'Brand 5', type: 'Type 5', arrivalDate: new Date('2024-08-05') },
            { id: 6, name: 'New Product 6', description: 'Description 6', pictureUrl: '/images/prod6.png', brand: 'Brand 6', type: 'Type 6', arrivalDate: new Date('2024-08-06') },
            { id: 7, name: 'New Product 7', description: 'Description 7', pictureUrl: '/images/prod7.png', brand: 'Brand 7', type: 'Type 7', arrivalDate: new Date('2024-08-07') },
            { id: 8, name: 'New Product 8', description: 'Description 8', pictureUrl: '/images/prod8.png', brand: 'Brand 8', type: 'Type 8', arrivalDate: new Date('2024-08-08') },
            { id: 9, name: 'New Product 9', description: 'Description 9', pictureUrl: '/images/prod9.png', brand: 'Brand 9', type: 'Type 9', arrivalDate: new Date('2024-08-09') },
            { id: 10, name: 'New Product 10', description: 'Description 10', pictureUrl: '/images/prod10.png', brand: 'Brand 10', type: 'Type 10', arrivalDate: new Date('2024-08-10') },
        ];
        setNewArrivals(fetchedNewArrivals);  // Store new arrivals in the context
    }, [setNewArrivals]);

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
                            }
                        }}
                    />
                    <Typography variant="h6" sx={{ marginTop: '10px' }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Arrived on: {product.arrivalDate.toDateString()}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};
