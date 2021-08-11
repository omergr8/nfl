import classes from "../TopBar.module.css";
import topLeft from "../../../assets/topLeft.png";
import { Button } from "@material-ui/core/";
const LeftCard = () => {
  return (
    <div>
      <div className={classes.leftCardImage}>
        <img src={topLeft} alt="leftCard" width="100%" />
      </div>
      <div className={classes.leftCardText}>
        <p>10/9/2020</p>
        <h2>Fantasy Football Streaming Picks Week 5</h2>
        <p className={classes.leftDescription}>
          Week 5 provides a much better slate of streaming quarterbacks, tight
          ends, and defenses. Teddy Bridgewater headlines the streaming
          quarterback....
        </p>
        <div className={classes.exploreButtonDiv}>
          {" "}
          <Button className={classes.exploreButton}>EXPLORE MORE</Button>
        </div>
      </div>
    </div>
  );
};
export default LeftCard;
