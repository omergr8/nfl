import classes2 from "./RosterTable.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import avatar from "../../../../assets/avatar.svg";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const nameDiv = (avatarr, name, number) => (
  <div className={classes2.flex}>
    <div className={classes2.imgDiv}>
      <img src={avatar} alt="avatar" width="40px" />
    </div>
    <div className={classes2.nameDiv}>
      <p>{name}</p>
    </div>
    <div className={classes2.numberDiv}>
      <p> {number}</p>
    </div>
  </div>
);

const RosterTable = ({ rosterData }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes2.dateContainer}>
        {rosterData.map((rd, i) => (
          <>
            <div className={classes2.heading}>
              <h2>{rd.type}</h2>
            </div>
            <TableContainer component={Paper} key={i}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow className={classes2.tableRowHead}>
                    <TableCell className={classes2.tableHead}>NAME</TableCell>
                    <TableCell className={classes2.tableHead} align="center">
                      POS
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="center">
                      AGE
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="center">
                      HT
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="center">
                      WT
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="center">
                      EXP
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="center">
                      COLLEGE
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
                        {nameDiv(dt.name.avatar, dt.name.name, dt.name.number)}
                      </TableCell>
                      <TableCell className={classes2.tableCell} align="center">
                        {dt.pos}
                      </TableCell>
                      <TableCell className={classes2.tableCell} align="center">
                        {dt.age}
                      </TableCell>
                      <TableCell className={classes2.tableCell} align="center">
                        {dt.ht}
                      </TableCell>
                      <TableCell className={classes2.tableCell} align="center">
                        {dt.wt}
                      </TableCell>
                      <TableCell className={classes2.tableCell} align="center">
                        {dt.exp}
                      </TableCell>
                      <TableCell className={classes2.tableCell} align="center">
                        {dt.college}
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
export default RosterTable;
