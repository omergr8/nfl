import classes from "../StatsTable.module.css";
import avatar from "../../../../../assets/avatar.svg";
const TeamLeader = ({ tlData }) => {
  return (
    <div className={classes.teamMain1}>
      <div className={classes.teamMain}>
        {tlData.map((dt, i) => (
          <div className={classes.teamCell} key={i}>
            <div className={classes.teamCellContainer}>
              <div className={classes.cellText}>
                <p>Passing Yards</p>
              </div>
              <div className={classes.cellFlex}>
                <div className={classes.cellAvatar}>
                  <img src={avatar} alt="avatar" width="55px" />
                </div>
                <div className={classes.cellFlexText}>
                  <p>
                    {dt.name}, <span>{dt.pos}</span>
                  </p>
                  <h2>{dt.rating}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamLeader;
