import classes from "./Ncaaf.module.css";
import Grid from "@material-ui/core/Grid";
import HeadBox from "../Common/HeadBox";
import Button from "@material-ui/core/Button";
import HorizontalCard from "../Common/HorizontalCard";
import VerticleOverlayCard from "../Common/VerticleOverlayCard";
import { AiOutlineArrowRight } from "react-icons/ai";

const verticleCardData = [
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
const horizontalCardData = {
  date: "10/9/2020",
  desc: "Matchup Previews + Week 5 Injury Analysis With Dr. David Caho (2020 FANTASY FOOTBALL)",
};
const Ncaaf = () => {
  return (
    <div>
      <HeadBox heading="ncaaf" />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <HorizontalCard data={horizontalCardData} />
        </Grid>
        <Grid item xs={6}>
          <VerticleOverlayCard data={verticleCardData} />
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
export default Ncaaf;
