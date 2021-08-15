import classes from "./Articles.module.css";
import Grid from "@material-ui/core/Grid";
import Nfl from "./sections/Nfl/Nfl";
import Ncaaf from "./sections/Ncaaf/Ncaaf";
import Devy from "./sections/Devy/Devy";
import Campus from "./sections/Campus/Campus";
import Dynasty from "./sections/Dynasty/Dynasty";
import Season from "./sections/Season/Season";
import News from "./sections/News/News";
import dots from "./assets/dots.png";
const Articles = () => {
  return (
    <>
      <div className={classes.articleHeading}>
        <h1>Articles</h1>
      </div>
      <div className={classes.main}>
        <div>
          <Nfl />
        </div>
        <div className={classes.ncaaf}>
          <div className={classes.ncaafAbsoulte}>
            <img src={dots} alt="dots" width="74%" />
          </div>
          <Ncaaf />
        </div>
        <div>
          <Devy />
        </div>
        <div>
          <Campus />
        </div>
        <div>
          <Dynasty />
        </div>
        <div>
          <Season />
        </div>
      </div>
      <div>
        <News />
      </div>
    </>
  );
};
export default Articles;
