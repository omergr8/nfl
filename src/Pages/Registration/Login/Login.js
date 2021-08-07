import classes from "./Login.module.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RegistrationNavbar from "../../Common/RegistrationNavbar/RegistrationNavbar";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/core/styles";
const CssTextField = withStyles({
  root: {
    [`& fieldset`]: {
      borderRadius: 0,
    },
    "& .MuiInputBase-root": {
      background: "black",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      color: "#3D98D1",
      "& fieldset": {
        borderColor: "#49494B",
        color: "white",
      },
      "&:hover fieldset": {
        borderColor: "#49494B",
        color: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3D98D1",
        color: "white",
      },
    },
  },
})(TextField);
const CssPasswordField = withStyles({
  root: {
    [`& fieldset`]: {
      borderRadius: 0,
    },
    "& .MuiSelect-icon": {
      color: "white",
    },
    "& .MuiInputBase-root": {
      background: "black",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
      background: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      color: "white !important",

      "& fieldset": {
        borderColor: "#49494B",
      },
      "&:hover fieldset": {
        borderColor: "#49494B",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3D98D1",
        color: "white",
      },
    },
  },
})(TextField);
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function goSignup() {
    history.push("/signup");
  }
  return (
    <div>
      <div className={classes.loginBack}>
        <RegistrationNavbar />
        <div className={classes.loginContainer}>
          <div className={classes.loginForm}>
            <div className={classes.topText}>
              <h2 className={classes.welcomText}>Welcome back</h2>
              <p className={classes.loginText}>
                Signin by entering the information below
              </p>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
              <div className={classes.emailDiv}>
                <CssTextField
                  className={classes.emailField}
                  label="Email"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </div>
              <div className={classes.passwordDiv}>
                <CssPasswordField
                  className={classes.passwordField}
                  id="standard-password-input"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          className={classes.visibiliyButtons}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </form>
            <div className={classes.forgotDiv}>
              <Button href="#text-buttons" className={classes.forgotButton}>
                Forgot Password?
              </Button>
            </div>
            <div>
              <Button variant="contained" className={classes.loginButton}>
                Login
              </Button>
            </div>
            <p className={classes.noAcoountText}>
              Dont have an account yet ?{" "}
              <span>
                <Button className={classes.signupButton} onClick={goSignup}>
                  Sign up
                </Button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
