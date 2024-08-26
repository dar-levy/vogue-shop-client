import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {Product} from "../../models/product.ts";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Card sx={{
            transition: "transform 0.3s, box-shadow 0.3s",
            '&:hover': {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
            }
        }}>
            <CardMedia
                component="img"
                alt={product.name}
                image={product.pictureUrl}
            />
            <CardContent>
                <Typography gutterBottom color='primary' variant="h5" component="div">
                    ₪{(product.price)}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {product.brand} {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}
