import Table from "../Home/sections/Table/Table";
import Filter from "./sections/Filter/Filter";
import LoadMore from "./sections/LoadMore/LoadMore";
const Home = () => {
  return (
    <div>
      <Filter />
      <Table />
      <LoadMore />
    </div>
  );
};
export default Home;
