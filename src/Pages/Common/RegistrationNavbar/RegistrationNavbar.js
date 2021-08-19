import classes from "./RegistrationNavbar.module.css";
import logo from "../../../Assets/logo.svg";
import Button from "@material-ui/core/Button";
import { useHistory, Link } from "react-router-dom";
const RegistrationNavbar = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div>
      <div className={classes.navFlex}>
        <Link to="/">
          <img src={logo} width="100px" alt="logo" />
        </Link>

        <Button className={classes.backButton} onClick={handleClick}>
          Back
        </Button>
      </div>
    </div>
  );
};
export default RegistrationNavbar;
