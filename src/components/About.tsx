import { Box, Container, Typography } from '@mui/material';

export default function AboutPage() {
    return (
        <Container>
            <Typography variant='h2' gutterBottom color="text.primary">
                About Vogue Shop
            </Typography>
            <Typography variant='body1' paragraph color="text.primary">
                Welcome to Vogue Shop, where fashion meets elegance. At Vogue, we are dedicated to bringing you the latest trends in fashion with an emphasis on quality, style, and customer satisfaction. Our collections are carefully curated to provide you with the finest selection of apparel, accessories, and more, ensuring that you always step out in style.
            </Typography>
            <Typography variant='body1' paragraph color="text.primary">
                Since our inception, we have been committed to offering our customers a seamless shopping experience, both online and in-store. We believe in the power of fashion to express individuality and confidence, and we are here to help you find the perfect pieces that resonate with your personal style.
            </Typography>
            <Typography variant='body1' paragraph color="text.primary">
                At Vogue Shop, we pride ourselves on our exceptional customer service and our passion for fashion. Whether you're looking for the latest runway trends or timeless classics, we have something for everyone. Join us on our journey to make the world a more stylish place, one outfit at a time.
            </Typography>
        </Container>
    );
}
