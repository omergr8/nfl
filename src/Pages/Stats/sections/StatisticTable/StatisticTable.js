import classes2 from "./StatisticTable.module.css";
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
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    // marginBottom: theme.spacing(2),
  },
}));
const StatisticTable = ({ statsData, name }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes2.dateContainer}>
        <Grid container>
          <Grid item xs={12} lg={4}>
            <div className={classes2.dateHeader}>
              <p>{name}</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <Paper className={clsx(classes.paper, classes2.dateContainer)}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>OFFENCE</TableCell>
                <TableCell align="center">DEFENCE</TableCell>
                <TableCell align="center">SPECIAL TEAMS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statsData.map((row, index) => (
                <TableRow
                  key={row.id}
                  style={
                    index % 2
                      ? { background: "#F8F8F8" }
                      : { background: "white" }
                  }
                  className={classes2.tableRow}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes2.tableCell}
                  >
                    {row.offense}
                  </TableCell>
                  <TableCell align="center" className={classes2.tableCell}>
                    {row.defense}
                  </TableCell>
                  <TableCell align="center" className={classes2.tableCell}>
                    {row.st}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
export default StatisticTable;
