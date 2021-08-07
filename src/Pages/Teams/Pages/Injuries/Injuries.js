import classes from "./Injuries.module.css";
import HeadBox from "./sections/HeadBox/HeadBox";
import Filter from "./sections/Filter/Filter";
import Button from "@material-ui/core/Button";
import InjuriesCard from "./sections/InjuriesCard/InjuriesCard";
import scheduleBuffaloLogo from "../../assets/scheduleBuffaloLogo.svg";
import { injuriesData } from "./injuriesData";
const Injuries = () => {
  return (
    <div>
      <div className={classes.nflContainer}>
        <HeadBox logo={scheduleBuffaloLogo} />
        <h2>Injuries</h2>
      </div>
      <div className={classes.schdeuleFilter}>
        <div className={classes.filterAboveText}>
          <p>5-2</p>
          <p>1st in AFC East</p>
          <Button variant="outlined" className={classes.filterAboveButton}>
            follow
          </Button>
        </div>
        <Filter />
      </div>
      <InjuriesCard injuriesData={injuriesData} />
    </div>
  );
};
export default Injuries;
