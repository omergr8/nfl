import classes from "./RegistrationNavbar.module.css";
import logo from "../../../Assets/logo.svg";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
const RegistrationNavbar = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }
  return (
    <div>
      <div className={classes.navFlex}>
        <img src={logo} width="100px" alt="logo" />
        <Button className={classes.backButton} onClick={handleClick}>
          Back
        </Button>
      </div>
    </div>
  );
};
export default RegistrationNavbar;
