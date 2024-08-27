// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import {useStoreContext} from "../context/StoreContext.tsx";

export interface Review {
    id: number;
    description: string;
    author: string;
}

const ReviewsTab: React.FC = () => {
    const { reviews, setReviews } = useStoreContext();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        const fetchedReviews: Review[] = [
            { id: 1, description: 'Great product!', author: 'Alice' },
            { id: 2, description: 'Not bad.', author: 'Bob' },
            { id: 3, description: 'Could be better.', author: 'Charlie' }
        ];
        setReviews(fetchedReviews);
    }, [setReviews]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="Reviews Tabs">
                {reviews.map((review, index) => (
                    <Tab label={`Review ${index + 1}`} key={review.id} />
                ))}
            </Tabs>
            {reviews.map((review, index) => (
                <TabPanel value={value} index={index} key={review.id}>
                    <Typography variant="h6">{review.author}</Typography>
                    <Typography>{review.description}</Typography>
                </TabPanel>
            ))}
        </Box>
    );
};

// TabPanel component to show the content of each tab
const TabPanel: React.FC<{ value: number, index: number }> = ({ value, index, children }) => {
    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

export default ReviewsTab;
