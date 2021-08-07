import classes from "./Injuries.module.css";
import nflLogo from "../../Assets/nflLogo.svg";
import Filter from "./sections/Filter/Filter";
import { injuriesData } from "./injuriesData";
import InjuriesTable from "./sections/InjuriesTable/InjuriesTable";
const Injuries = () => {
  return (
    <div>
      <div className={classes.nflContainer}>
        <img src={nflLogo} alt="nflLogo" />
        <h2>Injuries</h2>
      </div>
      <Filter />
      <InjuriesTable injuriesData={injuriesData} />
    </div>
  );
};
export default Injuries;
