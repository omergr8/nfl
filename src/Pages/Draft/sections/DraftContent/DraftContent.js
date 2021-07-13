import classes from "./DraftContent.module.css";
import MainCard from "./Components/MainCard";
import SecondaryCard from "./Components/SecondaryCard";
const DraftContent = () => {
  return (
    <div>
      <MainCard />

      <div>
        <SecondaryCard />
      </div>
      <div className={classes.secondaryCard}>
        <SecondaryCard />
      </div>
    </div>
  );
};
export default DraftContent;
