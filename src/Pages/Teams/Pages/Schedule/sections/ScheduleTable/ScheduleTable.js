import classes2 from "./ScheduleTable.module.css";
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
import scheduleOpponent from "../../../../assets/scheduleOpponent.svg";
import scheduleTeam from "../../../../assets/scheduleTeam.svg";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    // marginBottom: theme.spacing(2),
  },
}));
const opponent = (sign, logo, name) => (
  <div className={classes2.opponentFlex}>
    <div className={classes2.opponentSign}>{sign}</div>
    <div className={classes2.opponentLogo}>
      <img src={scheduleOpponent} alt="scheduleOpponent" />{" "}
    </div>
    <div className={classes2.opponentName}>{name}</div>
  </div>
);
const result = (r1, r2) => (
  <div className={classes2.opponentFlex}>
    <div className={classes2.resultText}>{r1}</div>
    <div className={classes2.resultName}>{r2}</div>
  </div>
);
const hi = (h1, h2) => (
  <div className={classes2.opponentFlex}>
    <div
      className={clsx(
        classes2.hiName,
        h1 === "CANCELED" ? classes2.grayHiText : classes2.blueHiText
      )}
    >
      {h1}
    </div>
    <div className={classes2.hiNumber}>{h2}</div>
  </div>
);
const tickets = (ticket) => (
  <div className={classes2.opponentFlex}>
    <div className={classes2.ticketText}>{ticket}</div>
    <div className={classes2.ticketLogo}>
      <img src={scheduleTeam} alt="scheduleTeam" />
    </div>
  </div>
);
const ScheduleTable = ({ scheduleDataRegular }) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={clsx(classes.paper, classes2.dateContainer)}>
        {scheduleDataRegular.map((ld, i) => (
          <>
            {ld.season !== null && (
              <div className={classes2.tableSeason}>
                <p>{ld.season}</p>
              </div>
            )}

            <TableContainer component={Paper} key={i}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {ld.header.map((hd, i) => (
                      <TableCell key={i}>{hd}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ld.type === "main"
                    ? ld.data.map((row, index) => (
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
                            className={clsx(
                              classes2.grayRow,
                              classes2.removeBorder
                            )}
                          >
                            {/* {passing(row.id, row.avatar, row.name, row.span)} */}
                            {row.wk}
                          </TableCell>
                          <TableCell
                            className={clsx(
                              classes2.grayRow,
                              classes2.removeBorder
                            )}
                          >
                            {row.date}
                          </TableCell>
                          <TableCell className={clsx(classes2.removeBorder)}>
                            {opponent(
                              row.opponentSign,
                              row.opponentLogo,
                              row.opponentName
                            )}
                          </TableCell>
                          <TableCell className={clsx(classes2.removeBorder)}>
                            {result(row.result1, row.result2)}
                          </TableCell>
                          <TableCell className={clsx(classes2.removeBorder)}>
                            {row.wl}
                          </TableCell>
                          <TableCell className={clsx(classes2.removeBorder)}>
                            {hi(row.hipass1, row.hipass2)}
                          </TableCell>
                          <TableCell className={clsx(classes2.removeBorder)}>
                            {hi(row.hirush1, row.hirush2)}
                          </TableCell>
                          <TableCell className={clsx(classes2.removeBorder)}>
                            {hi(row.hirec1, row.hirec2)}
                          </TableCell>
                        </TableRow>
                      ))
                    : ld.data.map((row, index) => (
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
                            className={clsx(
                              classes2.grayRow,
                              classes2.removeBorder
                            )}
                          >
                            {/* {passing(row.id, row.avatar, row.name, row.span)} */}
                            {row.wk}
                          </TableCell>
                          <TableCell
                            className={clsx(
                              classes2.grayRow,
                              classes2.removeBorder
                            )}
                          >
                            {row.date}
                          </TableCell>
                          <TableCell className={clsx(classes2.removeBorder)}>
                            {opponent(
                              row.opponentSign,
                              row.opponentLogo,
                              row.opponentName
                            )}
                          </TableCell>
                          <TableCell
                            className={clsx(
                              classes2.blueRow,
                              classes2.removeBorder
                            )}
                          >
                            {row.time}
                          </TableCell>
                          <TableCell className={clsx(classes2.removeBorder)}>
                            {row.tv}
                          </TableCell>
                          <TableCell className={clsx(classes2.removeBorder)}>
                            {tickets(row.tickets)}
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
export default ScheduleTable;
