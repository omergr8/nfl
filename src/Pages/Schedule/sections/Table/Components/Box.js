import classes from "../ScheduleTable.module.css";

const Box = (props) => {
  return (
    <div>
      <div className={classes.boxFlex}>
        {props.type === "red" ? (
          <div className={classes.redBox}></div>
        ) : (
          <div className={classes.blueBox}></div>
        )}
        <div className={classes.whiteBox}></div>
      </div>
    </div>
  );
};
export default Box;
