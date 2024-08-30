import React, { useEffect } from 'react';
import { Box, Paper, Typography, Rating } from '@mui/material';
import { useStoreContext } from '../context/StoreContext';
import {getReviews} from "../services/reviewsService.ts";
import {toast} from "react-toastify";

export interface Review {
    id: number;
    description: string;
    author: string;
    rating: number;
}

const Reviews: React.FC = () => {
    const { reviews, setReviews } = useStoreContext();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data } = await getReviews()
                setReviews(data);
            } catch (e) {
                toast.error("Could not get the products");
            }
        }

        fetchReviews();
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
                        '&:hover': {
                        backgroundColor: '#f9f3b3',
                        transform: 'scale(1.05)',
                        transition: 'transform 0.2s ease-in-out',
                        },
                        width: '250px',
                        padding: '15px',
                        boxShadow: 3,
                        transform: `rotate(${Math.random() * 10 - 5}deg)`,
                        backgroundColor: '#fff9c4',
                        borderRadius: '5px',
                        color: 'black',
                    }}
                >
                    <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '10px', color: 'black' }}>
                        "{review.description}"
                    </Typography>
                    <Rating name="read-only" value={review.rating} precision={0.5} readOnly />
                    <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 'bold', marginTop: '10px', color: 'black' }}>
                        - {review.author}
                    </Typography>
                </Paper>
            ))}
        </Box>
    );
};

export default Reviews;
