import React, { useEffect } from 'react';
import { Box, Paper, Typography, Rating } from '@mui/material';
import { useStoreContext } from '../context/StoreContext';
import agent from "../services/agent.ts";

export interface Review {
    id: number;
    description: string;
    author: string;
    rating: number;
}

const Reviews: React.FC = () => {
    const { reviews, setReviews } = useStoreContext();

    useEffect(() => {
        const fetchedReviews: Review[] = agent.Reviews.get()
        setReviews(fetchedReviews);
    }, [setReviews]);

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
                gap: '20px', // Adds space between the notes
            }}
        >
            {reviews.map((review) => (
                <Paper
                    key={review.id}
                    sx={{
                        width: '250px',
                        padding: '15px',
                        boxShadow: 3,
                        transform: `rotate(${Math.random() * 10 - 5}deg)`, // Adds a slight random rotation
                        backgroundColor: '#fffde7',
                        borderRadius: '5px',
                    }}
                >
                    <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '10px' }}>
                        "{review.description}"
                    </Typography>
                    <Rating name="read-only" value={review.rating} precision={0.5} readOnly />
                    <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 'bold', marginTop: '10px' }}>
                        - {review.author}
                    </Typography>
                </Paper>
            ))}
        </Box>
    );
};

export default Reviews;
