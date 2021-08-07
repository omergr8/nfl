import classes2 from "./DepthTable.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import avatar from "../../../../assets/avatar.svg";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const nameDivFirst = (name, cp) => (
  <div className={classes2.flex2}>
    <div className={classes2.nameDiv}>
      <p>{name}</p>
    </div>
    <div className={classes2.cpDiv}>
      <p> {cp}</p>
    </div>
  </div>
);
const nameDiv = (name, cp) => (
  <div className={classes2.flex}>
    <div className={classes2.nameDiv}>
      <p>{name}</p>
    </div>
    <div className={classes2.cpDiv}>
      <p> {cp}</p>
    </div>
  </div>
);

const DepthTable = ({ depthData }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes2.dateContainer}>
        {depthData.map((rd, i) => (
          <>
            <div
              className={clsx(
                classes2.heading,
                i === 0 && classes2.headingPadding
              )}
            >
              <h2>{rd.type}</h2>
            </div>
            <TableContainer component={Paper} key={i}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow className={classes2.tableRowHead}>
                    <TableCell className={classes2.tableHead}></TableCell>
                    <TableCell className={classes2.tableHead}>
                      STARTER
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="center">
                      2ND
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="center">
                      3RD
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="center">
                      4TH
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rd.data.map((dt, i2) => (
                    <TableRow
                      key={i2}
                      style={
                        i2 % 2
                          ? { background: "#F8F8F8" }
                          : { background: "white" }
                      }
                    >
                      <TableCell
                        className={classes2.tableCell}
                        component="th"
                        scope="row"
                      >
                        {dt.position}
                      </TableCell>
                      <TableCell
                        className={classes2.tableCell}
                        component="th"
                        scope="row"
                      >
                        {nameDivFirst(dt.starter.name, dt.starter.cp)}
                      </TableCell>
                      <TableCell className={classes2.tableCell} align="right">
                        {nameDiv(dt.second.name, dt.second.cp)}
                      </TableCell>
                      <TableCell className={classes2.tableCell} align="right">
                        {nameDiv(dt.third.name, dt.third.cp)}
                      </TableCell>
                      <TableCell className={classes2.tableCell} align="center">
                        {nameDiv(dt.fourth.name, dt.fourth.cp)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ))}
      </Paper>
    </div>
  );
};
export default DepthTable;
