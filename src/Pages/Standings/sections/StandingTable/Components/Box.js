import classes from "../StandingsTable.module.css";

const Box = (props) => {
  return (
    <div>
      <div className={classes.boxFlex}>
        <div
          style={{ backgroundColor: props.type }}
          className={classes.box}
        ></div>

        <div className={classes.whiteBox}></div>
      </div>
    </div>
  );
};
export default Box;
