import classes from "./Aboutus.module.css";
import aboutUs from "../../assets/aboutUs.png";
import Button from "@material-ui/core/Button";
import HeadBox from "../HeadBox/HeadBox";
import { AiOutlineArrowRight } from "react-icons/ai";
const Aboutus = () => {
  return (
    <div className={classes.main}>
      <HeadBox heading="about us" />
      <div className={classes.flex}>
        <div className={classes.imageContainer}>
          <img src={aboutUs} alt="aboutUs" width="890px" />
          <div className={classes.imageOverlay} />
        </div>
        <div className={classes.boxAbsolute}>
          <div className={classes.boxContainer}>
            <div className={classes.secondBox}>
              <p className={classes.secondBoxText}>we are</p>
            </div>
            <div className={classes.mainBoxText}>
              <h2 className={classes.heading}>Cerberus Football Fantasy</h2>
              <p className={classes.text1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been....
              </p>
              <p className={classes.text2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since...
              </p>
            </div>
            <div className={classes.viewAllButtonDiv}>
              <Button
                className={classes.viewAllButton}
                endIcon={<AiOutlineArrowRight />}
              >
                view all articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
