import Sidebar from "./Sidebar";
import FilterButtons from "./FilterButtons";
import Videos from "./VideoSection/Videos";
const Body = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="ml-6 ">
        <FilterButtons />
        <Videos />
      </div>
    </div>
  );
};

export default Body;
