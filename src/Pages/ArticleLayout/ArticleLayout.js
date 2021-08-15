import classes from "./ArticleLayout.module.css";
import HeadBox from "./sections/Article/Components/HeadBox";
import Article from "./sections/Article/Article";
import PlayerNews from "./sections/PlayerNews/PlayerNews";
import ThubmnailCard from "../Articles/sections/Common/ThubmnailCard";
import Videos from "./sections/Videos/Videos";
import Comments from "./sections/Comments/Comments";
import Grid from "@material-ui/core/Grid";
import leftDots from "./assets/leftDots.png";
import rightDots from "./assets/rightDots.png";
import { article, newsData, thumbData } from "./data";
const ArticleLayout = () => {
  return (
    <div className={classes.main}>
      <div className={classes.headingContainer}>
        <HeadBox heading="Best Ball Dart Throws at WR 2021 Fantasy Football" />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <div className={classes.articleMain}>
            <Article article={article} />
            <div className={classes.articleMainAbsolute}>
              <img src={leftDots} alt="leftDots" width="100%" />
            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className={classes.rightSectionMain}>
            <div style={{ marginLeft: "50px" }}>
              {" "}
              <HeadBox heading="ncaaf player news" />
            </div>
            <PlayerNews data={newsData} />
            <div style={{ marginLeft: "50px" }}>
              <HeadBox heading="nfl player news" />
              <ThubmnailCard data={thumbData} />
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={classes.articleMain}>
        <HeadBox heading="you may also like" />
        <Videos />
        <div className={classes.videoMainAbsolute}>
          <img src={rightDots} alt="leftDots" width="100%" />
        </div>
      </div>

      <div>
        <HeadBox heading="comments" />
        <Comments />
      </div>
    </div>
  );
};
export default ArticleLayout;
