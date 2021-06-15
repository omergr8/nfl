import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import player1 from "../../../../Assets/p1.png";
import player2 from "../../../../Assets/p2.png";

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
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    position: "realtive",
    color: "white",
    [theme.breakpoints.down("md")]: {
      marginBottom: "200px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "50%",
    },
  },
  titleSpan: {
    color: "#2581B7",
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
  player2: {
    marginLeft: "-20px",
    marginTop: "-50px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  player1: {
    marginTop: "-50px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Grid container>
          <Grid item xs={12} lg={3}>
            <div className={classes.player2}>
              <img src={player2} alt="p2" />
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <h1>
              fantasy football stats and{" "}
              <span className={classes.titleSpan}>season leaders</span>
            </h1>
          </Grid>
          <Grid item xs={12} lg={3}>
            <div className={classes.player1}>
              <img src={player1} alt="p1" />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.formTop}>
        <FormControl
          size="small"
          variant="filled"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-label">Season</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
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
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
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
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
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
          <InputLabel id="demo-simple-select-label">To</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
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
          <InputLabel id="demo-simple-select-label">All</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
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
          <InputLabel id="demo-simple-select-label">Position</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
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
          <InputLabel id="demo-simple-select-label">Team</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Search</InputLabel>
          <Input
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
