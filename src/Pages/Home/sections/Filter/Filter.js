import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import Title from "./Components/Title/Title";
import {
  position,
  team,
  fantasyScoring,
  preSeason,
  regularSeason,
  postSeason,
} from "./filterData";
var year = require("year");
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(3),
    minWidth: 220,
    backgroundColor: "white",
  },
  select: {
    backgroundColor: "white",
  },
  label: { color: "white" },
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: "white",
  },

  container: {
    position: "relative",
  },
  formTop: {
    zIndex: "9",
    marginTop: "-170px",
    textAlign: "center",
    width: "100%",
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [season, setSeason] = React.useState("");
  const [yearr, setYear] = React.useState("");
  const [type, setType] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [tofromdata, setToFromData] = React.useState([]);
  const [all, setAll] = React.useState("");
  const [positionn, setPosition] = React.useState("");
  const [teamm, setTeam] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [fantasyscoringg, setFantasyScoring] = React.useState("");
  const [years, setYears] = React.useState([]);
  const handleChange = (event) => {
    console.log("tt", event.target);
    if (event.target.name === "season") {
      setSeason(event.target.value);
      if (event.target.value === "preseason") {
        setToFromData(preSeason);
      } else if (event.target.value === "regular") {
        setToFromData(regularSeason);
      } else if (event.target.value === "postseason") {
        setToFromData(postSeason);
      }
    } else if (event.target.name === "year") {
      setYear(event.target.value);
    } else if (event.target.name === "type") {
      setType(event.target.value);
    } else if (event.target.name === "from") {
      setFrom(event.target.value);
    } else if (event.target.name === "to") {
      setTo(event.target.value);
    } else if (event.target.name === "all") {
      setAll(event.target.value);
    } else if (event.target.name === "position") {
      setPosition(event.target.value);
    } else if (event.target.name === "team") {
      setTeam(event.target.value);
    } else if (event.target.name === "search") {
      setSearch(event.target.value);
    } else if (event.target.name === "fantasyscoring") {
      setFantasyScoring(event.target.value);
    }
    // setAge(event.target.value);
  };
  React.useEffect(() => {
    var rows = [];
    var initialYear = 2009;
    console.log(initialYear !== parseInt(year("yyyy")));
    while (initialYear !== parseInt(year("yyyy"))) {
      rows.push(++initialYear);
    }
    setYears(rows);
  }, []);

  return (
    <div className={classes.container}>
      <Title />
      <div className={classes.formTop}>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">Season</InputLabel>
          <Select
            name="season"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={season}
            onChange={handleChange}
          >
            <MenuItem value="preseason">Preseason</MenuItem>
            <MenuItem value="regular">Regular</MenuItem>
            <MenuItem value="postseason">Postseason</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-labell">Year</InputLabel>
          <Select
            name="year"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={yearr}
            onChange={handleChange}
          >
            {years.map((years, index) => (
              <MenuItem key={index} value={years}>
                {years}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            name="type"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">From</InputLabel>
          <Select
            name="from"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={from}
            onChange={handleChange}
          >
            {tofromdata.length !== 0 ? (
              tofromdata.map((data, index) => (
                <MenuItem key={index} value={data}>
                  {data}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="none">none</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">To</InputLabel>
          <Select
            name="to"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={to}
            onChange={handleChange}
          >
            {tofromdata.length !== 0 ? (
              tofromdata.map((data, index) => (
                <MenuItem key={index} value={data}>
                  {data}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="none">none</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">All</InputLabel>
          <Select
            name="all"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={all}
            onChange={handleChange}
          >
            <MenuItem value="all">All</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">Position</InputLabel>
          <Select
            name="position"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={positionn}
            onChange={handleChange}
          >
            {position.map((pos, index) => (
              <MenuItem value={pos} key={index}>
                {pos}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">Team</InputLabel>
          <Select
            name="team"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={teamm}
            onChange={handleChange}
          >
            {team.map((team, index) => (
              <MenuItem value={team.abr} key={index}>
                {team.abr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Search</InputLabel>
          <Input
            name="search"
            onChange={handleChange}
            value={search}
            id="input-with-icon-adornment"
            endAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">Fantasy Scoring</InputLabel>
          <Select
            name="fantasyscoring"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fantasyscoringg}
            onChange={handleChange}
          >
            {fantasyScoring.map((score, index) => (
              <MenuItem value={score.abr} key={index}>
                {score.abr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
