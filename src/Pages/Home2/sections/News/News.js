import classes from "./News.module.css";
import Grid from "@material-ui/core/Grid";
import NewsArticle from "./Components/NewsArticle";
import HeadBox from "../HeadBox/HeadBox";
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
              <HeadBox heading="player news" />
              <NewsArticle newsData={newsData} />
            </Grid>
            <Grid item xs={2}>
              <div className={classes.newsMidLine} />
            </Grid>
            <Grid item xs={5}>
              <HeadBox heading="last articles" />
              <NewsArticle newsData={newsData} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default News;
