import { Box, Container, Grid, Typography, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {getContact} from "../services/contactService.ts";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export default function ContactPage() {
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const { data } = await getContact()
                setDescription(data);
            } catch (err) {
                toast.error("Could not get contact info");
            }
        }

        fetchDescription()
    }, []);

    return (
        <Container>
            <Typography variant="h2" color="text.primary" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
                {description}
            </Typography>
            <Box mt={4}>
                <Typography variant="h4" color="text.primary" gutterBottom>
                    Our Owners
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Typography variant="h5" color="text.primary">Ziv Somech</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body1" color="text.primary">
                                <Link href="tel:0542111199" color="inherit">
                                    054-2111199
                                </Link>
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <EmailIcon sx={{ mr: 1 }} />
                            <Typography variant="body1" color="text.primary">
                                <Link href="mailto:ziv.somech@post.runi.ac.il" color="inherit">
                                    ziv.somech@post.runi.ac.il
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Typography variant="h5" color="text.primary">Dar Levy</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body1" color="text.primary">
                                <Link href="tel:0508555507" color="inherit">
                                    050-8555507
                                </Link>
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <EmailIcon sx={{ mr: 1 }} />
                            <Typography variant="body1" color="text.primary">
                                <Link href="mailto:dar.levy@post.runi.ac.il" color="inherit">
                                    dar.levy@post.runi.ac.il
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
