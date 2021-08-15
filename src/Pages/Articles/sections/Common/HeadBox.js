import classes from "./Common.module.css";

const HeadBox = ({ heading }) => {
  return (
    <div className={classes.main}>
      <h2 className={classes.hbHeading}>{heading}</h2>
      <div className={classes.iconFlex}>
        <div className={classes.paraWhite}></div>
        <div className={classes.paraBlue}></div>
        <div className={classes.paraWhite}></div>
      </div>
    </div>
  );
};
export default HeadBox;
