import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  validateFirstLastName,
  validateEmail,
  validatePassword,
} from "./SignUpValidation";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        value: "",
        error: "",
      },
      lastName: {
        value: "",
        error: "",
      },
      email: {
        value: "",
        error: "",
      },
      username: {
        value: "",
        error: "",
      },
      password: {
        value: "",
        error: "",
      },
      password_conformation: {
        value: "",
        error: "",
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: { value: event.target.value, error: "" },
    });
  };

  submitForm(event) {
    event.preventDefault();
    const first_name_error = validateFirstLastName(this.state.firstName.value);
    if (first_name_error) {
      this.setState({
        firstName: {
          value: this.state.firstName.value,
          error: first_name_error,
        },
      });
    }
    const last_name_error = validateFirstLastName(this.state.lastName.value);
    if (last_name_error) {
      this.setState({
        lastName: {
          value: this.state.lastName.value,
          error: last_name_error,
        },
      });
    }
    const email_error = validateEmail(this.state.email.value);
    if (email_error) {
      this.setState({
        email: {
          value: this.state.email.value,
          error: email_error,
        },
      });
    }
    const username_error = validateUsername(this.state.username.value);
    if (username_error) {
      this.setState({
        username: {
          value: this.state.username.value,
          error: username_error,
        },
      });
    }
    const password_error = validatePassword(
      this.state.password.value,
      this.state.password_conformation.value
    );
    if (password_error) {
      this.setState({
        inquiry: {
          value: this.state.password.value,
          error: password_error,
        },
      });
    }
    const password_conformation_error = validatePassword(
      this.state.password.value,
      this.state.password_conformation.value
    );
    if (password_error) {
      this.setState({
        inquiry: {
          value: this.state.password_conformation.value,
          error: password_conformation_error,
        },
      });
    }
    if (
      first_name_error ||
      last_name_error ||
      email_error ||
      username_error ||
      password_error ||
      password_conformation_error
    ) {
      return;
    }
    alert("Your submission was successful");
    this.state = {
      firstName: {
        value: "",
        error: "",
      },
      lastName: {
        value: "",
        error: "",
      },
      email: {
        value: "",
        error: "",
      },
      username: {
        value: "",
        error: "",
      },
      password: {
        value: "",
        error: "",
      },
      password_conformation: {
        value: "",
        error: "",
      },
    };
    //     };
  }

  render() {
    const mystyle = {
      color: "red",
      display: "flex",
      textAlign: "center",
    };

    return (
      <Grid container>
        <Typography
          style={{ marginLeft: "70px", color: "blue" }}
          variant="h3"
          component="h3"
          gutterBottom
        >
          Sign Up Form
        </Typography>

        <form
          onSubmit={(event) => {
            this.submitForm(event);
          }}
        >
          <Grid item md={6} style={{ marginRight: "20px" }}>
            <TextField
              error={this.state.firstName.error}
              helperText={this.state.firstName.error}
              name="firstName"
              onChange={this.handleChange}
              type="text"
              value={this.state.firstName.value}
              id="standard-helperText"
              label="First Name"
            />
          </Grid>

          <Grid item md={6}>
            <TextField
              error={this.state.lastName.error}
              helperText={this.state.lastName.error}
              name="lastName"
              onChange={this.handleChange}
              type="text"
              value={this.state.lastName.value}
              id="standard-helperText"
              label="Last Name"
            />
          </Grid>

          <Grid item xs={6} style={{ marginRight: "20px" }}>
            <TextField
              fullWidth
              error={this.state.email.error}
              helperText={this.state.email.error}
              name="email"
              onChange={this.handleChange}
              type="text"
              value={this.state.email.value}
              id="standard-helperText"
              label="Email"
            />
          </Grid>

          <Grid>
            <TextField
              error={this.state.username.error}
              helperText={this.state.username.error}
              name="phone"
              onChange={(e) => {
                this.handleChange(e);
              }}
              type="text"
              value={this.state.username.value}
              id="standard-helperText"
              label="Username"
            />
          </Grid>
          <Grid>
            <TextField
              name="password"
              error={this.state.password.error}
              helperText={this.state.password.error}
              value={this.state.password.value}
              onChange={this.handleChange}
              id="outlined-multiline-static"
              label="Password"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              name="password _conformation"
              error={this.state.password.error}
              helperText={this.state.password.error}
              value={this.state.password.value}
              onChange={this.handleChange}
              id="outlined-multiline-static"
              label="Password"
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Button
            style={{ marginLeft: "140px" }}
            variant="contained"
            type="submit"
            onSubmit={(event) => this.submitForm(event)}
            color="primary"
          >
            SIGN UP
          </Button>
        </form>
      </Grid>
    );
  }
}
export default SignUpForm;
