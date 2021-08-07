import classes from "./Roster.module.css";
import RosterTable from "./sections/RosterTable/RosterTable";
import HeadBox from "./sections/HeadBox/HeadBox";
import Filter from "./sections/Filter/Filter";
import Button from "@material-ui/core/Button";
import { rosterData } from "./rosterData";
import scheduleBuffaloLogo from "../../assets/scheduleBuffaloLogo.svg";
const Roster = () => {
  return (
    <div>
      <div className={classes.nflContainer}>
        <HeadBox logo={scheduleBuffaloLogo} />
        <h2>Roster</h2>
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
      <RosterTable rosterData={rosterData} />
    </div>
  );
};
export default Roster;
