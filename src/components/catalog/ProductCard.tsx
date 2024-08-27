import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {Product} from "../../models/product.ts";
import {useState} from "react";
import {useStoreContext} from "../../context/StoreContext.tsx";
import agent from "../../services/agent.ts";
import LoadingButton from "@mui/lab/LoadingButton";
import {Link} from "react-router-dom";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const {setBasket} = useStoreContext();
    const [loading, setLoading] = useState(false);

    function handleAddItem(productId: number) {
        setLoading(true);
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }

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
                <LoadingButton
                    loading={loading}
                    onClick={() => handleAddItem(product.id)}
                    size="small">Add to Cart</LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
        </Card>
    )
}
