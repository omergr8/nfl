import classes from "./RegistrationNavbar.module.css";
import logo from "../../../Assets/logo.svg";
import Button from "@material-ui/core/Button";
const RegistrationNavbar = () => {
  return (
    <div>
      <div className={classes.navFlex}>
        <img src={logo} width="100px" alt="logo" />
        <Button className={classes.backButton}>Back</Button>
      </div>
    </div>
  );
};
export default RegistrationNavbar;
