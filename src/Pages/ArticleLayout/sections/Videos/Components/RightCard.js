import classes from "../Videos.module.css";
import Button from "@material-ui/core/Button";
import thumb from "../../../assets/thumbnail.png";
import playIcon from "../../../assets/playIcon.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
const rightCardData = [
  {
    image: thumb,
    date: "10/9/2020",
    heading1: "Fantasy Football sleepers:",
    heading2: "Week 5",
    para: "Fantasy Football Sleepers for Week 5 As the late-great Eddie Van Halen....",
  },
  {
    image: thumb,
    date: "10/9/2020",
    heading1: "Fantasy Football sleepers:",
    heading2: "Week 5",
    para: "Fantasy Football Sleepers for Week 5 As the late-great Eddie Van Halen....",
  },
];
const RightCard = () => {
  return (
    <div>
      {rightCardData.map((rd, i) => (
        <div className={classes.thumbBox} key={i}>
          <div className={classes.flex}>
            <div className={classes.imageThumb}>
              <img src={rd.image} width="120px" alt="thumbnail" />
              <div className={classes.imageThumbOverlay}></div>
              <div className={classes.imageThumbPlay}>
                <img src={playIcon} alt="playIcon" />
              </div>
            </div>
            <div className={classes.boxText}>
              <p>{rd.date}</p>
              <h2>{rd.heading1}</h2>
              <h2>{rd.heading2}</h2>
              <p>{rd.para}</p>
            </div>
          </div>
        </div>
      ))}
      <div className={classes.viewAllButtonDiv}>
        <Button
          className={classes.viewAllButton}
          endIcon={<AiOutlineArrowRight />}
        >
          view all VIDEOS
        </Button>
      </div>
    </div>
  );
};
export default RightCard;
