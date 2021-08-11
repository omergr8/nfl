import classes from "./TopBar.module.css";
import Grid from "@material-ui/core/Grid";
import LeftCard from "./Components/LeftCard";
import RightCard from "./Components/RightCard";
const TopBar = () => {
  return (
    <div>
      <div className={classes.mainContainer}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <LeftCard />
          </Grid>
          <Grid item xs={5}>
            <RightCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default TopBar;
