import classes2 from "./TransactionTable.module.css";
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
const matchUp = (logo, name) => (
  <div className={classes2.matchupFlex}>
    <div className={classes2.box1}>
      <Box type="red" />
      <img
        src={angry}
        className={classes2.boxLogo}
        width="35px"
        alt="boxLogo"
      />
    </div>
    <p className={classes2.teamName}>{name}</p>
  </div>
);

const InjuriesTable = ({ transactionData }) => {
  const classes = useStyles();
  return (
    <div className={classes2.injuryMain}>
      <Paper className={classes2.dateContainer}>
        {transactionData.map((td, i) => (
          <>
            <div
              className={clsx(classes2.date, i === 0 && classes2.datePadding)}
            >
              <h2> {td.date}</h2>
            </div>

            <TableContainer component={Paper} key={i}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes2.tableHead} align="left">
                      TRANSACTION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {td.data.map((dt, i2) => (
                    <TableRow
                      key={i2}
                      style={
                        i2 % 2
                          ? { background: "#F8F8F8" }
                          : { background: "white" }
                      }
                    >
                      <TableCell align="left" className={classes2.tableCell}>
                        {matchUp(dt.logo, dt.text)}
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
