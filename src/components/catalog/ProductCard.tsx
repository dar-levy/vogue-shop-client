import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {Product} from "../../models/product.ts";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={product.name}
                image={product.pictureUrl}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5" component="div">
                    ₪{(product.price)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}
