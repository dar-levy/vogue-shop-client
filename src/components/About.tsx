import { Box, Container, Typography } from '@mui/material';
import {useEffect, useState} from "react";
import {getAbout} from "../services/aboutService.ts";
import {toast} from "react-toastify";

export default function AboutPage() {
    const [description, setDescription] = useState<string>();

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const { data } = await getAbout()
                setDescription(data)
            }
            catch (e) {
                toast.error("Could not get the description");
            }
        }

        fetchAbout()
    }, []);

    return (
        <Container>
            <Typography variant='h2' gutterBottom color="text.primary">
                About Vogue Shop
            </Typography>
            <Typography variant='body1' color="text.primary">
                {description}
            </Typography>
        </Container>
    );
}
