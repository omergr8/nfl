import classes from "./Podcast.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import VideoGallery from "./Components/VideoGallery";
import podRight from "../../assets/podRight.svg";
import playIcon from "../../assets/playIcon.svg";
const Podcast = () => {
  return (
    <div>
      <div className={classes.podcastMain}>
        <div className={classes.podcastContainer}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <VideoGallery />
            </Grid>
            <Grid item xs={4} style={{ position: "relative" }}>
              <div className={classes.rightImage}>
                <div className={classes.rightImageContainer}>
                  <img src={podRight} alt="podRight" width="100%" />
                  <div className={classes.podeRightPlayIcon}>
                    <img src={playIcon} alt="playIcon" width="100%" />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Podcast;
