import classes2 from "./InjuriesTable.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "./Components/Box";
import angry from "../../assets/angry.svg";
import clsx from "clsx";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const status = (st) => (
  <div className={classes2.statusFlex}>
    <div
      className={clsx(
        classes2.dot,
        st === "Out" ? classes2.red : classes2.yellow
      )}
    ></div>
    <div className={classes2.statusText}>{st}</div>
  </div>
);
const heading = (heading) => (
  <div className={classes2.tableHeading}>
    <div className={classes2.statusFlex}>
      <div className={classes2.box}>
        <div className={classes2.boxAbs}>
          <Box />
        </div>
      </div>
      <div className={classes2.headingText}>
        <h2>{heading}</h2>
      </div>
    </div>
  </div>
);
const InjuriesTable = ({ injuriesData }) => {
  const classes = useStyles();
  return (
    <div className={classes2.injuryMain}>
      <Paper className={classes2.dateContainer}>
        {injuriesData.map((id, i) => (
          <>
            {heading(id.name)}
            <TableContainer component={Paper} key={i}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes2.tableHead} align="left">
                      NAME
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="left">
                      POS
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="left">
                      DATE
                    </TableCell>
                    <TableCell className={classes2.tableHead} align="left">
                      STATUS
                    </TableCell>
                    <TableCell
                      align="left"
                      className={clsx(classes2.commentCell, classes2.tableHead)}
                    >
                      COMMENT
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {id.data.map((dt, i2) => (
                    <TableRow
                      key={i2}
                      style={
                        i2 % 2
                          ? { background: "#F8F8F8" }
                          : { background: "white" }
                      }
                    >
                      <TableCell align="left" className={classes2.tableCell2}>
                        {dt.name}
                      </TableCell>
                      <TableCell align="left" className={classes2.tableCell}>
                        {dt.pos}
                      </TableCell>
                      <TableCell align="left" className={classes2.tableCell}>
                        {dt.date}
                      </TableCell>
                      <TableCell align="left" className={classes2.tableCell}>
                        {status(dt.status)}
                      </TableCell>
                      <TableCell
                        align="left"
                        className={clsx(
                          classes2.commentCell,
                          classes2.tableCell
                        )}
                      >
                        <p>{dt.comment}</p>
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
export default InjuriesTable;
