import classes from "./Stats.module.css";
import React, { useState, useEffect } from "react";
import Filter from "./sections/Filter/Filter";
import Button from "@material-ui/core/Button";
import HeadBox from "./sections/HeadBox/HeadBox";
import StatsTabs from "./sections/StatsTabs/StatsTabs";
import StatsTable from "./sections/StatsTable/StatsTable";
import scheduleBuffaloLogo from "../../assets/scheduleBuffaloLogo.svg";
import { statData } from "./statData";
const Stats = () => {
  const [currentTab, setCurrentTab] = useState("left");
  const tabHandler = (value) => {
    setCurrentTab(value);
  };
  return (
    <div>
      {/* <div className={classes.statsFlex}>
        <StatsTabs tabHandler={(v) => tabHandler(v)} />
        <Filter />
      </div> */}
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
        <div className={classes.statsFlex}>
          <StatsTabs
            className={classes.statsTabs}
            tabHandler={(v) => tabHandler(v)}
          />
          <Filter />
        </div>
      </div>
      <div>
        <StatsTable statData={statData} />
      </div>
    </div>
  );
};
export default Stats;
