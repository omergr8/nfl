import classes from "./Filter.module.css";
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },

  select: {
    background: "white",
    "&:hover": {
      background: "white",
    },
    "&:focus": {
      backgroundColor: "white",
    },
    "&:before": {
      borderColor: "white !important",
    },
    "&:after": {
      borderColor: "white !important",
    },
  },
  icon: {
    // fill: "white",
  },
}));
const Filter = () => {
  const classes2 = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.selectFlex}>
        <div>
          <FormControl variant="filled" className={classes2.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              // value={age}
              // onChange={handleChange}
              classes={{ root: classes2.select }}
              inputProps={{
                classes: {
                  icon: classes2.icon,
                },
              }}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>2020</MenuItem>
              <MenuItem value={20}>2021</MenuItem>
              <MenuItem value={30}>2022</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
export default Filter;
