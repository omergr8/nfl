import classes from "./Devy.module.css";
import HeadBox from "../Common/HeadBox";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import thumb from "../../assets/thumbnail.png";
import ThumbnailCard from "../Common/ThubmnailCard";
import HorizontalOverlayCard from "../Common/HorizontalOverlayCard";
const thumbData = [
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
  {
    image: thumb,
    date: "10/9/2020",
    heading1: "Fantasy Football sleepers:",
    heading2: "Week 5",
    para: "Fantasy Football Sleepers for Week 5 As the late-great Eddie Van Halen....",
  },
];
const horizontalData = [
  {
    date: "10/9/2020",
    heading1: " Fantasy Football Sleepers:",
    heading2: "Week 5",
    desc: "  Fantasy Football Sleepers for Week 5 As the late-great Eddie Van Halen....",
  },
  {
    date: "10/9/2020",
    heading1: " Fantasy Football Sleepers:",
    heading2: "Week 5",
    desc: "  Fantasy Football Sleepers for Week 5 As the late-great Eddie Van Halen....",
  },
  {
    date: "10/9/2020",
    heading1: " Fantasy Football Sleepers:",
    heading2: "Week 5",
    desc: "  Fantasy Football Sleepers for Week 5 As the late-great Eddie Van Halen....",
  },
  {
    date: "10/9/2020",
    heading1: " Fantasy Football Sleepers:",
    heading2: "Week 5",
    desc: "  Fantasy Football Sleepers for Week 5 As the late-great Eddie Van Halen....",
  },
];
const Devy = () => {
  return (
    <div>
      <HeadBox heading="devy" />
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={8}>
          <HorizontalOverlayCard data={horizontalData} />
        </Grid>
        <Grid item xs={4}>
          <ThumbnailCard data={thumbData} />
        </Grid>
      </Grid>
      <div className={classes.viewAllButtonDiv}>
        <Button
          className={classes.viewAllButton}
          endIcon={<AiOutlineArrowRight />}
        >
          view all articles
        </Button>
      </div>
    </div>
  );
};
export default Devy;
