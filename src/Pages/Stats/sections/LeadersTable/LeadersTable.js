import classes2 from "./LeadersTable.module.css";
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
// import { leadersData } from "../data";
// import avatar from "../../assets/avatar.svg";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    // marginBottom: theme.spacing(2),
  },
}));

const passing = (number, avatar, name, span) => (
  <div className={classes2.passingFlex}>
    <div className={classes2.passingNumber}>
      <p>{number}</p>
    </div>
    <div className={classes2.avatar}>
      <img src={avatar} alt="avatar" width="50px" />
    </div>
    <div className={classes2.passingName}>
      <p>
        {name} <span>{span}</span>
      </p>
    </div>
  </div>
);

// const rows = [createData(passing, 2462)];

const LeadersTable = ({ leadersData, name }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes2.dateContainer}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <div
              className={clsx(
                classes2.dateHeader,
                name === "Offensive Leaders"
                  ? classes2.dateColor1
                  : classes2.dateColor2
              )}
            >
              <p>{name}</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <Paper className={clsx(classes.paper, classes2.dateContainer)}>
        {leadersData.map((ld, i) => (
          <TableContainer component={Paper} key={i}>
            <Table className={classes.table} aria-label="simple table">
              <caption className={classes2.caption}>Complete Leaders</caption>
              <TableHead>
                <TableRow>
                  {ld.header.map((hd, i) => (
                    <TableCell
                      className={classes2.tableHead}
                      key={i}
                      align={i > 0 ? "right" : "inherit"}
                    >
                      {hd.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {ld.data.map((row, index) => (
                  <TableRow
                    key={row.id}
                    style={
                      index % 2
                        ? { background: "#F8F8F8" }
                        : { background: "white" }
                    }
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes2.tableCell}
                    >
                      {passing(row.id, row.avatar, row.name, row.span)}
                    </TableCell>
                    <TableCell align="right" className={classes2.tableCell}>
                      {row.yds}
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
export default LeadersTable;
