import classes from "./HeadBox.module.css";

const HeadBox = ({ logo }) => {
  return (
    <div>
      <div className={classes.boxFlex}>
        <div className={classes.redBox}></div>
        <div className={classes.whiteBox}>
          <img src={logo} alt="logo" width="142px" />
        </div>
      </div>
    </div>
  );
};
export default HeadBox;
