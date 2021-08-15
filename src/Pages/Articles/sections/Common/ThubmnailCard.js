import classes from "./Common.module.css";
import clsx from "clsx";
import playIcon from "../../assets/playIcon.svg";

const ThubmnailCard = ({ data }) => {
  return (
    <div className={classes.tcMain}>
      {data.map((rd, i) => (
        <div
          className={clsx(i === 0 ? classes.thumbBox2 : classes.thumbBox)}
          key={i}
        >
          <div className={classes.flex}>
            <div className={classes.imageThumb}>
              <img src={rd.image} width="130px" alt="thumbnail" />
              <div className={classes.imageThumbOverlay}></div>
              <div className={classes.imageThumbPlay}>
                <img src={playIcon} alt="playIcon" />
              </div>
            </div>
            <div className={classes.boxText}>
              <p>{rd.date}</p>
              <h2>{rd.heading1}</h2>
              <h2>{rd.heading2}</h2>
              <p>{rd.para}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ThubmnailCard;
