import React from "react";
import classes from "./StatsTabs.module.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
const StatsTabs = ({ tabHandler }) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      tabHandler(newAlignment);
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            value="left"
            classes={{ root: classes.toggleButton, selected: classes.selected }}
          >
            <p>Player</p>
          </ToggleButton>
          <ToggleButton
            value="center"
            classes={{ root: classes.toggleButton, selected: classes.selected }}
          >
            <p>Team</p>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
export default StatsTabs;
