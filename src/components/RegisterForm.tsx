// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import Form from "./common/Form.tsx";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
      window.location = "/";
      toast.success("Successfully Registered");
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
              Register
            </Typography>
            <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
              {this.renderTextField("username", "Username")}
              {this.renderTextField("password", "Password", "password")}
              {this.renderTextField("name", "Name")}
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Container>
    );
  }
}

export default RegisterForm;
