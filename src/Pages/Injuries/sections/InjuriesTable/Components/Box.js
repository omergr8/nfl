import classes from "../InjuriesTable.module.css";
import angry from "../../../assets/angry.svg";
const Box = () => {
  return (
    <div className={classes.mainBox}>
      <div className={classes.boxFlex}>
        <div className={classes.redBox}></div>
        <div className={classes.whiteBox}>
          <div className={classes.boxImage}>
            <img src={angry} width="35px" alt="angry" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Box;
