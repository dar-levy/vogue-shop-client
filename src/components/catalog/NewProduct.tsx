// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../common/Form.tsx";
import {Avatar, Box, Container, Typography} from "@mui/material";
import React from "react";
import * as config from "../../config.json"
import { v4 as uuidv4 } from 'uuid';
import { saveProduct } from "../../services/productService.ts";


class NewProduct extends Form {
    state = {
        data: {
            id: uuidv4(),
            name: "",
            description: "",
            price: "",
            brand: "",
            type: "",
            pictureUrl: "",
        },
        errors: {},
    };

    schema = {
        id: Joi.string(),
        name: Joi.string().required().label("Name"),
        description: Joi.string().required().label("Description"),
        price: Joi.number().required().label("Price"),
        brand: Joi.string().required().label("Brand"),
        type: Joi.string().required().label("Type"),
        pictureUrl: Joi.string().required().uri().label("Image URL"),
    };

    doSubmit = async () => {
        try {
            await saveProduct(this.state.data);
            window.location("/catalog");
            toast.success("Saved successfully.");
        } catch (err) {
            toast.error("Could not save the product");
        }
    };

    render() {
        const { pictureUrl } = this.state.data;

        return (
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h3" color="text.primary">
                        New Product
                    </Typography>
                    <Avatar
                        src={pictureUrl || config.DEFAULT_IMAGE_URL}
                        alt="Product Image"
                        sx={{ width: 100, height: 100, marginBottom: 2, marginTop: 2}}
                    />
                    <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                        {this.renderInput("name", "Name")}
                        {this.renderInput("description", "Description")}
                        {this.renderInput("price", "Price")}
                        {this.renderInput("brand", "Brand")}
                        {this.renderInput("type", "Type")}
                        {this.renderInput("pictureUrl", "Picture URL")}
                        {this.renderButton("Save")}
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default NewProduct;
