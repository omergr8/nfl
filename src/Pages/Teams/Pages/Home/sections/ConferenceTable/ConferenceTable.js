import classes2 from "./ConferenceTable.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Box from "./Components/Box";
import buffaloLogo from "../../../../assets/buffaloLogo.svg";
import { classes } from "istanbul-lib-coverage";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    // marginBottom: theme.spacing(2),
  },
}));
const tableCard = (t) => (
  <div className={classes2.tableCardFlex}>
    <div>
      <div className={classes2.box1}>
        <Box type="red" />
        <img
          src={buffaloLogo}
          className={classes2.boxLogo}
          width="35px"
          alt="boxLogo"
        />
      </div>
    </div>

    <div className={classes2.colDiv}>
      <p className={classes2.ctTeamName}>Buffalo Bills</p>
      <div className={classes2.cardFlexLinks}>
        <p>Stats</p>
        <p>|</p>
        <p>Schedule</p>
        <p>|</p>
        <p>Roster</p>
        <p>|</p>
        <p>Depth Chart</p>
      </div>
    </div>
  </div>
);
const ConferenceTable = ({ confereneceData, name }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes2.dateContainer}>
        <div
          className={clsx(
            classes2.dateHeader,
            name === "AMERICAN Football Conference"
              ? classes2.dateColor1
              : classes2.dateColor2
          )}
        >
          <p>{name}</p>
        </div>
      </div>
      <Paper className={clsx(classes.paper, classes2.dateContainer)}>
        {confereneceData.map((cd, i) => (
          <TableContainer component={Paper} key={i}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{cd.header}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cd.data.map((row, index) => (
                  <TableRow
                    key={row.id}
                    //  style={
                    //    index % 2
                    //      ? { background: "#F8F8F8" }
                    //      : { background: "white" }
                    //  }
                    className={classes2.tableRow}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes2.tableCell}
                    >
                      {tableCard("hello")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ))}
      </Paper>
    </div>
  );
};
export default ConferenceTable;
