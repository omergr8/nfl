import classes from "../Highlights.module.css";
import leftHigh from "../../../assets/leftHigh.png";
const LeftCard = () => {
  return (
    <div>
      <div className={classes.leftContainer}>
        <div className={classes.leftImage}>
          <img src={leftHigh} alt="leftHigh" width="100%" />
        </div>
        <div className={classes.leftTextContainer}>
          <p className={classes.leftText1}>10/9/2020</p>
          <p className={classes.leftText2}>
            Matchup Previews + Week 5 Injury Analysis With Dr. David Caho (2020
            FANTASY FOOTBALL)
          </p>
        </div>
      </div>
    </div>
  );
};
export default LeftCard;
