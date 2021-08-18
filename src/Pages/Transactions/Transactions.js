import classes from "./Transactions.module.css";
import nflLogo from "../../Assets/nflLogo.svg";
import Filter from "./sections/Filter/Filter";
import { transactionData } from "./transactionData";
import TransactionTable from "./sections/TransactionTable/TransactionTable";
const Transactions = () => {
  return (
    <div>
      <div className={classes.nflContainer}>
        <img src={nflLogo} alt="nflLogo" />
        <h2>Transactions</h2>
      </div>
      <Filter />
      <TransactionTable transactionData={transactionData} />
    </div>
  );
};
export default Transactions;
