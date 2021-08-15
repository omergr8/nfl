import classes from "./Common.module.css";
import topRight from "../../assets/topRight.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Button } from "@material-ui/core/";

const HorizontalOverlayCard = ({ data }) => {
  return (
    <div>
      <div className={classes.hocMain}>
        {data.map((rd, i) => (
          <div className={classes.hocImageContainer} key={i}>
            <img src={topRight} alt="topRight" width="380px" />
            <div className={classes.hocOverlay} />
            <div className={classes.hocTextAbsoulute}>
              <div className={classes.hocTextContainer}>
                <p className={classes.rightDate}>{rd.date}</p>
                <h2 className={classes.rightHead}>{rd.heading1}</h2>
                <h2 className={classes.rightWeek}>{rd.heading2}</h2>
                <p className={classes.rightDesc}>{rd.desc}</p>
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
    </div>
  );
};
export default HorizontalOverlayCard;
