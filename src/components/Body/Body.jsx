import Sidebar from "./Sidebar";
import FilterButtons from "./FilterButtons";
const Body = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="ml-6 ">
        <FilterButtons />
      </div>
    </div>
  );
};

export default Body;
