import classes from "./Highlights.module.css";
import LeftCard from "./Components/LeftCard";
import RightGallery from "./Components/RightGallery";
import Grid from "@material-ui/core/Grid";
import HeadBox from "../HeadBox/HeadBox";
import dotsBack1 from "../../assets/dotsBack.png";
const Highlights = () => {
  return (
    <div>
      <div className={classes.mainContainer}>
        <HeadBox heading="HIGHLIGHTS WEEK" />
        <div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <LeftCard />
            </Grid>
            <Grid item xs={6}>
              <RightGallery />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Highlights;
