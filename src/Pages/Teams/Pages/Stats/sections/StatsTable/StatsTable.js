import classes2 from "./StatsTable.module.css";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TeamLeader from "./Components/TeamLeader";
import Paper from "@material-ui/core/Paper";

function descendingComparator(a, b, orderBy) {
  console.log(a, b, orderBy);
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  console.log(order, orderBy);
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  console.log(array, comparator);
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  console.log(stabilizedThis);
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "yds",
    numeric: true,
    disablePadding: false,
    label: "YDS",
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, header, heading } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {header.map((h, i) =>
          h !== "YDS" ? (
            <TableCell
              align={i === 0 ? "left" : "center"}
              className={clsx(
                classes2.tableHead,
                (h === "DEF" || h === "DEF%") && classes2.visuallyHidden,
                heading === "Recieving" && h === "DEF%"
                  ? classes2.paddingHead
                  : null
              )}
            >
              {h}
            </TableCell>
          ) : (
            headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                className={clsx(classes2.tableHead, classes2.ydsWidth)}
                align="center"
                padding={headCell.disablePadding ? "none" : "normal"}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={
                    headCell.id === "yds" ? orderBy === headCell.id : null
                  }
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={
                    headCell.id === "yds"
                      ? createSortHandler(headCell.id)
                      : null
                  }
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))
          )
        )}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    // marginTop: "20px",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 850,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function StatsTable({ statData }) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [totalN, setTotalN] = React.useState(0);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  function amount(item, type) {
    console.log("type", type);
    return item[type];
  }

  function sum(prev, next) {
    return parseFloat((prev + next).toFixed(2));
  }
  const totalHandler = (d, type) => {
    console.log("ggf is", d);
    return d.map((ar) => amount(ar, type)).reduce(sum);
  };
  const nameDiv = (name, pos) => (
    <div className={classes2.nameDivFlex}>
      <p className={classes2.nameDivText}>{name},</p>
      <p className={classes2.nameDivSpan}>{pos}</p>
    </div>
  );
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {statData.map((rows, index) => (
          <>
            <div
              className={clsx(
                classes2.tableHeading,
                index === 0 && classes2.tableHeading2
              )}
            >
              <h2>{rows.heading}</h2>
            </div>
            {rows.heading === "Team Leaders" && (
              <div>
                <TeamLeader tlData={rows.tlData} />
              </div>
            )}

            {rows.heading !== "Team Leaders" && (
              <TableContainer key={index}>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.data.length}
                    header={rows.header}
                    heading={rows.heading}
                  />
                  <TableBody>
                    {stableSort(rows.data, getComparator(order, orderBy)).map(
                      (row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <>
                            {rows.heading === "Passing" && (
                              <>
                                <TableRow
                                  style={
                                    index % 2
                                      ? { background: "#F8F8F8" }
                                      : { background: "white" }
                                  }
                                  tabIndex={-1}
                                >
                                  <TableCell
                                    className={`${classes2.borderRight} `}
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                  >
                                    {nameDiv(row.name, row.pos)}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.gp}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {" "}
                                    {row.cmp}
                                  </TableCell>

                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.att}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.cmp2}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    style={
                                      index % 2
                                        ? {
                                            background: "#DCEDF6",
                                          }
                                        : {
                                            background: "#e9f7ff",
                                          }
                                    }
                                    className={`${classes2.borderRight2} `}
                                  >
                                    {row.yds}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.avg}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.ydsg}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.lng}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={`${classes2.borderRight} ${classes2.cellColor}`}
                                  >
                                    {row.td}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.int}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.sack}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={`${classes2.borderRight} ${
                                      row.diff < 0
                                        ? classes2.redColor
                                        : classes2.greenColor
                                    }`}
                                  >
                                    {row.syl}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.rtg}
                                  </TableCell>
                                </TableRow>
                                {index + 1 >= rows.data.length && (
                                  <TableRow>
                                    <TableCell>Total</TableCell>
                                    <TableCell align="center">
                                      {totalHandler(rows.data, "gp")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {totalHandler(rows.data, "cmp")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {totalHandler(rows.data, "att")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {totalHandler(rows.data, "cmp2")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "yds")}
                                    </TableCell>
                                    <TableCell align="center">2-1</TableCell>
                                    <TableCell align="center">3-1</TableCell>
                                    <TableCell align="center">3-0</TableCell>
                                    <TableCell align="center">4-2</TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "int")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "sack")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "syl")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "rtg")}
                                    </TableCell>
                                  </TableRow>
                                )}
                              </>
                            )}
                            {rows.heading === "Rushing" && (
                              <>
                                <TableRow
                                  style={
                                    index % 2
                                      ? { background: "#F8F8F8" }
                                      : { background: "white" }
                                  }
                                  tabIndex={-1}
                                >
                                  <TableCell
                                    className={`${classes2.borderRight} `}
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                  >
                                    {nameDiv(row.name, row.pos)}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.gp}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {" "}
                                    {row.att}
                                  </TableCell>

                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  ></TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  ></TableCell>
                                  <TableCell
                                    align="center"
                                    style={
                                      index % 2
                                        ? {
                                            background: "#DCEDF6",
                                          }
                                        : {
                                            background: "#e9f7ff",
                                          }
                                    }
                                    className={`${classes2.borderRight2} `}
                                  >
                                    {row.yds}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.avg}
                                  </TableCell>

                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.lng}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.big}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={`${classes2.borderRight} ${classes2.cellColor}`}
                                  >
                                    {row.td}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.ydsg}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.fum}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={`${classes2.borderRight} ${
                                      row.diff < 0
                                        ? classes2.redColor
                                        : classes2.greenColor
                                    }`}
                                  >
                                    {row.lst}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.fd}
                                  </TableCell>
                                </TableRow>
                                {index + 1 >= rows.data.length && (
                                  <TableRow>
                                    <TableCell>Total</TableCell>
                                    <TableCell align="center">
                                      {totalHandler(rows.data, "gp")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {totalHandler(rows.data, "att")}
                                    </TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "yds")}
                                    </TableCell>
                                    <TableCell align="center">2-1</TableCell>
                                    <TableCell align="center">3-1</TableCell>
                                    <TableCell align="center">3-0</TableCell>
                                    <TableCell align="center">4-2</TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "ydsg")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "fum")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "lst")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "fd")}
                                    </TableCell>
                                  </TableRow>
                                )}
                              </>
                            )}
                            {rows.heading === "Recieving" && (
                              <>
                                <TableRow
                                  style={
                                    index % 2
                                      ? { background: "#F8F8F8" }
                                      : { background: "white" }
                                  }
                                  tabIndex={-1}
                                >
                                  <TableCell
                                    className={`${classes2.borderRight} `}
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                  >
                                    {nameDiv(row.name, row.pos)}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.gp}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {" "}
                                    {row.rec}
                                  </TableCell>

                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.tgts}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  ></TableCell>
                                  <TableCell
                                    align="center"
                                    style={
                                      index % 2
                                        ? {
                                            background: "#DCEDF6",
                                          }
                                        : {
                                            background: "#e9f7ff",
                                          }
                                    }
                                    className={`${classes2.borderRight2} `}
                                  >
                                    {row.yds}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.avg}
                                  </TableCell>

                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.td}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.lng}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.big}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={`${classes2.borderRight} ${classes2.cellColor}`}
                                  >
                                    {row.ydsg}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.fum}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.lst}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={`${classes2.borderRight} ${
                                      row.diff < 0
                                        ? classes2.redColor
                                        : classes2.greenColor
                                    }`}
                                  >
                                    {row.yac}
                                  </TableCell>
                                  <TableCell
                                    align="center"
                                    className={classes2.cellColor}
                                  >
                                    {row.fd}
                                  </TableCell>
                                </TableRow>
                                {index + 1 >= rows.data.length && (
                                  <TableRow>
                                    <TableCell>Total</TableCell>
                                    <TableCell align="center">
                                      {totalHandler(rows.data, "gp")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {totalHandler(rows.data, "rec")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {totalHandler(rows.data, "tgts")}
                                    </TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "yds")}
                                    </TableCell>
                                    <TableCell align="center">2-1</TableCell>
                                    <TableCell align="center">3-1</TableCell>
                                    <TableCell align="center">3-0</TableCell>
                                    <TableCell align="center">4-2</TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "ydsg")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "fum")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "lst")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "yac")}
                                    </TableCell>
                                    <TableCell align="center">
                                      {" "}
                                      {totalHandler(rows.data, "fd")}
                                    </TableCell>
                                  </TableRow>
                                )}
                              </>
                            )}
                          </>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </>
        ))}
      </Paper>
    </div>
  );
}
