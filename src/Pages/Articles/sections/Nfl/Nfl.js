import classes from "./Nfl.module.css";
import HeadBox from "../Common/HeadBox";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import thumb from "../../assets/thumbnail.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import ThumbnailCard from "../Common/ThubmnailCard";
import VerticleOverlayCard from "../Common/VerticleOverlayCard";
const cardData1 = [
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
const cardData2 = [
  {
    text1: "Matchup Previews + Week 5",
    text2: "Injury Analysis with Dr. David Chao",
    text3: "(2020 Fantasy Football)",
  },
  {
    text1: "Matchup Previews + Week 5",
    text2: "Injury Analysis with Dr. David Chao",
    text3: "(2020 Fantasy Football)",
  },
  {
    text1: "Matchup Previews + Week 5",
    text2: "Injury Analysis with Dr. David Chao",
    text3: "(2020 Fantasy Football)",
  },
];
const Nfl = () => {
  return (
    <div>
      <HeadBox heading="nfl" />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ThumbnailCard data={cardData1} />
        </Grid>
        <Grid item xs={8}>
          <VerticleOverlayCard data={cardData2} />
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
export default Nfl;
