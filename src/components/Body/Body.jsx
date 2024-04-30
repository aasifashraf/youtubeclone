import Sidebar from "./Sidebar";
import FilterButtons from "./FilterButtons";
import Videos from "./VideoSection/Videos";
const Body = () => {
  return (
    <div className="flex ">
      <div className="w-[30rem]">
        <Sidebar />
      </div>
      <div className="ml-6 w-1/1 ">
        <FilterButtons />
        <Videos className="" />
      </div>
    </div>
  );
};

export default Body;
