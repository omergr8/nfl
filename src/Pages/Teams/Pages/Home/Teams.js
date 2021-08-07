import classes from "./Teams.module.css";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ConferenceTable from "./sections/ConferenceTable/ConferenceTable";
import nflLogo from "../../../../Assets/nflLogo.svg";
import { confereneceData } from "./conferenceData";
const Teams = () => {
  return (
    <div>
      <div className={classes.nflContainer}>
        <img src={nflLogo} alt="nflLogo" />
        <h2>Teams</h2>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ConferenceTable
            confereneceData={confereneceData}
            name="AMERICAN Football Conference"
          />
        </Grid>
        <Grid item xs={6}>
          <ConferenceTable
            confereneceData={confereneceData}
            name="NATIONAL Football Conference"
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Teams;
