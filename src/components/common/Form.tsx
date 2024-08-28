// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Component } from "react";
import Joi from "joi-browser";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!!this.validate()}
            fullWidth
        >
          {label}
        </Button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
        <TextField
            variant="outlined"
            fullWidth
            type={type}
            name={name}
            value={data[name]}
            label={label}
            onChange={this.handleChange}
            error={Boolean(errors[name])}
            helperText={errors[name]}
            margin="normal"
        />
    );
  }

  renderForm(title, children) {
    return (
        <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: "auto" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              {children}
            </Grid>
          </form>
        </Paper>
    );
  }
}

export default Form;
