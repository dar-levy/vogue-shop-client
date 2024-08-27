import React, { useEffect } from 'react';
import { Box, Paper, Typography, Rating } from '@mui/material';
import { useStoreContext } from '../context/StoreContext';

export interface Review {
    id: number;
    description: string;
    author: string;
    rating: number;
}

const Reviews: React.FC = () => {
    const { reviews, setReviews } = useStoreContext();

    useEffect(() => {
        // Simulate fetching 10 reviews from an API
        const fetchedReviews: Review[] = [
            { id: 1, description: 'Great product! Loved the experience.', author: 'Alice', rating: 4.5 },
            { id: 2, description: 'The product was decent but could be improved.', author: 'Bob', rating: 3.5 },
            { id: 3, description: 'Not satisfied. Expected better quality.', author: 'Charlie', rating: 2.5 },
            { id: 4, description: 'Amazing! Will buy again.', author: 'David', rating: 5 },
            { id: 5, description: 'Pretty good, but room for improvement.', author: 'Eve', rating: 4 },
            { id: 6, description: 'Not what I expected.', author: 'Frank', rating: 2 },
            { id: 7, description: 'Worth every penny!', author: 'Grace', rating: 5 },
            { id: 8, description: 'Mediocre, could be better.', author: 'Hank', rating: 3 },
            { id: 9, description: 'Really loved it, would recommend!', author: 'Ivy', rating: 4.5 },
            { id: 10, description: 'It was okay, but I’ve seen better.', author: 'John', rating: 3 },
        ];
        setReviews(fetchedReviews);  // Store reviews in the context
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
