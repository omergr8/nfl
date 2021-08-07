import classes from "./Stats.module.css";
import React, { useState, useEffect } from "react";
import LeadersTable from "./sections/LeadersTable/LeadersTable";
import StatisticTable from "./sections/StatisticTable/StatisticTable";
import Filter from "./sections/Filter/Filter";
import StatsTabs from "./sections/StatsTabs/StatsTabs";
import Grid from "@material-ui/core/Grid";
import { leadersData, leadersData2, statsData } from "./sections/data";
import nflLogo from "../../Assets/nflLogo.svg";
const Stats = () => {
  const [currentTab, setCurrentTab] = useState("left");
  const tabHandler = (value) => {
    setCurrentTab(value);
  };
  return (
    <div>
      <div className={classes.nflContainer}>
        <img src={nflLogo} alt="nflLogo" />
        <h2>Stat Leaders 2020</h2>
      </div>
      <div className={classes.statsFlex}>
        <StatsTabs tabHandler={(v) => tabHandler(v)} />
        <Filter />
      </div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <LeadersTable
            leadersData={currentTab === "left" ? leadersData : leadersData2}
            name="Offensive Leaders"
          />
        </Grid>
        <Grid item xs={6}>
          <LeadersTable
            leadersData={currentTab === "left" ? leadersData : leadersData2}
            name="Defensive Leaders"
          />
        </Grid>
        <Grid item xs={12}>
          <StatisticTable
            statsData={statsData}
            name={
              currentTab === "left" ? "Player Statistics" : "Team Statistics"
            }
          />
        </Grid>
        <Grid item xs={12}>
          <StatisticTable
            statsData={statsData}
            name={
              currentTab === "left" ? "Team Statistics" : "Player Statistics"
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Stats;
