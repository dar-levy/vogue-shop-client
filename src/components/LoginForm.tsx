// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { toast } from "react-toastify";
import React from "react";
import { Container, Typography, Box, FormControlLabel, Checkbox } from "@mui/material";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "", rememberMe: false },
        errors: {},
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
        rememberMe: Joi.boolean().label("Remember Me")
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.username, data.password, data.rememberMe);
            toast.success("Successfully Logged In");
            setTimeout(() => {
                window.location = "/";
            }, 500);
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    render() {
        if (auth.getCurrentUser()) return <Navigate to="/" />;

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
                        Login
                    </Typography>
                    <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                        {this.renderInput("username", "Username")}
                        {this.renderInput("password", "Password", "password")}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.data.rememberMe}
                                    onChange={this.handleChange}
                                    name="rememberMe"
                                    color="primary"
                                />
                            }
                            label="Remember Me"
                        />
                        {this.renderButton("Login")}
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default LoginForm;
