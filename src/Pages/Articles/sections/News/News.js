import classes from "./News.module.css";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../Common/NewsCard";
import HeadBox from "../Common/HeadBox";
const newsData = [
  {
    heading: "Matchup Previews + Week 5",
    text1: "Injury Analysis with Dr. David Chao",
    text2: "(2020 Fantasy Football)",
  },
  {
    heading: "Matchup Previews + Week 5",
    text1: "Injury Analysis with Dr. David Chao",
    text2: "(2020 Fantasy Football)",
  },
  {
    heading: "Matchup Previews + Week 5",
    text1: "Injury Analysis with Dr. David Chao",
    text2: "(2020 Fantasy Football)",
  },
];
const News = () => {
  return (
    <div>
      <div className={classes.mainNews}>
        <div className={classes.mainNewsOverlay} />
        <div className={classes.mainContaier}>
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <HeadBox heading="nfl player news" />
              <NewsCard newsData={newsData} />
            </Grid>
            <Grid item xs={2}>
              <div className={classes.newsMidLine} />
            </Grid>
            <Grid item xs={5}>
              <HeadBox heading="ncaaf player news" />
              <NewsCard newsData={newsData} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default News;
