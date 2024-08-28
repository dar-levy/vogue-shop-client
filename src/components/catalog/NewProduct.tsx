// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { TextField, Button, Grid, Typography, Paper, Avatar } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import Form from "../common/Form.tsx";
// import { saveProduct } from "../../services/productService";


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
        _id: Joi.string(),
        name: Joi.string().required().label("Name"),
        description: Joi.string().required().label("Description"),
        price: Joi.number().required().label("Price"),
        brand: Joi.string().required().label("Brand"),
        type: Joi.string().required().label("Type"),
        pictureUrl: Joi.string().required().uri().label("Image URL"),
    };

    doSubmit = async () => {
        try {
            // await saveProduct(this.state.data);
            this.props.navigate("/catalog");
            toast.success("Saved successfully.");
        } catch (err) {
            toast.error("Could not save the product");
        }
    };

    render() {
        const { pictureUrl } = this.state.data;

        return (
            <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: "auto" }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Product Form
                </Typography>
                {pictureUrl && (
                    <Grid container justifyContent="center" sx={{ marginBottom: 2 }}>
                        <Avatar
                            alt="Product Image"
                            src={pictureUrl}
                            sx={{ width: 100, height: 100 }}
                        />
                    </Grid>
                )}
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {this.renderTextField("name", "Name")}
                        </Grid>
                        <Grid item xs={12}>
                            {this.renderTextField("description", "Description")}
                        </Grid>
                        <Grid item xs={12}>
                            {this.renderTextField("price", "Price")}
                        </Grid>
                        <Grid item xs={12}>
                            {this.renderTextField("brand", "Brand")}
                        </Grid>
                        <Grid item xs={12}>
                            {this.renderTextField("type", "Type")}
                        </Grid>
                        <Grid item xs={12}>
                            {this.renderTextField("pictureUrl", "Picture URL")}
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={this.isFormInvalid()}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        );
    }

    renderTextField(name, label) {
        const { data, errors } = this.state;
        return (
            <TextField
                fullWidth
                variant="outlined"
                label={label}
                name={name}
                value={data[name]}
                onChange={this.handleChange}
                error={!!errors[name]}
                helperText={errors[name]}
            />
        );
    }

    isFormInvalid = () => {
        const { data, errors } = this.state;

        // Check if there are any errors or if any input field is empty
        const hasErrors = Object.keys(errors).length > 0;
        const hasEmptyFields = Object.values(data).some(value => value.trim() === "");

        return hasErrors || hasEmptyFields;
    };

}

export default NewProduct;
