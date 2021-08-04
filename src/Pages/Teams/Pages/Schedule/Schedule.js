import classes from "./Schedule.module.css";
import ScheduleTable from "./sections/ScheduleTable/ScheduleTable";
import { scheduleDataRegular, scheduleDataPreseason } from "./scheduleData";
import Button from "@material-ui/core/Button";
import Filter from "./sections/Filter/Filter";
import HeadBox from "./sections/HeadBox/HeadBox";
import scheduleBuffaloLogo from "../../assets/scheduleBuffaloLogo.svg";
const Schedule = () => {
  return (
    <div>
      <div className={classes.nflContainer}>
        <HeadBox logo={scheduleBuffaloLogo} />
        <h2></h2>
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
      <ScheduleTable scheduleDataRegular={scheduleDataRegular} />
    </div>
  );
};
export default Schedule;
