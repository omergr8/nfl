import classes from "./SearchPlayer.module.css";
import GameLog from "./sections/GameLog/GameLog";
import HighlightPlayer from "./sections/HighlightPlayer/HighlightPlayer";
import Metrics from "./sections/Metrics/Metrics";
import PlayerDetails from "./sections/PlayerDetails/PlayerDetails";
import News from "./sections/News/News";
const SearchPlayer = () => {
  return (
    <div>
      <PlayerDetails />
      <GameLog />
      <Metrics />
      <div>
        <div className={classes.childNewsDiv}>
          <News />
        </div>
      </div>
    </div>
  );
};
export default SearchPlayer;
