import classes from "./Signup.module.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RegistrationNavbar from "../../Common/RegistrationNavbar/RegistrationNavbar";
import {
  TextField,
  Button,
  FormControl,
  InputAdornment,
  IconButton,
  MenuItem,
  Checkbox,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "100%",
  },
  color: "white",

  icon: {
    fill: "#49494B",
  },
  iAdor: {
    color: "white",
  },
}));

const Signup = () => {
  const classes2 = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  function onLogin() {
    history.push("/login");
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className={classes.loginBack}>
        <RegistrationNavbar />
        <div className={classes.loginContainer}>
          <div className={classes.loginForm}>
            <div className={classes.topText}>
              <h2 className={classes.welcomText}>Sign Up</h2>
              <p className={classes.loginText}>
                Signup by entering the information below
              </p>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
              <div className={classes.nameDiv}>
                <CssTextField
                  className={classes.nameField}
                  label="Name"
                  required={true}
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
              </div>
              <div className={classes.emailDiv}>
                <CssTextField
                  className={classes.emailField}
                  label="Email"
                  required={true}
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
                <p className={classes.sendConfirmText}>
                  We will send you a confirmation email to this address
                </p>
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
              <div className={classes.passwordDiv}>
                <CssPasswordField
                  className={classes.passwordField}
                  id="standard-password-input"
                  label="Confirm Password"
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
              <div className={classes.aboutusDiv}>
                <FormControl
                  variant="outlined"
                  className={classes2.formControl}
                >
                  <CssPasswordField
                    className={classes.root}
                    variant="outlined"
                    label="How did you hear about us?"
                    select
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>A 1</MenuItem>
                    <MenuItem value={20}>A 2</MenuItem>
                    <MenuItem value={30}>A 3</MenuItem>
                  </CssPasswordField>
                </FormControl>
              </div>
            </form>
            <div className={classes.tou}>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <p>
                By creating an account, I agree to the{" "}
                <span className={classes.blueColor}>Terms of Use </span>
                and acknowledge that I have read the{" "}
                <span className={classes.blueColor}>Privacy Policy.</span>
              </p>
            </div>
            <div>
              <Button variant="contained" className={classes.loginButton}>
                Submit
              </Button>
            </div>
            <p className={classes.noAcoountText}>
              Already have an account ?
              <span>
                <Button onClick={onLogin} className={classes.signupButton}>
                  Sign in
                </Button>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
