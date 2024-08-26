// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";
import { useLocation } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { toast } from "react-toastify";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

class LoginForm extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {},
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.username, data.password);

            const { state } = this.props.location;
            toast.success("Successfully Logged In");
            window.location = state ? state.from.pathname : "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };

    renderTextField(name, label, type = "text") {
        const { data, errors } = this.state;

        return (
            <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                name={name}
                label={label}
                type={type}
                value={data[name]}
                onChange={this.handleChange}
                error={!!errors[name]}
                helperText={errors[name]}
            />
        );
    }

    render() {
        // if (auth.getCurrentUser()) return <Navigate to="/" />;

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
                    <Typography component="h1" variant="h3">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
                        {this.renderTextField("username", "Username")}
                        {this.renderTextField("password", "Password", "password")}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default function LoginFormWrapper(props) {
    const location = useLocation();
    return <LoginForm {...props} location={location} />;
}
