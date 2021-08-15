import classes from "./Videos.module.css";
import Grid from "@material-ui/core/Grid";
import LeftCard from "./Components/LeftCard";
import RightCard from "./Components/RightCard";

const Videos = () => {
  return (
    <div>
      <div className={classes.mainContainer}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <div>
              <LeftCard />
            </div>
          </Grid>
          <Grid item xs={4}>
            <RightCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Videos;
