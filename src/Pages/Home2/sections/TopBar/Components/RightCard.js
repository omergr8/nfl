import classes from "../TopBar.module.css";
import topRight from "../../../assets/topRight.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Button } from "@material-ui/core/";
const data = [
  {
    date: "10/9/2020",
    heading1: "Fantasy Football Sleepers:",
    heading2: "Week 5",
    text: " Fantasy Football Sleepers for Week 5 As the late-great Eddie Van Halen....",
  },
  {
    date: "10/9/2020",
    heading1: "Fantasy Football Sleepers:",
    heading2: "Week 5",
    text: " Fantasy Football Sleepers for Week 5 As the late-great Eddie Van Halen....",
  },
];
const RightCard = () => {
  return (
    <div>
      {/* <img src={topRight} width="100%" /> */}
      {data.map((dt, i) => (
        <div className={classes.rightBack} key={i}>
          <div className={classes.rightContainer}>
            <img src={topRight} alt="top right" width="100%" />
            <div className={i === 0 ? classes.rcOverlay : classes.rcOverlay2} />
            <div className={classes.leftAbsoulute}>
              <p className={classes.rightDate}>{dt.date} </p>
              <h2 className={classes.rightHeading}>{dt.heading1} </h2>
              <h2 className={classes.rightWeek}>{dt.heading2}</h2>
              <p className={classes.rightDesc}>{dt.text}</p>
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
      ))}
    </div>
  );
};
export default RightCard;
