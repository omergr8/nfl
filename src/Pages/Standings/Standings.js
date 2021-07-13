import classes from "./Standings.module.css";
import Filter from "./sections/Filter/Filter";
import nflLogo from "../../Assets/nflLogo.svg";
import StandingTabs from "./sections/StandingTabs/StandingTabs";
import StandingsTable from "./sections/StandingTable/StandingsTable";
import { tableData1, tableData2 } from "./sections/StandingTable/tableData";
const Standings = () => {
  return (
    <div>
      <div className={classes.nflContainer}>
        <img src={nflLogo} alt="nflLogo" width="100px" />
        <h2>Standings 2020</h2>
      </div>
      <StandingTabs />
      <Filter />
      <StandingsTable
        tableData={tableData1}
        conference="American Football Conference"
      />
      <StandingsTable
        tableData={tableData2}
        conference="National Football Conference"
      />
    </div>
  );
};
export default Standings;
