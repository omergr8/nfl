import classes from "../TopBar.module.css";
import topRight from "../../../assets/topRight.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { Button } from "@material-ui/core/";
const RightCard = () => {
  return (
    <div>
      {/* <img src={topRight} width="100%" /> */}
      <div className={classes.rightBack}>
        <div className={classes.rightContainer}>
          <div className={classes.leftAbsoulute}>
            <p className={classes.rightDate}>10/9/2020</p>
            <h2>Fantasy Football Sleepers:</h2>
            <h2 className={classes.rightWeek}>Week 5</h2>
            <p className={classes.rightDesc}>
              Fantasy Football Sleepers for Week 5 As the late-great Eddie Van
              Halen....
            </p>
            <div className={classes.rightExploreButtonDiv}>
              <Button
                className={classes.rightExploreButton}
                endIcon={<BsArrowRightShort />}
              >
                Explore more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightBack2}>
        <div className={classes.rightContainer}>
          <div className={classes.leftAbsoulute}>
            <p className={classes.rightDate}>10/9/2020</p>
            <h2>Fantasy Football Sleepers:</h2>
            <h2 className={classes.rightWeek}>Week 5</h2>
            <p className={classes.rightDesc}>
              Fantasy Football Sleepers for Week 5 As the late-great Eddie Van
              Halen....
            </p>
            <div className={classes.rightExploreButtonDiv}>
              <Button
                className={classes.rightExploreButton}
                endIcon={<BsArrowRightShort />}
              >
                Explore more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightCard;
