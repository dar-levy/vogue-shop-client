import { Box, Container, Grid, Typography, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactPage() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                We would love to hear from you! Whether you have a question about our products, services, pricing, or anything else, our team is ready to answer all your questions.
            </Typography>
            <Box mt={4}>
                <Typography variant="h4" gutterBottom>
                    Our Owners
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Typography variant="h5">Ziv Somech</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body1">
                                <Link href="tel:0542111199" color="inherit">
                                    054-2111199
                                </Link>
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <EmailIcon sx={{ mr: 1 }} />
                            <Typography variant="body1">
                                <Link href="mailto:ziv.somech@post.runi.ac.il" color="inherit">
                                    ziv.somech@post.runi.ac.il
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Typography variant="h5">Dar Levy</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body1">
                                <Link href="tel:0508555507" color="inherit">
                                    050-8555507
                                </Link>
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <EmailIcon sx={{ mr: 1 }} />
                            <Typography variant="body1">
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
